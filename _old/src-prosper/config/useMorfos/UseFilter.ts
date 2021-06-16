// ---------- set Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ---------- set Internals
import { TpRElement, useData } from '.';

// ---------- set Types
type Info = {
  iptData: string;
  arrData: string;
  reducer: string;
  fieldName: string;
  maxLimit?: number;
};

type Props = {
  info: Info;
  children: TpRElement;
};

// ---------- set Default
export default ({ info, children }: Props): any => {
  // ---------- set Props
  const { iptData, arrData, reducer, fieldName, maxLimit } = info;

  // ---------- set Data
  const iptValue = useData(iptData);
  const arrList = useData(arrData);

  // ---------- set Efects
  const fxDispatch = () => {
    dispatch({ type: reducer, value });
  };

  // ---------- set Hooks
  const dispatch = useDispatch();
  React.useEffect(fxDispatch, [iptValue]);

  // ---------- set Filter
  const regex = new RegExp(`(${iptValue})`, 'gi');
  const fnFilter = item => item[fieldName]?.match(regex);
  let filteredList = arrList.filter(fnFilter);

  // ---------- set Filter limit
  if (maxLimit) {
    const filterLimit = (item, idx) => idx < maxLimit;
    filteredList = filteredList.filter(filterLimit);
  }

  // ---------- set Value
  const value = filteredList.map(item => item.id);

  // ---------- set Return
  return children;
};
