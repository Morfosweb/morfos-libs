// ---------- import Packs
// import { setData } from '@morfos/central-data';
import { setData } from '../../../lib/central-data';

const delay = (ms = 100) => new Promise(res => setTimeout(res, ms));

// ----------- set Function Component
export const prodsList = async () => {
  const getProdBase = 'await firestore...';
  const getProdShop = 'await firestore...';

  const setMergeData = 'forin...';

  await setData({
    A1: { B: { listProds: ['wait...'], C: { p1: 'Hi', p2: 'bye' } } },

    A2: 'aaa',
  });

  console.log('ESPERA...');
  await delay(2000);
  console.log('...PRONTO!');

  const result = [getProdBase, getProdShop, setMergeData];

  return setData(null, ({ clearObj, clearArr }) => ({
    A1: {
      B: {
        listProds: [...clearArr, ...result],
        C: { ...clearObj, p2: 'goodBye' },
      },
      ...clearObj,
    },
  }));
};
