// ---------- import Packs
import React from 'react';

// ---------- set Types
type PropsUseDataT = {
  children: React.ReactNode;
  dataPath: string;
  [key: string]: any;
};
type PropsSetDataT = {
  children: React.ReactNode;
  setData: SetDataParamT;
  [key: string]: any;
};
type PropsFunctionT = {
  children: React.ReactNode;
  setFunction: Function;
  [key: string]: any;
};
type ObjPropsT = { [key: string]: any };
type SetDataT = (data: ObjPropsT) => ObjPropsT;
type SetDataParamT = SetDataT | ObjPropsT;

// ---------- export Types
export {
  PropsUseDataT,
  PropsSetDataT,
  PropsFunctionT,
  SetDataT,
  ObjPropsT,
  SetDataParamT,
};
