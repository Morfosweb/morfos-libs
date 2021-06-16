import { mergeDeep } from './utils';

// ---------- set Reducers
const reducers = (state, action) => {
  // ---------- set Reducers Groups
  const changes = {
    // ---------- set Dynamic Reducers
    base_setRoute() {
      const routesInfo = state?.baseRoute?.routesInfo[action.value];
      const condRoutesInfo = routesInfo?.condBigSc;
      const objBig = {
        path: action.value,
        pathRight: null,
        currShop: null,
      };
      const objRight = {
        pathRight: action.value,
      };
      const condPath = !condRoutesInfo ? objRight : objBig;
      return {
        ...state,
        baseRoute: {
          ...state.baseRoute,
          ...condPath,
        },
        currShop: null,
      };
    },

    // ---------- set Clear some
    base_CLEAN_OUT() {
      const split = action.value.split('.');
      let newState = {};
      split.reverse().map((item, idx) => {
        idx === 0
          ? (newState[item] = false)
          : (newState = { [item]: { ...newState } });
      });

      return { ...mergeDeep(state, newState) };
    },
  };

  // ---------- set Reducers Return
  return {
    ...changes,
  };
};

// ---------- set Exports
export default reducers;
