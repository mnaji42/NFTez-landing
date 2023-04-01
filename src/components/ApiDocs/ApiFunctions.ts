import React from "react"

// 1. GetNFTCollection(collectionAddress)
const getNFTCollection = {
  comment: "Retrieve the complete list of NFTs in a collection",
  name: "getNFTCollection",
  variable: "collectionAddress",
}

// 2. GetNFTAttributes
const getNFTAttributes = {
  comment: "Retrieve all attributes of an NFT",
  name: "getNFTAttributes",
  variable: "nftAddress",
}

// 3. SummarizeNFTAttributes ( À discuter )
const summarizeNFTAttributes = {
  comment: "Retrieve all attributes of a collection",
  name: "summarizeNFTAttributes",
  variable: "collectionAddress",
}

// 4. GetWalletNFTs
const getWalletNFTs = {
  comment: "Retrieve who is the owner of an nft",
  name: "getWalletNFTs",
  variable: "nftAddress",
}

// 5. verifyOwnership(walletAddress, contractAdress)
const verifyOwnership = {
  comment: "Retrieve the complete list of NFTs in a collection",
  name: "verifyOwnership",
  variable: "walletAddress",
}

export default [
  getNFTCollection,
  getNFTAttributes,
  summarizeNFTAttributes,
  getWalletNFTs,
  verifyOwnership,
]
