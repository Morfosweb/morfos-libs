// ---------- import Internals
import { firestore } from '../../../config/firebase/fbConfig';
import { asyncRefs } from '../../../config/useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => {
  // ---------- set Reducers Groups
  const gets = {};
  const adds = {};
  const updates = {};
  const deletes = {};
  const example = {
    // ---------- set GET _Name
    X0_GET_Name: () => {
      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set Async Call
        const dbRef = firestore.collection('col');
        const dataSuccess = await dbRef.orderBy('createdAt', 'desc').get();

        // ------ return SUCCESS
        return action.asyncDispatch({
          type: ref.successName,
          value: dataSuccess,
        });
      };

      // ---------- set Async References
      const ref = asyncRefs(action, asyncFn);

      // ---------- call Async / Mock
      ref.callAsync();

      // ------ set Return
      return state;
    },

    X0_GET_Name_SUCCESS: () => {
      // ---------- set Data to Show
      const namesInfo = {};
      const namesList = [];
      dataDb.forEach(doc => {
        namesInfo[doc.id] = doc.data();
        namesList.push(doc.id);
      });

      return {
        ...state,
        X0: {
          ...state.X0,
          namesList,
          namesInfo,
          condList: true,
        },
      };
    },
  };

  // ---------- set Reducers Return
  return {
    ...gets,
    ...adds,
    ...updates,
    ...deletes,
  };
};

// ---------- set Exports
export default reducers;
