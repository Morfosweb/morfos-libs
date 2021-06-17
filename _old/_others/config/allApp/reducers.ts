import allScs from '../../project/screens';

// ---------- set Reducers
export default (state, action) => {
  const inits = {
    // ---------- set Init Routes
    base_InitRoutes: () => {
      // ---------- get Persist
      action.asyncDispatch({ type: 'base_GET_PERSIST' });

      // ---------- iterate Screen
      let routesInfo = {};
      for (const key in allScs) {
        const item = allScs[key];
        const moduleInfo = item.infoSc;
        const routeKey = moduleInfo.path;
        const scKey = key;
        routesInfo[routeKey] = { scKey, ...moduleInfo };
      }

      // ---------- set State
      return {
        ...state,
        baseRoute: {
          ...state.baseRoute,
          // pathRight: null,
          reload: false,
          routesInfo,
        },
      };
    },
  };

  const listeners = {
    // ---------- set Current Screen Info
    base_CurrScInfo: () => {
      return {
        ...state,
        baseRoute: {
          ...state.baseRoute,
          currScInfo: action.value,
        },
      };
    },
    // ---------- set Desktop Size
    base_ListenResize: () => {
      const pointBreak = 620;
      const condDesk = action.value >= pointBreak;

      return {
        ...state,
        baseRoute: {
          ...state.baseRoute,
          condDeskSize: condDesk,
        },
      };
    },

    // ---------- set Push Listener
    base_condPushTrue: () => {
      return {
        ...state,
        baseRoute: {
          ...state.baseRoute,
          condNoPush: false,
        },
      };
    },

    // ---------- set History
    base_History: () => {
      return {
        ...state,
        baseRoute: {
          ...state.baseRoute,
          path: action.value,
          condNoPush: true,
        },
      };
    },
  };

  return {
    ...inits,
    ...listeners,
  };
};
