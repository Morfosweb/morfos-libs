// ----------- import Packs
import { useState } from 'react';

// type VoidFn = () => void;
type VoidFn = any;
// ----------- set Default Function
export default function () {
  const [sttActive, setActive] = useState(false);
  const toggleActive: VoidFn = () => setActive(!sttActive);
  return [sttActive, toggleActive];
  // return {sttActive, toggle:toggleActive};
}
