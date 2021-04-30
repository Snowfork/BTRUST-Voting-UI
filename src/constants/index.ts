import { ChainId, JSBI, Percent, Token } from '@uniswap/sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { fortmatic, injected, portis, walletconnect, walletlink } from '../connectors'

// get abis and addresses from copied <deployments githb files BTRUST contracts>
import GOVERNANCE from '../abi/Governance.json'
import BTRUSTS from '../abi/BTRUST.json'
import TIMELOCK from '../abi/Timelock.json'
import GOVERNANCE_DECISIONS from '../abi/GovernanceDecisions.json'
// deployed Ropsten Contract Addresses
export const GOVERNANCE_ADDRESS = GOVERNANCE.address
export const BTRUST_ADDRESS = BTRUSTS.address
export const TIMELOCK_ADDRESS = TIMELOCK.address
export const GOVERNANCE_DECISIONS_ADDRESS = GOVERNANCE_DECISIONS.address

//export const ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export { PRELOADED_PROPOSALS } from './proposals'

// Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time
export const AVERAGE_BLOCK_TIME_IN_SECS = 13
export const PROPOSAL_LENGTH_IN_BLOCKS = 40_320
export const PROPOSAL_LENGTH_IN_SECS = AVERAGE_BLOCK_TIME_IN_SECS * PROPOSAL_LENGTH_IN_BLOCKS

export const BTRUST: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, BTRUST_ADDRESS, 18, 'BTRUST', 'BTRUST'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, BTRUST_ADDRESS, 18, 'BTRUST', 'BTRUST'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, BTRUST_ADDRESS, 18, 'BTRUST', 'BTRUST'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, BTRUST_ADDRESS, 18, 'BTRUST', 'BTRUST'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, BTRUST_ADDRESS, 18, 'BTRUST', 'BTRUST')
}

export const COMMON_CONTRACT_NAMES: { [address: string]: string } = {
  [BTRUST_ADDRESS]: 'BTRUST',
  [GOVERNANCE_ADDRESS]: 'Governance',
  [TIMELOCK_ADDRESS]: 'Timelock',
  [GOVERNANCE_DECISIONS_ADDRESS]: 'GovernanceDecisions'
}

// TODO: specify merkle distributor for mainnet
export const MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e'
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true
  },
  FORTMATIC: {
    connector: fortmatic,
    name: 'Fortmatic',
    iconName: 'fortmaticIcon.png',
    description: 'Login using Fortmatic hosted wallet',
    href: null,
    color: '#6748FF',
    mobile: true
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    iconName: 'portisIcon.png',
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true
  }
}

export const NetworkContextName = 'NETWORK'

// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// used for rewards deadlines
export const BIG_INT_SECONDS_IN_WEEK = JSBI.BigInt(60 * 60 * 24 * 7)

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')
