import { setData } from '../central-data';

// ----------- default Function
export default (path: string) =>
  setData({ dev: { screens: { selected: path } } });
