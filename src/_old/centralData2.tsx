import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore, Reducer } from 'redux';

// reducers: função q recebe "Estado" + "Tipo" e retorna objeto com novo "Estado"

// const arr = ["1", "2"]
// arr.map()

// ---------- FUNCTION 1

// const reporters = (ctData: CtDataT = {}) => {
//   type CbT = (ctData: CtDataT) => {};

//   let newData: CtDataT;
//   const setCtData = (cb: CbT) => newData2 => {
//     newData = cb(ctData);
//     console.log(1, newData);
//     console.log(1, newData2);
//     return { ...newData };
//   };

//   //   const reducers = () => setCtData((ctData) => newData);

//   return { setCtData, ...setCtData(() => '{}') };
// };
// const { setCtData } = reporters();
// const ctData = {};

// ---------- store 1
// const store = createStore(reporters);

// ---------- store 2
// const store = createStore(setCtData(ctData => ctData));

// type CbT = (ctData: CtDataT) => {};

// ---------- CLASS 1

// class rpt {
//   ctData = {};
//   newData = {};

//   // Getter
//   get change() {
//     return this.changeData();
//   }

//   changeData(newData: CtDataT = {}) {
//     // return (this.ctData = { ...newData });
//     // return (this.ctData = this.setCtData);
//     return (this.ctData = newData);
//   }

//   setCtData(cb: CbT) {
//     const newData = cb(this.ctData);
//     console.log(1, newData);
//     this.change(newData);
//     return { ...newData };
//   }
// }

// const reducers = new rpt();
// const reducers2 = reducers.changeData;
// const store = createStore(reducers2);
// const setCtData = reducers.setCtData;

// ---------- FUNCTION 2?
// const setCtData = (cb: CbT) => (ctData: CtDataT = {}) => {

// ---------- FUNCTION 2 - (deu mas sem passar nem atualizar o ctData)
// const setCtData = (ctData: CtDataT = {}) => {
//   console.log(1, ctData);
//   return { ...ctData };
// };
// const store = createStore(setCtData);
// const ctData = {};

// ---------- FUNCTION 3 - Não consigo mudar o valor de monitoramento do state

// const changes = (ctData: CtDataT = {}) => {
//   const setCtData = (value = {}) => {
//     console.log('1a', value);
//     console.log('1b', ctData);

//     return changes({ ...ctData, ...value });
//   };

//   return { setCtData, ctData };
// };
// const { ctData, setCtData } = changes();
// const store = createStore(changes({ count: 11 }).setCtData);

// ---------- FUNCTION 4 - ???

// const changes = (newData: CtDataT = {}) => {
//     let condValue = true;
//     console.log('y', newData);

//     const setCtData = (ctData: CtDataT = {}) => {
//         condValue = !condValue;
//     console.log(1, ctData);
//     return { ...ctData };
//   };

//   return { condValue, ctData: { ...newData }, setCtData };
// };
// const { condValue, ctData, setCtData } = changes();

// const store = createStore(setCtData);

// const setCtData =

// ---------- FUNCTION 5 - ???

// let ctData = true;

// const setCtData = (val?: {}) => {
//   console.log(1, val);
//   const teste = <Context ref={!ctData} />;
//   return { ...val };
// };

// const store = createStore(setCtData);

// ---------- FUNCTION 6 - ???

let ctData = true;

function changes(init?: {}, act?: { value: {} }) {
  console.log('1a', init);
  console.log('1b', act);
  return { ...init, ...act.value };
}

const store = createStore(changes);
const setCtData = val => store?.dispatch({ type: '', value: val });

// ---------- TEST CONTEXT to DISPATCH
// const Context = ({ ref }) => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch({ type: 'QUALQUER' });
//         console.log('X', ctData);
//     }, [ref]);
//     return <></>;
// };

// ---------- RETURN OK
const Connect = (props: PropsT) => {
  const { children } = props;

  return <Provider store={store}> {children}</Provider>;
};

export { Connect, useSelector, useDispatch, setCtData, ctData };

// ---------- TYPES
// #region

export type CtDataT = { [key: string]: any };
type actionT = { type: string; [key: string]: any };
type RporterT = {};
type allRepT = { [key: string]: () => RporterT };

type DataT = { [key: string]: TypeName<any> };
// type rptFn = (ctData: CtDataT, action: actionT) => Reducer<DataT, actionT>;

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
