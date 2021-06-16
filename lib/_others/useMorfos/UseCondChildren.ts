// ---------- import Packs

// ---------- import Internals
import { TpRElement, useData } from '.';

type Props = {
  data: string;
  children: TpRElement;
};
export default (props: Props): any => {
  // ----------- set Props
  const { children, data } = props;

  // ----------- set Data
  const release = useData(data);

  // ----------- set Return
  return release ? children : null;
};
