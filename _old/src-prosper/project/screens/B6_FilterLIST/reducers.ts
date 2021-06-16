// ---------- import Internals
import { firestore } from '../../../config/firebase/fbConfig';
import { asyncRefs } from '../../../config/useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    B6_InitData: () => {
      const scContent = {
        // --- ItemList
        act1: 'Ver Produtos',
        act2: 'Ver Vendas',
      };

      // action.asyncDispatch({ type: 'B6_GET_B6_FilterLIST' });

      return {
        ...state,
        B6: {
          ...state.B6,
          scContent,
          condList: state?.B1?.clients?.condList,
        },
      };
    },

    // ---------- set Init Filter
    B6_InitFilter: () => {
      const listTypes = {
        stars: {
          // TEMP - No FILTER
          filteredArr: state?.B1?.opportunities?.itemsList,
          itemsFrom: 'B1.opportunities.itemsInfo',
        },
      };

      const listName = state?.B6?.filteredList?.listName;
      const selList = listTypes[listName];

      return {
        ...state,
        B6: {
          ...state?.B6,
          filteredList: {
            listName: action.value,
            filteredArr: selList.filteredArr,
            itemsFrom: selList.itemsFrom,
          },
        },
      };
    },

    // ---------- set GET _B6_FilterLIST
    B6_GET_B6_FilterLIST: () => {
      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set Async Call
        const dbRef = firestore.collection('collection');
        const dataSuccess = await dbRef.orderBy('createdAt', 'desc').get();

        // ------ return SUCCESS
        return dataSuccess;
      };

      // ---------- set Async References
      const ref = asyncRefs(action, asyncFn);

      // ---------- call Async / Mock
      ref.callAsync();

      return {
        ...state,
        B6: { ...state.B6 },
      };
    },

    B6_GET_B6_FilterLIST_SUCCESS: () => {
      // ---------- set Data to Show
      const dataDb = action.value;
      const itemsInfo = {};
      const itemsList = [];
      dataDb.forEach(doc => {
        itemsInfo[doc.id] = doc.data();
        itemsList.push(doc.id);
      });

      return {
        ...state,
        B6: {
          ...state.B6,
          itemsList,
          itemsInfo,
          condList: true,
        },
      };
    },
  };

  // ---------- set GoTo _B6_FilterLIST (To Edit Form)
  const btns = {
    B6_B6_FilterLIST_ADD: () => {
      action.asyncDispatch({ type: 'base_setRoute', value: 'path' });

      return {
        ...state,
        B6: {
          ...state.B6,
          isEditable: false,
          idToEdit: null,
        },
      };
    },
  };

  return {
    ...inits,
    ...btns,
  };
};

// ---------- set Exports
export default reducers;
