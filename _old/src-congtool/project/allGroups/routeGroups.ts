// ----------- import Internals
import {
  Public,
  Private,
  Priv1,
  Priv2,
  Priv3,
  Priv4,
  GetDomains,
} from './prjGroups';
import { Cp01 } from '../comps';

// ----------- set Return
export default {
  pub: [Public],
  priv: [Private, GetDomains, Cp01],
  priv1: [Priv1, GetDomains, Cp01],
  priv2: [Priv2, GetDomains, Cp01],
  priv3: [Priv3, GetDomains, Cp01],
  priv4: [Priv4, GetDomains, Cp01],
};
