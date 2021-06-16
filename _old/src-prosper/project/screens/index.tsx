export default {
  CLEAR: require('../../config/clearComp'),

  A1: require('./A1_Signin'),
  // A2: require("./A2_Terms"),

  B1: require('./B1_Home'),
  B2: require('./B2_ClientsLIST'),
  B3: require('./B3_ReportsLIST'),
  B4: require('./B4_ActivitiesLIST'),
  B5: require('./B5_StarsChart'),
  B6: require('./B6_FilterLIST'),
  B8: require('./B8_SoldLIST'),
  B10: require('./B10_OportunitiesLIST'),
  B11: require('./B11_SearchLIST'),

  C1: require('./C1_ActivityProfile'),

  D1: require('./D1_AddClient'),
  // D2: require('./D2_ActivityFORM'),
  // D3: require('./D3_OpportunityFORM'),
  D4: require('./D4_ActivityRegister'),
  D5: require('./D5_AnalysisKPI'),
  D6: require('./D6_FilterOpp'),

  404: require('./X_404'),
};
export const reducers = {
  A1: require('./A1_Signin/reducers'),
  // A2: require("./A2_Terms/reducers"),

  B1: require('./B1_Home/reducers'),
  B2: require('./B2_ClientsLIST/reducers'),
  B3: require('./B3_ReportsLIST/reducers'),
  B4: require('./B4_ActivitiesLIST/reducers'),
  B5: require('./B5_StarsChart/reducers'),
  B6: require('./B6_FilterLIST/reducers'),
  B8: require('./B8_SoldLIST/reducers'),
  B10: require('./B10_OportunitiesLIST/reducers'),
  B11: require('./B11_SearchLIST/reducers'),

  C1: require('./C1_ActivityProfile/reducers'),

  D1: require('./D1_AddClient/reducers'),
  D2: require('./D2_ActivityFORM/reducers'),
  D3: require('./D3_OpportunityFORM/reducers'),

  D4: require('./D4_ActivityRegister/reducers'),
  D5: require('./D5_AnalysisKPI/reducers'),
  D6: require('./D6_FilterOpp/reducers'),

  404: require('./X_404/reducers'),
};
