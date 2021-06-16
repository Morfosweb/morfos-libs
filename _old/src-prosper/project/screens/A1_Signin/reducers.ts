// ---------- import Internals

// ---------- set Reducers
export default (state, action) => {
  const inits = {
    // ---------- set Init Data
    A1_InitData: () => {
      const scContent = {
        pwdPH: 'Senha',
        enter: 'Entrar',
      };

      return {
        ...state,
        A1: { ...state.A1, scContent },
      };
    },
  };
  const ipts = {
    // ---------- set Input Password
    A1_IptPwd: () => {
      return {
        ...state,
        A1: {
          ...state.A1,
          form: {
            ...state.A1.form,
            iptPwd: action.value,
          },
          scContent: {
            ...state.A1.scContent,
            msgError: false,
          },
        },
      };
    },
  };
  const btns = {
    // ---------- set Enter Button
    A1_Enter: () => {
      const pwdVal = state?.A1?.form?.iptPwd;
      const condPwd = pwdVal === '123456';
      const error = condPwd ? false : true;

      !error && action.asyncDispatch({ type: 'base_setRoute', value: 'home' });

      return {
        ...state,
        A1: {
          ...state.A1,
          scContent: {
            ...state.A1.scContent,
            msgError: error,
          },
        },
      };
    },
  };

  return { ...inits, ...btns, ...ipts };
};
