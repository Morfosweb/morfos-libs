// ---------- import Internals
// import { firestore } from '../../../config/firebase/fbConfig';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    C1_InitData: () => {
      const scContent = {
        title: 'Signin',
        subTitle: 'Oi Mundo!',
        description: 'Lorem Ipsum!',
        txtBtn: 'Ir para os TERMOS',
      };

      return {
        ...state,
        C1: { ...state.C1, scContent },
      };
    },
  };
  const routes = {
    C1_GoToActProfile: () => {
      action.asyncDispatch({ type: 'base_setRoute', value: 'activityProfile' });

      return {
        ...state,
        C1: {
          ...state.C1,
          selecteds: {
            ...state.C1?.selecteds,
            ...action.value,
            // clientId:'',
            // activityId:'',
            // oportunityId:'',
          },
        },
      };
    },
  };

  return {
    ...inits,
    ...routes,
  };
};

// ---------- set Exports
export default reducers;
