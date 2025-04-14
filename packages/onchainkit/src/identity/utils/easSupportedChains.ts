import { easChainBase } from '@/core/network/definitions/base';
import { easChainBaseSepolia } from '@/core/network/definitions/baseSepolia';
import { easChainOptimism } from '@/core/network/definitions/optimism';
import { easChainHashkey } from '@/core/network/definitions/hashkey';
import { easChainHashkeyTestnet } from '@/core/network/definitions/hashkeyTestnet';

import type { EASChainDefinition } from '@/identity/types';
import type { Chain } from 'viem';

export type EASSupportedChains = Record<number, EASChainDefinition>;

// https://docs.attest.org/docs/welcome hashkey not supported yet
export const easSupportedChains: EASSupportedChains = {
  [easChainBase.id]: easChainBase,
  [easChainBaseSepolia.id]: easChainBaseSepolia,
  [easChainOptimism.id]: easChainOptimism,
  [easChainHashkey.id]: easChainHashkey,
  [easChainHashkeyTestnet.id]: easChainHashkeyTestnet,
};

/**
 * Checks if a given blockchain chain is supported by EAS attestations.
 */
export function isChainSupported(chain: Chain): boolean {
  return chain.id in easSupportedChains;
}

/**
 * Function to get the EAS GraphQL API endpoint for a given blockchain.
 */
export function getChainEASGraphQLAPI(chain: Chain): string {
  return easSupportedChains[chain.id]?.easGraphqlAPI ?? '';
}
