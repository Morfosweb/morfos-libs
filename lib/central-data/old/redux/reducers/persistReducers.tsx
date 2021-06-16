// ----------- import Packs
// import condStorage from '@react-native-community/async-storage';
import condStorage from '../../condPacks/storage';

import { persistReducer, createTransform } from 'redux-persist';

// ----------- import Internals
import reducers from '.';

// ----------- set Config

// const pathTransform = createTransform(
//   whiteItem => whiteItem,
//   whiteItem => ({ path: whiteItem.path }),
//   { whitelist: ['baseRoute'] },
// );

const persistConfig = {
  storage: condStorage,
  key: 'root',
  // whitelist: ['basePersist', 'baseRoute'],
  whitelist: ['basePersist'],
  // transforms: [pathTransform],
};

export default persistReducer(persistConfig, reducers);
