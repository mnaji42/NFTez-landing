import React from "react"

// 1. GetNFTCollection(collectionAddress)
const getNFTCollection = {
  comment: "Retrieve the complete list of NFTs in a collection",
  code: "getNFTCollection(collectionAddress)",
}

// 2. GetNFTAttributes
const getNFTAttributes = {
  comment: "Retrieve all attributes of an NFT",
  code: "getNFTAttributes(nftAddress)",
}

// 3. SummarizeNFTAttributes ( À discuter )
const summarizeNFTAttributes = {
  comment: "Retrieve all attributes of a collection",
  code: "summarizeNFTAttributes(collectionAddress)",
}

// 4. GetWalletNFTs
const getWalletNFTs = {
  comment: "Retrieve who is the owner of an nft",
  code: "getWalletNFTs(nftAddress)",
}

// 5. verifyOwnership(walletAddress, contractAdress)
const verifyOwnership = {
  comment: "Retrieve the complete list of NFTs in a collection",
  code: "verifyOwnership(walletAddress)",
}

export default [
  getNFTCollection,
  getNFTAttributes,
  summarizeNFTAttributes,
  getWalletNFTs,
  verifyOwnership,
]
