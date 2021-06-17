// ----------- import Packs
import { useSelector } from 'react-redux';

// ----------- import Internals
import { setPath } from './utils';

/**
 * Select a property using a string path and returns false if undefined
 * @type {function}
 * @param {string} path - Ex: "C1.forms.condShow"
 * @param {string} notation - A dynamic notation. Ex: "itemId"
 * @returns {any | false}
 */

export default (path: string, notation?: string) => {
  // ----------- set Selector
  const selData = state => setPath(state, path, notation);
  const dataSelected = useSelector(selData);

  // ----------- set Return
  return dataSelected;
};
