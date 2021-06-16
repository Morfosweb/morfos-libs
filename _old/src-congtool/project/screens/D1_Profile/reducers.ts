// ---------- import Internals
import { firebase } from '../../../config/firebase/fbConfig';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    D1_InitData: () => {
      const scContent = {
        title: 'Profile',
        subTitle: 'Oi Mundo!',
        description: 'Lorem Ipsum!',
        txtBtn: 'Ir para os TERMOS',
      };

      return {
        ...state,
        D1: { ...state.D1, scContent },
      };
    },
  };

  const auth = {
    // ---------- set Init Data
    D1_SignOut: () => {
      // ---------- set SignOut Firebase
      firebase.auth().signOut();

      // ---------- set Clear Data
      action.asyncDispatch({ type: 'base_CLEAR' });

      // ---------- set State
      return {
        ...state,
      };
    },
  };

  return {
    ...inits,
    ...auth,
  };
};

// ---------- set Exports
export default reducers;
