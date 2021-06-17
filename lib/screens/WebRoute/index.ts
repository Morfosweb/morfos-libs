// ---------- import Internals
import useListenResize from './useListenResize';
import useUrlHistory from './useUrlHistory';
import useChangeTitle from './useChangeTitle';
import useUrlManualChange from './useUrlManualChange';

// ---------- set Component
export default (Comp: any) => {
  // ----------- set Resize Screen
  // useListenResize();

  // ----------- set Change Url
  useUrlManualChange();
  useUrlHistory();

  // ----------- set Change Title
  useChangeTitle();

  // ----------- set Return
  return Comp;
};
