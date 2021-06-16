// ---------- import Internals
import { LoggerT } from './types';

// ---------- set Default Function
const Logger: LoggerT = (action, newData, devLog) => {
  // ---------- set Properties
  const { value } = action;

  // ---------- set Logs
  // console.log('- - - DEV LOG - - -');
  // console.log('CT DATA - Before =>', currData);
  console.log('- - - - - - - - - -');
  console.log('CHANGE', devLog, value);
  console.log('NEW CT DATA', newData);
  console.log('- - - - - - - - - -');
};

// ---------- export Default Function
export default Logger;
