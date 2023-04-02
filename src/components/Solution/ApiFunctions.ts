import React from "react"

// 1. GetCollectionAttributes
const getCollectionAttributes = {
  comment: "Retrieve the complete list of the attributes in a collection",
  name: "getCollectionAttributes",
  title: "Collection Attributes",
  variable: "contractAddress",
}

// 2. GetNFTCollection
const getNFTCollection = {
  comment: "Retrieve the complete list of NFTs in a collection",
  name: "getNFTCollection",
  title: "NFT Collection",
  variable: "contractAddress",
}

//3 getNFTMetadata
const getNFTMetadata = {
  comment: "Retrieve the link to the metadata of nft",
  name: "getNFTMetadata",
  title: "NFT Metadata",
  variable: "contractAddress, tokenId",
}

// 4. GetWalletNFTs
const getWalletNFTs = {
  comment: "Retrieve all nft in a wallet",
  name: "getWalletNFTs",
  title: "Wallet NFTs",
  variable: "walletAddress",
}

// 5. verifyTokenOwnership
const verifyOwnership = {
  comment: "Verify if a wallet have any nft in a given collection",
  name: "verifyOwnership",
  title: "Verify Ownership",
  variable: "contractAddress, walletAddress",
}

// 6. verifyTokenOwnership
const verifyTokenOwnership = {
  comment: "Verify if a wallet have a given nft",
  name: "verifyTokenOwnership",
  title: "Verify Token Ownership",
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
