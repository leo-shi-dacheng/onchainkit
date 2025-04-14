import type { EASChainDefinition } from '@/identity/types';
import { hashkeyTestnet } from 'viem/chains';

/**
 * hashkeyTestnet chain configuration for EAS
 */
export const easChainHashkeyTestnet: EASChainDefinition = {
  id: hashkeyTestnet.id,
  easGraphqlAPI: 'https://base.easscan.org/graphql',
  // TODO: Add schema UIDs for Hashkey
  schemaUids: [
  ],
};
