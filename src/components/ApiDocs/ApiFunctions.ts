import React from "react"

// 1. GetCollectionAttributes
const getCollectionAttributes = {
  comment: "Retrieve the complete list of the attributes in a collection",
  name: "getCollectionAttributes",
  variable: "contractAddress",
}

// 2. GetNFTCollection
const getNFTCollection = {
  comment: "Retrieve the complete list of NFTs in a collection",
  name: "getNFTCollection",
  variable: "contractAddress",
}

//3 getNFTMetadata
const getNFTMetadata = {
  comment: "Retrieve the link to the metadata of nft",
  name: "getNFTMetadata",
  variable: "contractAddress, tokenId",
}

// 4. GetWalletNFTs
const getWalletNFTs = {
  comment: "Retrieve all nft in a wallet",
  name: "getWalletNFTs",
  variable: "walletAddress",
}

// 5. verifyTokenOwnership
const verifyOwnership = {
  comment: "Verify if a wallet have any nft in a given collection",
  name: "verifyOwnership",
  variable: "contractAddress, walletAddress",
}

// 6. verifyTokenOwnership
const verifyTokenOwnership = {
  comment: "Verify if a wallet have a given nft",
  name: "verifyTokenOwnership",
  variable: "walletAddress",
}

export default [
  getCollectionAttributes,
  getNFTCollection,
  getNFTMetadata,
  getWalletNFTs,
  verifyOwnership,
  verifyTokenOwnership,
]
