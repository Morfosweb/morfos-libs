// ---------- import Packs
import fs from 'fs';
import { setData } from '../central-data';

// ---------- default Function
export default async (dirPath: string) => {
  // ---------- set Filter Function
  const itemPath = (item: string) => dirPath + '/' + item;

  // ---------- set Filter Function
  const arrMods = fs.readdirSync(dirPath);

  const arrDirs = arrMods
    .filter(item => fs.statSync(itemPath(item)).isDirectory())
    .map(item => itemPath(item));

  const dynImport = arrDirs.map(dir => import(dir));
  await Promise.all(dynImport);
  setData({ dev: { screens: { readAll: true } } });
};
