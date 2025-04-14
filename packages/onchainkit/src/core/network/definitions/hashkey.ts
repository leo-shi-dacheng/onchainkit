import type { EASChainDefinition } from '@/identity/types';
import { hashkey } from 'viem/chains';

/**
 * Hashkey chain configuration for EAS
 */
export const easChainHashkey: EASChainDefinition = {
  id: hashkey.id,
  easGraphqlAPI: 'https://base.easscan.org/graphql',
  // TODO: Add schema UIDs for Hashkey
  schemaUids: [
  ],
};
