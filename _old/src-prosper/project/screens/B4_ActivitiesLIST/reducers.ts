// ---------- import Internals

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    B4_InitData: () => {
      const scContent = {
        // --- ItemList
        act1: 'Ver Produtos',
        act2: 'Ver Vendas',
      };

      const condList = state?.B1?.activities?.condList;

      return {
        ...state,
        B4: { ...state.B4, scContent, condList },
      };
    },
  };

  return {
    ...inits,
  };
};

// ---------- set Exports
export default reducers;
