// ---------- import Internals
import { firestore } from '../../../config/firebase/fbConfig';
import { asyncRefs } from '../../../config/useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    D3_InitData: () => {
      // ---------- set Initial Month
      const refMonthYear = state?.baseDateInfo.refMonthYear;
      action.asyncDispatch({
        type: 'D3_GET_Month',
        newMonthYear: refMonthYear,
      });

      return {
        ...state,
        D3: {
          ...state.D3,
          selMonthYear: refMonthYear,
          // scContent
        },
      };
    },
  };

  const gets = {
    // ---------- set GET _People
    D3_GET_Month: () => {
      const { newMonthYear } = action;

      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set Selected Domain Id
        const domainId = state.baseDomains.selectedDomain.docId;

        // ---------- set Async Call
        const refDomain = firestore.collection('domains').doc(domainId);
        const dbRef = refDomain
          .collection('fieldReports')
          .where('refMonthYear', '==', newMonthYear);
        const dataSuccess = await dbRef.get();

        // ------ return SUCCESS
        return dataSuccess;
      };

      // ---------- set Async References
      const ref = asyncRefs(action, asyncFn);

      // ---------- call Async / Mock
      ref.callAsync();

      return {
        ...state,
        D3: {
          ...state.D3,
          newMonthYear,

          condLoader: false,
        },
      };
    },

    D3_GET_Month_SUCCESS: () => {
      // ---------- set Data to Show
      const dataDb = action.value;
      const refMonthYear = state?.D3?.newMonthYear;

      const itemsList: any = [];
      dataDb.forEach(doc => {
        itemsList.push(doc.data());
      });

      type RefVal = { reportGroups: {} };
      const refValue: RefVal = itemsList[0];

      // ---------- set users group
      const newValue = {
        [refMonthYear]: {
          ...refValue,
        },
      };

      return {
        ...state,
        baseDomains: {
          ...state.baseDomains,
          selectedDomain: {
            ...state.baseDomains.selectedDomain,
            reportsData: {
              ...state.baseDomains.selectedDomain.reportsData,
              ...newValue,
            },
          },
        },

        D3: {
          ...state.D3,
          selMonthYear: state.D3.newMonthYear,
          newMonthYear: null,

          condLoader: true,
        },
      };
    },
  };

  return {
    ...inits,
    ...gets,
  };
};

// ---------- set Exports
export default reducers;
