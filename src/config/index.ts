import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage } from 'wagmi';

// Define the zgTestnet chain
export const zgTestnet = {
  id: 16601,
  name: '0G Galileo Testnet',
  network: '0G-Galileo-Testnet',
  nativeCurrency: {
    decimals: 18,
    name: '0G',
    symbol: '0G',
  },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_L1_RPC || 'https://evmrpc-testnet.0g.ai'],
    },
    public: {
      http: [process.env.NEXT_PUBLIC_L1_RPC || 'https://evmrpc-testnet.0g.ai'],
    },
  },
} as const;

// Metadata for your dApp
const metadata = {
  name: '0G Storage',
  description: 'Storage Starter',
  url: 'https://0g.ai',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

// WalletConnect projectId
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || '';

export const config = defaultWagmiConfig({
  chains: [zgTestnet],
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true,
}); 
