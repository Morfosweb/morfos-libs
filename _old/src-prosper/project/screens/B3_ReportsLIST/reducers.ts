// ---------- import Internals
import { firestore } from '../../../config/firebase/fbConfig';
import { asyncRefs } from '../../../config/useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    B3_InitData: () => {
      const scContent = {
        // --- ItemList
        act1: 'Ver Produtos',
        act2: 'Ver Vendas',
      };

      action.asyncDispatch({ type: 'B3_GET_ReportsList' });

      return {
        ...state,
        B3: { ...state.B3, scContent },
      };
    },

    // ---------- set GET _ReportsList
    B3_GET_ReportsList: () => {
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
        B3: { ...state.B3 },
      };
    },

    B3_GET_ReportsList_SUCCESS: () => {
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
        B3: {
          ...state.B3,
          itemsList,
          itemsInfo,
          condList: true,
        },
      };
    },
  };

  // ---------- set GoTo _ReportsList (To Edit Form)
  const btns = {
    B3_ReportsList_ADD: () => {
      action.asyncDispatch({ type: 'base_setRoute', value: 'ReportsListADD' });
      return {
        ...state,
        B3: {
          ...state.B3,
          isEditable: false,
          idToEdit: null,
        },
      };
    },

    B3_Total: () => {
      return {
        ...state,
      };
    },
    B3_Estrelas: () => {
      return {
        ...state,
        B3: { ...state.B3 },
      };
    },
    B3_Oportunidade: () => {
      return {
        ...state,
        B3: { ...state.B3 },
      };
    },
    B3_EmNegocio: () => {
      return {
        ...state,
        B3: { ...state.B3 },
      };
    },
    B3_Fechado: () => {
      return {
        ...state,
        B3: { ...state.B3 },
      };
    },
    B3_Concluidos: () => {
      return {
        ...state,
        B3: { ...state.B3 },
      };
    },
    B3_VendPerdida: () => {
      return {
        ...state,
        B3: { ...state.B3 },
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
