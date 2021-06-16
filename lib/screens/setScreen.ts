// ---------- import Packs
// import { setData } from '@morfos/central-data';
import { setData } from '../central-data';
import { ObjPropsT } from '../central-data/types';

// ---------- set Each Sreen Info
const setScData = (value: ObjPropsT) => ({
  dev: { screens: { scInfo: { [value.key]: value } } },
});

// ---------- set Each Sreen Data Info
export default (value: ObjPropsT) => setData(setScData(value));
