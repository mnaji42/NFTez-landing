import React, { FC } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import { useLandingState } from "../../context/LandingStateContext"
import { AnimateLogo } from "../icons"
import { sections } from "../../constants"
import { MediaQueries } from "../"

import DocButton from "./DocButton"

import cn from "classnames"
import { styles } from "../../styles"
import s from "./Navbar.module.css"

interface NavbarProps {
  className?: string
}

const titleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transform: [
      "translateX(0)",
      "translateX(-20px)",
      "translateX(10)",
      "translateX(-10)",
      "translateX(0)",
    ],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}

const linksVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
}

const linkVariants = {
  hidden: {
    opacity: 0,
    y: -48,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const docsVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.5,
    },
  },
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { hash, setHash } = useLandingState()

  return (
    <motion.nav className={cn(s.container, `${styles.paddingX}`, className)}>
      <div className={s.subContainer}>
        <Link
          className={s.link}
          to="/"
          onClick={() => {
            setHash("", false)
            window.scrollTo(0, 0)
          }}
        >
          <AnimateLogo />
          <motion.p
            className={s.title}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            NFTez&nbsp;<span>| Build Faster</span>
          </motion.p>
        </Link>
        <motion.ul
          className={s.navLinkContainer}
          variants={linksVariants}
          initial="hidden"
          animate="visible"
        >
          {sections.map((section) => (
            <motion.li
              key={`link-key-${section}`}
              className={cn(s.navLink, {
                [s.active]: hash === section,
              })}
              onClick={() => setHash(section, true)}
              variants={linkVariants}
            >
              {section}
            </motion.li>
          ))}
        </motion.ul>
        <motion.a
          href="https://nftez-doc.vercel.app"
          target="_blank"
          initial="hidden"
          animate="visible"
          variants={docsVariants}
        >
          <DocButton />
        </motion.a>
      </div>
    </motion.nav>
  )
}

export default Navbar
