// ---------- import Packs
import { ReactComponentElement, ReactElement } from 'react';

// ---------- export Types
export type TpRElement =
  | ReactComponentElement<any>
  | ReactElement
  | ReactElement[];
