export default {
  CLEAR: require('../../config/clearComp'),

  A1: require('./A1_Signin'),

  C1: require('./C1_Reports'),
  C2: require('./C2_Publishers'),
  C3: require('./C3_Permissions'),

  D1: require('./D1_Profile'),
  D2: require('./D2_Registers'),
  D3: require('./D3_Totals'),

  X_404: require('./X_404'),
};
export const reducers = {
  A1: require('./A1_Signin/reducers'),

  C1: require('./C1_Reports/reducers'),
  C2: require('./C2_Publishers/reducers'),
  C3: require('./C3_Permissions/reducers'),

  D1: require('./D1_Profile/reducers'),
  D2: require('./D2_Registers/reducers'),
  D3: require('./D3_Totals/reducers'),

  X_404: require('./X_404/reducers'),
};
