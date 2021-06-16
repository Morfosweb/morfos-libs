// ---------- import Internals
// import { firestore } from '../../../config/firebase/fbConfig';

// ---------- set Reducers
const reducers = (state, action) => ({
  // ---------- set Init Data _Name_
  X_404_InitData: () => {
    const scContent = {
      title: 'Signin',
      errorMsg: 'Oi Mundo!',
      description: 'Lorem Ipsum!',
      txtBtn: 'Ir para os TERMOS',
    };

    return {
      ...state,
      X_404: { ...state.X_404, scContent },
    };
  },
});

// ---------- set Exports
export default reducers;
