import { describe, expect, it } from 'vitest';
import { isHashkey } from './isHashkey';
const hashkeyTestnet = { id: 133 };
const hashkey = { id: 177 };

describe('isHashkey', () => {
  it('should return false if the chainId is not hashkeyTestnet.id or hashkey.id', () => {
    const chainId = 999;
    const result = isHashkey({ chainId });
    expect(result).toEqual(false);
  });

  it('should return true if the chainId is hashkeyTestnet.id', () => {
    const chainId = hashkeyTestnet.id;
    const result = isHashkey({ chainId });
    expect(result).toEqual(true);
  });

  it('should return true if the chainId is hashkey.id', () => {
    const chainId = hashkey.id;
    const result = isHashkey({ chainId });
    expect(result).toEqual(true);
  });

  it('should return true when isMainnetOnly is true and chainId is mainnet', () => {
    const chainId = hashkey.id;
    const isMainnetOnly = true;
    const result = isHashkey({ chainId, isMainnetOnly });
    expect(result).toEqual(true);
  });

  it('should return false when isMainnetOnly is true and chainId is not mainnet', () => {
    const chainId = hashkeyTestnet.id;
    const isMainnetOnly = true;
    const result = isHashkey({ chainId, isMainnetOnly });
    expect(result).toEqual(false);
  });
});
