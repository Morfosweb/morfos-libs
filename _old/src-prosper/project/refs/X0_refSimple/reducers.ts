// ---------- import Internals
// import { firestore } from '../../../config/firebase/fbConfig';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    X0_InitData: () => {
      const scContent = {
        title: 'Signin',
        subTitle: 'Oi Mundo!',
        description: 'Lorem Ipsum!',
        txtBtn: 'Ir para os TERMOS',
      };

      return {
        ...state,
        X0: { ...state.X0, scContent },
      };
    },
  };

  return {
    ...inits,
  };
};

// ---------- set Exports
export default reducers;
