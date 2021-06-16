// ---------- import Internals
// import { firestore } from '../../../config/';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    B2_InitData: () => {
      const scContent = {
        txt01: 'XXX1',
      };

      return {
        ...state,
        B2: { ...state.B2, scContent, condList: state?.B1?.clients?.condList },
      };
    },
  };

  return { ...inits };
};

// ---------- set Exports
export default reducers;
