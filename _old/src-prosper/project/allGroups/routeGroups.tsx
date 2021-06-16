// ----------- import Packs
// import React from 'react';

// ----------- import Internals
import { InitApp, Navs, Screens, Public, Status, Private } from './prjGroups';

// ----------- set Return
export default {
  pub: [InitApp, Status, Public],
  priv: [InitApp, Status, Private, Screens, Navs],
  home: [InitApp, Status, Private, Navs],
};
