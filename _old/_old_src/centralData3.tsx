import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';

// reducers: função q recebe "Estado" + "Tipo" e retorna objeto com novo "Estado"

// ---------- FUNCTION 6 - ???

const logger = (act: actionT, newData: CtDataT) => {
  const logger = {
    curr: act.currData,
    change: act.value,
  };
  console.log('- - - - - - - - - -');
  console.log('CT DATA - Before =>', logger.curr);
  console.log('CHANGE =>', logger.change);
  console.log('CT DATA - After =>', newData);
  console.log('- - - - - - - - - -');
};

const changes = (centralData: CtDataT = {}, act: actionT) => {
  const newData = { ...centralData, ...act.value };
  logger(act, newData);
  return { ...newData };
};

const store = createStore(changes);

const setCTdata = (cb: SetDataT | CtDataT) => {
  const ctData = store?.getState();
  const newData = typeof cb === 'function' ? cb(ctData) : cb;

  store?.dispatch({
    type: 'CHANGE',
    value: newData,
    currData: ctData,
  });
};

// ---------- CONNECT ROOT
const Connect = (props: PropsT) => {
  const { children } = props;
  return <Provider store={store}> {children}</Provider>;
};

// ---------- RETURN
export { Connect, useSelector, useDispatch, setCTdata, SetDataT };

// ---------- TYPES
// #region

export type CtDataT = { [key: string]: any };
type actionT = { type: string; [key: string]: any };

type DataT = { [key: string]: TypeName<any> };

type SetDataT = (data: CtDataT) => CtDataT;

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : 'object';

export type PropsT = {
  children: React.ReactNode;
  data?: DataT;
  [key: string]: any;
};

// #endregion
