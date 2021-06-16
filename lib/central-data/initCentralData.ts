// ---------- import Packs
import { createStore } from 'redux';

// ---------- import Internals
import logger from './logger';
import { ActionT, ObjPropsT } from './types';

// ----------- set Default Function
const changes = (ctData: ObjPropsT = {}, act: ActionT) => {
  // ----------- set New Data
  const newData = { ...ctData, ...act.newData };

  // ----------- set Logger Info if not 'production'
  if (process.env.NODE_ENV === 'development') {
    const newDevLog = newData.dev ? newData.dev.devLog + 1 : 1;
    newData.dev = { ...newData.dev, devLog: newDevLog };
    logger(act, newData, newDevLog);
  }

  // ----------- set Return
  return { ...newData };
};

// ----------- set Init Central Data
export const initCentralData = createStore(changes);
