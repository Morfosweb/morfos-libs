// ---------- import Packs
import fs from 'fs';

// ---------- export Screens
export default (dirPath: string) => {
  // ---------- set Filter Function
  const itemPath = (item: string) => dirPath + '/' + item;

  // ---------- set Filter Function
  const arrDirs = fs
    .readdirSync(dirPath)
    .filter(item => fs.statSync(itemPath(item)).isDirectory())
    .map(item => itemPath(item));

  const dynImport = arrDirs.map(dir => import(dir));
  return dynImport;
};
