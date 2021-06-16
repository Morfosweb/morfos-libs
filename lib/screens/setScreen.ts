// ---------- import Packs
// import { setData } from '@morfos/central-data';
import { setData, ObjPropsT } from '../central-data';

// ---------- set Each Sreen Info
const setScData = (value: ObjPropsT) => (ctData: ObjPropsT) => ({
  screens: {
    scInfo: {
      ...ctData?.screens?.scInfo,

      [value.key]: value,
    },
  },
});

// ---------- set Each Sreen Data Info
export default (value: ObjPropsT) => setData(setScData(value));
