// ---------- import Packs
import React from 'react';

// ---------- set Types
export type ObjPropsT = { [key: string]: any };
export type ActionT = { type: string; [key: string]: any };

export type SetDataT = (data: ObjPropsT) => ObjPropsT;
export type Obj_or_Function = SetDataT | ObjPropsT;

// ---------- Never Type Function
export type NoFunctionT<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends undefined
  ? undefined
  : ObjPropsT;

export type DataT = { [key: string]: NoFunctionT<any> };

export type PropsT = {
  children: React.ReactNode;
  data?: DataT;
  [key: string]: any;
};

export type LoggerT = (
  action: ActionT,
  newData: ObjPropsT,
  devLog: number,
) => void;

export type UseDataT = (
  path: string,
  notation?: string,
) => NoFunctionT<any> | false;
export type DataSelectionT = (ctData: ObjPropsT) => NoFunctionT<any>;
