// ---------- import Internals
import { asyncRefs, mergeDeep } from '../../useMorfos/utils';
import initialState from '../../../project/initialState';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ---------- set Reducers
export default (state, action) => {
  const persists = {
    base_GET_PERSIST() {
      // ---------- set Get Persist Data (Web + Native)
      const asyncFn = async () => {
        const localData = await AsyncStorage.getItem('basePersist');
        const localDataTs = localData ?? '{}';
        return JSON.parse(localDataTs);
      };

      // ---------- set Async References
      const ref = asyncRefs(action, asyncFn);

      // ---------- call Async / Mock
      ref.callAsync();

      // ---------- set Return
      return { ...state };
    },

    // ---------- set Persist Local Storage
    base_SET_PERSIST() {
      // ---------- set Data

      const asyncFn = async () => {
        const objPersist = action.value;

        // ---------- set Local Storage
        const storageObj = JSON.stringify(objPersist);
        await AsyncStorage.setItem('basePersist', storageObj);
      };

      // ---------- set Async References
      const ref = asyncRefs(action, asyncFn);

      // ---------- call Async / Mock
      ref.callAsync();

      // ---------- set Return
      return { ...state };
    },

    base_CLEAR() {
      // ---------- clear Local Storage
      localStorage.clear();

      // ---------- set Initial Reducer
      action.asyncDispatch({ type: 'base_InitRoutes' });

      // ---------- set Return State
      return {
        ...initialState
      };
    }
  };

  const asyncs = {
    getData() {
      const { refCode, refName } = action.refs;
      const newRef = 'base_' + refCode;
      const pendingName = `${refName}_Pending`;
      const errorName = `${refName}_Error`;
      return { newRef, pendingName, errorName };
    },
    // ---------- set Async Messages
    base_ASYNC_START_MSG() {
      const { newRef, pendingName, errorName } = asyncs.getData();
      return {
        ...state,
        ...mergeDeep(state[newRef], {
          msgs: { [pendingName]: true, [errorName]: null }
        })
      };
    },

    base_ASYNC_SUCCESS_MSG() {
      const { newRef, pendingName, errorName } = asyncs.getData();

      return {
        ...state,
        ...mergeDeep(state[newRef], {
          msgs: { [pendingName]: false, [errorName]: false }
        })
      };
    },

    base_ASYNC_ERROR_MSG() {
      const { newRef, pendingName, errorName } = asyncs.getData();

      return {
        ...state,
        ...mergeDeep(state[newRef], {
          msgs: { [pendingName]: false, [errorName]: true }
        })
      };
    },

    base_ASYNC_MSGS() {
      return {
        ...state,
        [action.code]: {
          ...state[action.code],
          msgs: { ...action.msgs }
        }
      };
    }
  };

  // ---------- set Return
  return {
    ...asyncs,
    ...persists
  };
};
