import {
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  mainnet,
  optimism,
  optimismSepolia,
  polygon,
  polygonMumbai,
  sepolia,
  hashkey,
  hashkeyTestnet,
} from 'viem/chains';

const defaultExplorer = 'https://hashkeychain-testnet-explorer.alt.technology';

const chainExplorerMap: Record<number, string> = {
  [baseSepolia.id]: 'https://sepolia.basescan.org',
  [base.id]: 'https://basescan.org',
  [arbitrum.id]: 'https://arbiscan.io',
  [arbitrumSepolia.id]: 'https://sepolia.arbiscan.io',
  [optimism.id]: 'https://optimistic.etherscan.io',
  [optimismSepolia.id]: 'https://sepolia-optimism.etherscan.io/',
  [polygon.id]: 'https://polygonscan.com',
  [polygonMumbai.id]: 'https://mumbai.polygonscan.com',
  [mainnet.id]: 'https://etherscan.io',
  [sepolia.id]: 'https://sepolia.etherscan.io',
  [hashkey.id]: 'https://hashkey.blockscout.com',
  [hashkeyTestnet.id]: 'https://hashkeychain-testnet-explorer.alt.technology',
};

export function getChainExplorer(chainId?: number) {
  if (!chainId) {
    return defaultExplorer;
  }

  return chainExplorerMap[chainId] ?? defaultExplorer;
}
