// ---------- import Internals

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Inits Data
    D5_InitData: () => {
      action.asyncDispatch({ type: 'D5_GET_YearClients' });
      action.asyncDispatch({ type: 'D5_InitData2' });

      const condList = state?.D5?.currYear?.condList;

      return {
        ...state,
        D5: {
          ...state.D5,
          condList,
        },
      };
    },

    D5_InitData2: () => {
      action.asyncDispatch({ type: 'D5_InitForm' });

      // ---------- set Current Data
      const year = new Date().getFullYear();
      const month = new Date().getMonth();

      return {
        ...state,
        D5: {
          ...state.D5,

          currYear: {
            ...state?.D5?.currYear,
            year: String(year),
            // condList,
          },

          currMonth: {
            month: String(month),
          },

          forms: {
            iptsChanges: {
              year: String(year),
              month: String(month),
            },
          },
        },
      };
    },
  };

  const forms = {
    D5_InitForm: () => {
      // ---------- set Edit
      // const idToEdit = state?.D5.idToEdit;
      // const isEditable = idToEdit ? true : false;

      // ------- set Forms Data
      const iptsInfo = {
        // ---------- Inputs Base

        annual: {
          // ----- set Dynamics
          itemId: 'annual',
          required: true,
          iptChange: 'D5_IptTxt',

          // ----- set Statics
          dataPath: 'D5.forms.iptsChanges.annual',
          pHolder: '00',

          // editData,
          // isEditable,
        },
      };

      return {
        ...state,
        D5: {
          ...state.D5,
          forms: {
            ...state.D5.forms,
            iptsInfo: { ...iptsInfo },
          },
        },
      };
    },

    // ---------- set Form Changes by Type
    D5_IptPicker1: () => {
      action.asyncDispatch({
        type: 'D5_GET_YearClients',
        year: action.label,
      });

      return {
        ...state,
        D5: {
          ...state.D5,
          forms: {
            ...state.D5.forms,
            iptsChanges: {
              ...state.D5.forms.iptsChanges,
              [action.itemId]: action.value,
            },
          },
        },
      };
    },

    D5_IptPicker2: () => {
      action.asyncDispatch({
        type: 'D5_GET_YearClients',
        month: action.label,
      });

      return {
        ...state,
        D5: {
          ...state.D5,
          forms: {
            ...state.D5.forms,
            iptsChanges: {
              ...state.D5.forms.iptsChanges,
              [action.itemId]: action.value,
            },
          },
        },
      };
    },
  };

  const gets = {
    D5_GET_YearClients: () => {
      // ---------- set Data
      const currYear = new Date().getFullYear();
      const selYear = action.year ?? String(currYear);

      const clients = state?.B1?.clients?.itemsInfo ?? [];
      const opportunities = state?.B1?.opportunities?.itemsInfo ?? [];
      const activities = state?.B1?.activities?.itemsInfo ?? [];
      const kpi = state?.B1?.kpi?.itemsInfo ?? [];

      // ---------- set Containers
      // let itemsInfo = {};
      // let itemsList = [];

      // ---------- set Year Filters
      const setYear = (data, field) => {
        const arrOpp = Object.values(data);
        const date1 = new Date(`${Number(selYear)}-01-01`).getTime();
        const date2 = new Date(
          `${String(Number(selYear) + 1)}-01-01`,
        ).getTime();

        const filterOpp = arrOpp.filter(item => {
          const toDate = item[field].seconds * 1000;

          return toDate > date1 && toDate < date2;
        });

        return filterOpp;
      };

      const arrKpi = Object.values(kpi);
      const kpiYear = arrKpi.filter(item => item.year === selYear);

      // ---------- set OutPut Obj
      const itemsInfo = {
        clients: setYear(clients, 'createdAt'),
        opportunities: setYear(opportunities, 'dateEndOpportunity'),
        activities: setYear(activities, 'dateActivity'),
        kpi: kpiYear[0],
      };

      const objTotal = {
        anual: 0,
        productName: 'Total',
        valueMensal: 0,
        valueMensalAtingido: 0,
        valueMensalAtingidoPercentual: 0,
        valueMensalFaltante: 0,
        valueMensalFaltantePercentual: 0,
      };

      const condTotal = itemsInfo?.kpi?.products[0].productName === 'Total';
      !condTotal && itemsInfo?.kpi?.products.unshift(objTotal);

      // ----------- set Pikers
      let listYear = [];
      const current_year = new Date().getFullYear() - 5;
      for (let index = 0; index < 16; index++) {
        const year = String(current_year + index);
        const idx = String(index);

        // listYear.push({ label: year, id: idx });
        listYear.push({ label: year, id: year });
      }
      const listMonth = [
        { label: 'Janeiro', id: '0' },
        { label: 'Fevereiro', id: '1' },
        { label: 'Março', id: '2' },
        { label: 'Abril', id: '3' },
        { label: 'Maio', id: '4' },
        { label: 'Junho', id: '5' },
        { label: 'Julho', id: '6' },
        { label: 'Agosto', id: '7' },
        { label: 'Setembro', id: '8' },
        { label: 'Outubro', id: '9' },
        { label: 'Novembro', id: '10' },
        { label: 'Dezembro', id: '11' },
      ];

      return {
        ...state,
        D5: {
          ...state?.D5,
          listYear,
          listMonth,
          condList: true,

          currYear: {
            ...state?.D5?.currYear,
            ...itemsInfo,
            condList: true,
          },
          currMonth: { ...state?.D5?.currMonth },
        },
      };
    },
  };

  return {
    ...inits,
    ...forms,
    ...gets,
  };
};

// ---------- set Exports
export default reducers;
