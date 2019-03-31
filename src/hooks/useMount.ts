import { useEffect, EffectCallback } from 'react';

export const useMount = (fn: EffectCallback) => useEffect(fn, []);
