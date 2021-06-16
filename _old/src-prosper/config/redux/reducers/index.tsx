// import Internals
import initialState from '../../../project/initialState';
import base from './baseReducers';
import allApp from '../../allApp/reducers';
import allGroups from '../../../project/allGroups/reducers';
import compsReducers from '../../../project/comps/reducers';
import useMorfosReducers from '../../useMorfos/reducers';
import loopScs from './loopScs';

export default (state = initialState, action) => {
  const allReducers = {
    ...base(state, action),
    ...allApp(state, action),
    ...allGroups(state, action),
    ...loopScs(state, action),
    ...compsReducers(state, action),
    ...useMorfosReducers(state, action),

    CLEAR_ALL() {
      return initialState;
    },
  };

  const condCalls = allReducers[action.type] === undefined;

  return condCalls ? state : allReducers[action.type]();
};
