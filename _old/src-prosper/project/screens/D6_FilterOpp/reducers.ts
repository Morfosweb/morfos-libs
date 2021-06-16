// ---------- import Internals

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    D6_InitData: () => {
      const scContent = {
        txt01: 'XXX1',
      };

      const condList = state?.B1?.opportunities?.itemsList;

      return {
        ...state,

        D6: { ...state?.D6, scContent, condList },
      };
    },
  };

  const forms = {
    D6_IptClient: () => {
      const { value } = action;

      return {
        ...state,
        D6: {
          ...state.D6,
          forms: {
            ...state?.D6?.forms,
            iptChanges: {
              ...state?.D6?.forms?.iptChanges,
              client: value,
            },
          },
        },
      };
    },
    D6_IptProb: () => {
      const { value } = action;

      return {
        ...state,
        D6: {
          ...state.D6,
          forms: {
            ...state?.D6?.forms,
            iptChanges: {
              ...state?.D6?.forms?.iptChanges,
              prob: value,
            },
          },
        },
      };
    },
    D6_PickState: () => {
      const { value } = action;

      return {
        ...state,
        D6: {
          ...state.D6,
          forms: {
            ...state?.D6?.forms,
            iptChanges: {
              ...state?.D6?.forms?.iptChanges,
              state: value,
            },
          },
        },
      };
    },
    D6_PickCity: () => {
      const { value } = action;

      return {
        ...state,
        D6: {
          ...state.D6,
          forms: {
            ...state?.D6?.forms,
            iptChanges: {
              ...state?.D6?.forms?.iptChanges,
              city: value,
            },
          },
        },
      };
    },
    D6_PickProd: () => {
      const { value } = action;

      return {
        ...state,
        D6: {
          ...state.D6,
          forms: {
            ...state?.D6?.forms,
            iptChanges: {
              ...state?.D6?.forms?.iptChanges,
              prod: value,
            },
          },
        },
      };
    },
    D6_PickMod: () => {
      const { value } = action;

      return {
        ...state,
        D6: {
          ...state.D6,
          forms: {
            ...state?.D6?.forms,
            iptChanges: {
              ...state?.D6?.forms?.iptChanges,
              mod: value,
            },
          },
        },
      };
    },
    D6_BtnClear: () => {
      return {
        ...state,
        D6: {
          ...state.D6,
          forms: {
            ...state?.D6?.forms,
            iptChanges: {},
          },
        },
      };
    },
    D6_BtnFilter: () => {
      const newArr = [];
      const itemsObj = state?.B1?.opportunities?.itemsInfo;
      const itemsArr = Object.values(itemsObj);

      itemsArr.map(item => {
        const iptCheck = (ipt: string, user: boolean, field: string) => {
          const iptBase = state?.D6?.forms?.iptChanges[ipt];
          if (iptBase) {
            const iptLower = iptBase?.toLowerCase();
            const condPath = user ? item?.user : item;
            const itemLower = condPath[field]?.toLowerCase();
            const condFind = itemLower?.includes(iptLower);
            return condFind;
          }
          return true;
        };

        // ---------- set Input Name
        const condClientName = iptCheck('client', true, 'nomeDaEmpresa');
        if (!condClientName) return;

        // ---------- set Input State
        const condState = iptCheck('state', true, 'estado');
        if (!condState) return;

        // ---------- set Input City
        const condCity = iptCheck('city', true, 'cidade');
        if (!condCity) return;

        // ---------- set Input Probability
        const condProb = iptCheck('prob', false, 'options_probabilidadeVenda');
        if (!condProb) return;

        // ---------- set Input Product
        const condProd = iptCheck('prod', false, 'opportunity_products');
        if (!condProd) return;

        // ---------- set Input Model
        const condMod = iptCheck('mod', false, 'opportunity_products_category');
        if (!condMod) return;

        // ---------- set Push Item
        newArr.push(item.docId);
      });
      // B1.opportunities.itemsList;
      return {
        ...state,
        B1: {
          ...state.B1,
          opportunities: {
            ...state.B1.opportunities,
            itemsList: newArr,
          },
        },
      };
    },
  };

  return {
    ...inits,
    ...forms,
  };
};

// ---------- set Exports
export default reducers;
