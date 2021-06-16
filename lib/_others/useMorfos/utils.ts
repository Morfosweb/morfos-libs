import { Platform } from 'react-native';

const utils = {
  logRender: (name, info = '-') => {
    if (process.env.NODE_ENV === 'development') {
      return console.log(`RENDER => ${name}`, info);
    }
  },

  ezLog: (...info) => {
    const condDev = process.env.NODE_ENV === 'development';

    if (!condDev) {
      return;
    }
    const condNative = Platform.OS !== 'web';
    const condtype = condNative ? 'warn' : 'log';

    const condType = typeof info[0] === 'object';
    const condMany = condType && utils.toArr(info[0]).length === 1;
    const condArr = Array.isArray(info[0]);
    const condLog =
      !condMany && ((condType && condArr) || condMany || info[0] !== null);
    const log1 = () => console[condtype]('>>>>> EZLOG: => ', ...info);
    const log2 = () => {
      const name = Object.keys(info[0])[0];

      console[condtype](`>>>>> EZLOG: ${name} => `, info[0][name]);
    };
    const condReturn = condLog ? log1() : log2();
    return condReturn;
  },

  findItem: (item, arr) => arr.find(res => res.docId === item),

  findIndexId: (item, arr) => arr.findIndex(res => res.docId === item),

  filterFn: (arr, type) => arr.filter(res => res.type === type),

  timeFunc: (func, ms = 900) => setTimeout(func, ms),

  toArr(obj, setFields?: any[]) {
    var newArr: any = [];
    for (const item in obj) {
      if (setFields) {
        for (const fieldName of setFields) {
          newArr.push({ [fieldName]: obj[item][fieldName] });
        }
      } else {
        newArr.push(obj[item]);
      }
    }
    return newArr;
  },

  mergeDeep(...objects) {
    const isObject = obj => obj && typeof obj === 'object';

    return objects.reduce((prev, obj) => {
      Object.keys(obj).forEach(key => {
        const pVal = prev[key];
        const oVal = obj[key];

        if (Array.isArray(pVal) && Array.isArray(oVal)) {
          prev[key] = pVal.concat(...oVal);
        } else if (isObject(pVal) && isObject(oVal)) {
          prev[key] = utils.mergeDeep(pVal, oVal);
        } else {
          prev[key] = oVal;
        }
      });

      return prev;
    }, {});
  },

  hasData(data) {
    const checkArr: any = [];

    const loop = (info = []) => {
      const isObj = typeof info === 'object';
      if (isObj) {
        for (var item in info) loop(info[item]);
        return;
      }
      const condEmptyArr = info.length !== 0 && true;
      checkArr.push(condEmptyArr);
    };

    loop(data);

    const findTrue = checkArr.find(item => item);
    const finalCheck = findTrue ? true : false;
    return finalCheck;
  },

  currencyMask(info, returnAsNumber) {
    if (returnAsNumber) {
      return Number(String(info).replace(/\D/g, '')) / 100;
    } else {
      const _info = String(info);
      const onlyNumbers = Number(_info.replace(/\D/g, ''));
      const stringWithMask = (onlyNumbers / 100)
        .toFixed(2)
        .replace('.', ',')
        .replace(/\d(?=(\d{3})+,)/g, '$&.');
      return stringWithMask;
    }
  },

  // ---------- set Object Iteration

  findKey: (obj, val) => {
    let found;
    for (const key in obj) {
      const item = obj[key];
      if (val === item) {
        found = key;
      }
    }
    return found;
  },

  findVal: (obj, val) => {
    let found;
    for (const key in obj) {
      const item = obj[key];
      if (val === item) {
        found = item;
      }
    }
    return found;
  },

  filterObj: (obj, field, type, cond) => {
    let found;
    for (const key in obj) {
      const item = obj[key];
      const currField = item && item[field];

      const toSel = {
        contains() {
          if (Array.isArray([currField])) {
            const findFn = itemArr => itemArr === cond;
            const condFind = currField.find(findFn);
            if (condFind) {
              found = { ...found, [key]: item };
            }
          }
        },
        '==='() {
          const condFind = currField === cond;
          if (condFind) {
            found = { ...found, [key]: item };
          }
        },
        '!=='() {
          const condFind = currField !== cond;
          if (condFind) {
            found = { ...found, [key]: item };
          }
        },
      };
      const condSel = toSel[type] === undefined;
      const LEIA = 'Verifique alguma que possa ser usada no lugar';
      if (condSel) {
        throw new Error(`Tipo de condição '${type}' não foi definida ${LEIA}`);
      }

      currField && toSel[type]();
    }
    return found;
  },

  rangeArr(s, e) {
    return e > s ? [s, ...utils.rangeArr(s + 1, e)] : [s];
  },

  asyncRefs: (action, asyncFn) => {
    // ---------- set Reference Code
    const refCode = action.type.split('_')[0];

    // ---------- set Async Reference
    const ref = {
      // ---------- set Names
      startName: action.type + '_START',
      pendingName: action.type + '_PENDING',
      errorName: action.type + '_ERROR',
      mockName: action.type + '_MOCK',
      successCondData: action.type + '_CONDDATA',
      successMsgName: action.type + '_SUCCESS_MSG',
      successName: action.type + '_SUCCESS',

      // ---------- set START Message
      startMsg: () => {
        return action.asyncDispatch({
          type: 'base_ASYNC_MSGS',
          loggerName: ref.startName,
          code: refCode,
          msgs: { [ref.pendingName]: true, [ref.errorName]: null },
        });
      },

      // ---------- set ERROR Message
      errorMsg: err => {
        return action.asyncDispatch({
          type: 'base_ASYNC_MSGS',
          loggerName: ref.errorName,
          value: err,
          code: refCode,
          msgs: { [ref.pendingName]: false, [ref.errorName]: err.message },
        });
      },

      // ---------- set SUCCESS Message
      successMsg: res => {
        return action.asyncDispatch({
          type: 'base_ASYNC_MSGS',
          loggerName: ref.successMsgName,
          value: res,
          code: refCode,
          msgs: {
            [ref.pendingName]: false,
            [ref.errorName]: false,
            [ref.successCondData]: true,
          },
        });
      },

      // ---------- set Async Call
      callAsync: (moreActions: Object = {}) => {
        // ---------- call START Msg
        ref.startMsg();

        const condArr = Array.isArray(asyncFn);
        const condCall = () =>
          condArr ? Promise.all(asyncFn.map(i => i())) : asyncFn();

        // ---------- call Async Function
        return (
          condCall()
            // ---------- call ERROR Msg
            .catch(err => ref.errorMsg(err))
            // ---------- call SUCCESS Msg
            .then(res => {
              ref.successMsg(res);
              action.asyncDispatch({
                type: ref.successName,
                value: res,
                ...moreActions,
              });
            })
        );
      },

      // ---------- set Mock Call
      callMock: () => {
        // ---------- set Mock Data
        const mockData = {
          item1: {
            id: 1,
            prop: 'mock1',
          },
          item2: {
            id: 2,
            prop: 'mock1',
          },
        };

        return action.asyncDispatch({
          type: ref.mockName,
          value: mockData,
        });
      },
    };

    return ref;
  },

  findMonth: ref => {
    // no ref will show now
    const refDate = ref === 'now' ? new Date() : new Date(`${ref}-1`);

    // a day in month (1-31)
    const dateNumber = refDate.getDate();
    const monthNumber = refDate.getMonth();
    const yearNumber = refDate.getFullYear();

    const monthPt = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    const monthText = {
      pt: monthPt[monthNumber],
    };

    // const refYear = monthNumber === 0 ? yearNumber - 1 : yearNumber;
    const refYear = yearNumber;
    const refMonth = monthNumber + 1;

    return {
      dateNumber,
      monthNumber: refMonth,
      yearNumber: refYear,
      monthText,
    };
  },
};

export const {
  ezLog,
  logRender,
  timeFunc,
  toArr,
  mergeDeep,
  hasData,
  currencyMask,
  findKey,
  findVal,
  filterObj,
  rangeArr,
  findMonth,

  asyncRefs,
} = utils;

export default utils;
