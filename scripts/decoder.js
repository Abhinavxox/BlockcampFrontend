const abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paperId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalAmountFunded",
        type: "uint256",
      },
    ],
    name: "Funding",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "paperId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenUri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "author",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "allowFunding",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fundAmount",
        type: "uint256",
      },
    ],
    name: "Published",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "paperId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "allowFunding",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "UpdatePaper",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "papers",
    outputs: [
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "string", name: "author", type: "string" },
      { internalType: "string", name: "tokenUri", type: "string" },
      { internalType: "bool", name: "allowFunding", type: "bool" },
      { internalType: "uint256", name: "fundAmount", type: "uint256" },
      {
        internalType: "uint256",
        name: "totalAmountFunded",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "tokenURI", type: "string" },
      { internalType: "string", name: "_author", type: "string" },
      { internalType: "bool", name: "_isfunding", type: "bool" },
      { internalType: "uint256", name: "_fundAmount", type: "uint256" },
    ],
    name: "publish",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_paperid", type: "uint256" }],
    name: "fundapaper",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
  {
    inputs: [
      { internalType: "uint256", name: "_paperid", type: "uint256" },
      { internalType: "bool", name: "_allowFunding", type: "bool" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "updatepaper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
import InputDataDecoder from "ethereum-input-data-decoder";
import fs from "fs";

const decoderFunc = async () => {
  const response = await fetch(
    "https://api-testnet.polygonscan.com/api?module=account&action=txlist&address=0x7927AC439cE73470DC6dB291341c5432d207630C&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=E6RIVGV1TRE41IJ2TPVWU7K8GKZTITDKXE"
  );
  const json = await response.json();
  const resultArr = json.result;
  const filteredArr = resultArr.slice(2);

  //decode
  const decoder = new InputDataDecoder(abi);

  const results = filteredArr.map(async (item) => {
    const result = decoder.decodeData(item.input);
    const url = result.inputs[0];
    //remove ipfs prefix and add https in the beginning
    //ipfs://bafyreia6l7lwjnodq6qyeow7avxmdimsoxwl6pcbvvb75imxkwh674od5e/metadata.json to https://bafyreia6l7lwjnodq6qyeow7avxmdimsoxwl6pcbvvb75imxkwh674od5e.ipfs.dweb.link/metadata.json

    const url2 = url.replace("ipfs://", "https://");
    const url3 = url2.replace(
      "/metadata.json",
      ".ipfs.dweb.link/metadata.json"
    );
    // console.log(url3);
    const result2 = await fetch(url3);
    const result3 = await result2.json();
    const resuslturl1 = result3.image
      .replace("ipfs://", "https://")
      .replace("/metadata.json", ".ipfs.dweb.link/metadata.json");

    const resulturl2 = result3.pdf
      .replace("ipfs://", "https://")
      .replace("/metadata.json", ".ipfs.dweb.link/metadata.json");
  });
  return results;
};

export default decoderFunc;
