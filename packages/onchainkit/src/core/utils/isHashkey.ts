import { hashkey, hashkeyTestnet } from 'viem/chains';
import type { IsHashkeyOptions } from '../types';

/**
 * isHashkey
 *  - Checks if the paymaster operations chain id is valid
 *  - Only allows the hashkey and hashkeyTestnet chain ids
 */
export function isHashkey({
  chainId,
  isMainnetOnly = false,
}: IsHashkeyOptions): boolean {
  // If only hashkey mainnet
  if (isMainnetOnly && chainId === hashkey.id) {
    return true;
  }
  // If only hashkey or hashkeyTestnet
  if (!isMainnetOnly && (chainId === hashkeyTestnet.id || chainId === hashkey.id)) {
    return true;
  }
  return false;
}
