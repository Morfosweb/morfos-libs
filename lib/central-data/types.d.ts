// ---------- import Packs
import React from 'react';

// ---------- set Types
type ObjPropsT = { [key: string]: any };
type ActionT = { type: string; [key: string]: any };

type SetDataT = (data: ObjPropsT) => ObjPropsT;
type SetDataParamT = SetDataT | ObjPropsT;

// ---------- Never Type Function
type NoFunctionT<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : 'object';

type DataT = { [key: string]: NoFunctionT<any> };

type PropsT = {
  children: React.ReactNode;
  data?: DataT;
  [key: string]: any;
};

type LoggerT = (action: ActionT, newData: ObjPropsT, devLog: number) => void;

type UseDataT = (path: string, notation?: string) => NoFunctionT<any> | false;
type DataSelectionT = (ctData: ObjPropsT) => NoFunctionT<any>;

// ---------- export Types
export {
  ObjPropsT,
  ActionT,
  SetDataT,
  SetDataParamT,
  NoFunctionT,
  DataT,
  PropsT,
  LoggerT,
  UseDataT,
  DataSelectionT,
};
