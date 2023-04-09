import React, {
  FC,
  Dispatch,
  SetStateAction,
  FormEvent,
  ChangeEventHandler,
  FormEventHandler,
} from "react"

import { motion } from "framer-motion"
import sdk from "test-tezos"
import Input from "../../Input"

import cn from "classnames"
import s from "./FormSdk.module.css"

interface FormSdkProps {
  className?: string
  funcSelected: string
  contractAddress: string
  setContractAddress: Dispatch<SetStateAction<string>>
  walletAddress: string
  setWalletAddress: Dispatch<SetStateAction<string>>
  setResApi: Dispatch<SetStateAction<{} | null>>
  setLoading: Dispatch<SetStateAction<boolean>>
}

interface InputProps {
  label: string
  value: string
  onchange: ChangeEventHandler<HTMLInputElement>
}

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 33,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const FormSdk: FC<FormSdkProps> = ({
  funcSelected,
  className,
  contractAddress,
  setContractAddress,
  walletAddress,
  setWalletAddress,
  setLoading,
  setResApi,
}) => {
  const isOnline = [
    "getNFTCollection",
    "getWalletNFTs",
    "verifyOwnership",
  ].includes(funcSelected)

  const getInputs = (funcSelected: string): Array<InputProps> => {
    let inputs: Array<InputProps> = []

    if (funcSelected === "getNFTCollection")
      inputs = [
        {
          label: "contractAddress",
          value: contractAddress,
          onchange: (e: FormEvent<HTMLInputElement>) =>
            setContractAddress(e.currentTarget.value),
        },
      ]
    else if (funcSelected === "getWalletNFTs")
      inputs = [
        {
          label: "walletAddress",
          value: walletAddress,
          onchange: (e: FormEvent<HTMLInputElement>) =>
            setWalletAddress(e.currentTarget.value),
        },
      ]
    else if (funcSelected === "verifyOwnership")
      inputs = [
        {
          label: "contractAddress",
          value: contractAddress,
          onchange: (e: FormEvent<HTMLInputElement>) =>
            setContractAddress(e.currentTarget.value),
        },
        {
          label: "walletAddress",
          value: walletAddress,
          onchange: (e: FormEvent<HTMLInputElement>) =>
            setWalletAddress(e.currentTarget.value),
        },
      ]

    return inputs
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    let res = null
    setLoading(true)
    if (funcSelected === "getNFTCollection") {
      res = await sdk.getNFTCollection(contractAddress)
    } else if (funcSelected === "getWalletNFTs") {
      res = await sdk.getWalletNFTs(walletAddress)
    } else if (funcSelected === "verifyOwnership") {
      const isOwner = await sdk.verifyOwnership(walletAddress, contractAddress)
      res = {
        isOwner,
      }
    }
    setResApi(res)
    setLoading(false)
  }

  if (!isOnline) return <div className={cn(s.skeletton, className)}></div>

  return (
    <motion.form
      className={cn(s.container, className)}
      onSubmit={onSubmit}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <>
        {getInputs(funcSelected).map(({ label, value, onchange }, i) => (
          <Input
            key={`input-${i}`}
            type="text"
            required
            label={label}
            value={value}
            onChange={onchange}
            className={s.input}
          />
        ))}
        <button
          className={cn(s.button, "violet-gradient text-white")}
          type="submit"
        >
          Submit
        </button>
      </>
    </motion.form>
  )
}

export default FormSdk
