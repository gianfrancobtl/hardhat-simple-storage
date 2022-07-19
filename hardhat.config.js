require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage")

const RINKEBY_RPC_URL =
    process.env.RINKEBY_RPC_URL ||
    "https://eth-rinkeby.alchemyapi.io/v2/AxHADY4baURbO7NDKoLJymqzsAVZIZh9"
const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "0x14d704db6fdcd5a43c6935db118b82b7c07e0c391838e17b6efa765d35729630"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            //accounts: [0x70997970c51812dc3a010c7d01b50e0d17dc79c8],
            chainId: 31337,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
    solidity: "0.8.9",
}
