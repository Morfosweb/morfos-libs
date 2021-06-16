// ---------- import Internals
import { mergeDeep } from '../../useMorfos/utils';

// ---------- set Reducers
export default (state, action) => {
  // ---------- set Return
  return {
    // ---------- set Async Messages
    base_ASYNC_START_MSG() {
      const { refCode, refName } = action.refs;
      const pendingName = `${refName}_Pending`;
      const errorName = `${refName}_Error`;

      return {
        ...state,
        ...mergeDeep(state[refCode], {
          msgs: { [pendingName]: true, [errorName]: null },
        }),
      };
    },

    base_ASYNC_SUCCESS_MSG() {
      const { refCode, refName } = action.refs;
      const pendingName = `${refName}_Pending`;
      const errorName = `${refName}_Error`;

      return {
        ...state,
        ...mergeDeep(state[refCode], {
          msgs: { [pendingName]: false, [errorName]: false },
        }),
      };
    },

    base_ASYNC_ERROR_MSG() {
      const { refCode, refName } = action.refs;
      const pendingName = `${refName}_Pending`;
      const errorName = `${refName}_Error`;

      return {
        ...state,
        ...mergeDeep(state[refCode], {
          msgs: { [pendingName]: false, [errorName]: true },
        }),
      };
    },

    base_ASYNC_MSGS() {
      return {
        ...state,
        [action.code]: {
          ...state[action.code],
          msgs: { ...action.msgs },
        },
      };
    },
  };
};
