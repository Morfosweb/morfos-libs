import { reducers } from "../../../project/screens";

export default (state, action) => {
  let loopObj = {};

  for (const key in reducers) {
    const item = reducers[key];
    loopObj = {
      ...loopObj,
      ...item.default(state, action),
    };
  }
  return loopObj;
};
