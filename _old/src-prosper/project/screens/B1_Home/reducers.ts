// ---------- import Internals
import { firestore } from '../../../config/firebase/fbConfig';
import { asyncRefs } from '../../../config/useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    B1_InitData: () => {
      const scContent = {
        txt01: 'Adicionar Atividades / Oportunidades',
        txt02: 'Meus Clientes',
        txt03: 'KPI',
        txt04: 'Gráfico',
        txt05: 'Minhas Oportunidades',
        txt06: 'Atividades',
      };
      const clientsList = state?.B1?.clients?.itemsList;
      const activitiesList = state?.B1?.activities?.itemsList;
      const opportunitiesList = state?.B1?.opportunities?.itemsList;
      const kpiList = state?.B1?.kpi?.itemsList;
      const condItemsList = list => (list ? { condList: true } : {});

      return {
        ...state,
        B1: {
          ...state?.B1,
          scContent,
          clients: {
            ...state?.B1?.clients,
            ...condItemsList(clientsList),
          },
          activities: {
            ...state?.B1?.activities,
            ...condItemsList(activitiesList),
          },
          opportunities: {
            ...state?.B1?.opportunities,
            ...condItemsList(opportunitiesList),
          },
          kpi: {
            ...state?.B1?.kpi,
            ...condItemsList(kpiList),
          },
        },
      };
    },
  };

  const gets = {
    // ---------- set GET _FirstList
    B1_GET_FirstList: () => {
      const { collectionName, orderField, orderType } = action.info;

      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set Async Call
        const dbRef = firestore.collection(collectionName);
        const dataSuccess = await dbRef
          .orderBy(orderField, orderType)
          .limit(30)
          .get();

        // ------ return SUCCESS
        return dataSuccess;
      };

      // ---------- set Async References
      const ref = asyncRefs(action, asyncFn);

      // ---------- call Async / Mock
      ref.callAsync({ collectionName });

      return state;
    },

    B1_GET_FirstList_SUCCESS: () => {
      // ---------- set Data to Show
      const dataDb = action.value;
      const itemsInfo = {};
      const itemsList = [];
      // const itemsList2 = [];
      dataDb.forEach(doc => {
        itemsInfo[doc.id] = doc.data();
        itemsList.push(doc.id);
        // itemsList.length < 101 && itemsList.push(doc.id);
        // itemsList.length === 101 && itemsList2.push(doc.id);
      });

      // const condList2 = itemsList2.length > 0 && true;
      const { collectionName } = action;

      const arrFilterData = [];
      for (const key in itemsInfo) {
        const element = itemsInfo[key];
        const selTerm = { clients: 'nomeDaEmpresa' };
        const condTerm = selTerm[collectionName];
        const condElement = element[condTerm];
        arrFilterData.push({ term: condElement, id: element.docId });
      }

      return {
        ...state,

        B1: {
          ...state?.B1,
          snapLists: {
            ...state?.B1?.snapLists,
            condFirstList: true,
          },

          [collectionName]: {
            ...state?.B1?.[collectionName],
            itemsList,
            // itemsList2,
            itemsInfo,
            condList: true,
            // condList2,
            arrFilterData,
          },
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
