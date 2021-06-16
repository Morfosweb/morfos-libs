// ---------- import Packs
// import { setData } from '@morfos/central-data';
import { setData } from '../../../lib/central-data';

const delay = (ms = 100) => new Promise(res => setTimeout(res, ms));

// ----------- set Function Component
export const prodsList = async () => {
  const getProdBase = 'await firestore...';
  const getProdShop = 'await firestore...';

  const setMergeData = 'forin...';

  await setData({ A1: { listProds: 'wait...' } });

  console.log('ESPERA...');
  await delay(5000);
  console.log('...PRONTO!');

  const result = [getProdBase, getProdShop, setMergeData];

  setData({ A1: { listProds: result } });
};
