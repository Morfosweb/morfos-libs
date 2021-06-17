// ---------- import Internals
import { ObjPropsT } from '../renders/types';

// ---------- default Function
export const mergeData = (ctData: ObjPropsT, newData: ObjPropsT) => {
  const isObject = (obj: ObjPropsT) => obj && typeof obj === 'object';

  return [ctData, newData].reduce((p, c) => {
    Object.keys(c).forEach(key => {
      const pVal = p[key];
      const cVal = c[key];

      const condArr = Array.isArray(pVal) && Array.isArray(cVal);
      const condObj = isObject(pVal) && isObject(cVal);

      if (condArr) {
        const clearName = 'clearOtherProps';
        const condClearArr = [...cVal].some(i => i === clearName);

        if (condClearArr) {
          const arrRemove = (arr: [], value: any) =>
            arr.filter(i => i !== value);

          const newC = arrRemove(cVal, clearName);

          p[key] = newC;
        } else {
          p[key] = pVal.concat(...cVal);
        }
      } else if (condObj) {
        p[key] = mergeData(pVal, cVal);
      } else {
        p[key] = cVal;
      }
    });

    const condClearObj = c?.['clearOtherProps'] === true;

    if (condClearObj) {
      delete c.clearOtherProps;

      const newP: ObjPropsT = {};

      Object.keys(c).forEach(key => {
        newP[key] = p[key];
      });

      return newP;
    }

    return p;
  }, {});
};
