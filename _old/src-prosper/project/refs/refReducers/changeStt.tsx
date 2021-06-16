// ---------- import Internals
// import { firestore } from '../../../config/firebase/fbConfig';

// ---------- set Reducers
const reducers = (state, action) => {
  // ---------- set Reducers Groups
  const changes = {
    // ---------- set CHANGE X0 _Name_
    X0_ChangeName: () => {
      return {
        ...state,
        sttName: { ...action.value },
      };
    },
  };

  // ---------- set Reducers Return
  return {
    ...changes,
  };
};

// ---------- set Exports
export default reducers;
