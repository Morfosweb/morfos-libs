// ---------- import Internals
import { firestore } from '../../../config/firebase/fbConfig';
import { asyncRefs } from '../../../config/useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => {
  // ---------- set GoTo _Name (To Edit Form)
  const inits = {
    B11_InitData: () => {
      return {
        ...state,

        B11: {
          ...state.B11,
          condList: state?.B1?.clients?.condList,
        },
      };
    },
  };

  const forms = {
    B11_IptGetValue: () => {
      return {
        ...state,
        B11: {
          ...state?.B11,
          forms: {
            ...state?.B11?.forms,
            iptsChanges: {
              ...state?.B11?.forms?.iptsChanges,
              searchTerm: action.value,
            },
          },
        },
      };
    },

    B11_ClearIpt: () => {
      return {
        ...state,
        B11: {
          ...state?.B11,
          forms: {
            ...state?.B11?.forms,
            iptsChanges: {},
          },
        },
      };
    },

    B11_FilterItems: () => {
      return {
        ...state,
        B11: {
          ...state.B11,
          filteredArr: action.value,
        },
      };
    },
  };

  return {
    ...forms,
    ...inits,
  };
};

// ---------- set Exports
export default reducers;
