// ---------- import Internals
import { firestore } from '../../../config/firebase/fbConfig';
import { asyncRefs } from '../../../config/useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    B10_InitData: () => {
      const scContent = {
        // --- ItemList
        act1: 'Ver Produtos',
        act2: 'Ver Vendas',
      };

      action.asyncDispatch({ type: 'B10_GET_Name' });

      return {
        ...state,
        B10: { ...state.B10, scContent },
      };
    },

    // ---------- set GET _Name
    B10_GET_Name: () => {
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
        B10: { ...state.B10 },
      };
    },

    B10_GET_Name_SUCCESS: () => {
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
        B10: {
          ...state.B10,
          itemsList,
          itemsInfo,
          condList: true,
        },
      };
    },
  };

  // ---------- set GoTo _Name (To Edit Form)
  const btns = {
    B10_Name_ADD: () => {
      action.asyncDispatch({ type: 'base_setRoute', value: 'path' });
      return {
        ...state,
        B10: {
          ...state.B10,
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
