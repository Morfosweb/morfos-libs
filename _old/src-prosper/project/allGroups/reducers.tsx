// ---------- import Internals
import { asyncRefs } from '../../config/useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => {
  const gets = {
    // ---------- set Shops List
    allgps_GET_User: () => {
      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set Async Call
        const dbRef = firestore.collection('users').doc(action.value);
        const dataSuccess = await dbRef.get();

        // ------ return SUCCESS
        return dataSuccess;
      };

      // ---------- set Async References
      const ref = asyncRefs(action, asyncFn);

      // ---------- call Async / Mock
      ref.callAsync();

      return state;
    },

    allgps_GET_User_SUCCESS: () => {
      // ---------- set Data to Show
      const dataDb = action.value.data();

      return {
        ...state,
        baseAuthUser: {
          ...dataDb,
        },
      };
    },

    allgps_B1_CondSnap: () => {
      const condProp = 'condSnap' + action.value;

      return {
        ...state,
        B1: {
          ...state.B1,
          snapLists: {
            ...state?.B1?.snapLists,
            [condProp]: true,
          },
        },
      };
    },
  };

  return {
    ...gets,
  };
};

// ---------- set Exports
export default reducers;
