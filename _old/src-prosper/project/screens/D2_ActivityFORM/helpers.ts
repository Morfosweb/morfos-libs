// ---------- set Types
type Props = {
  iptsInfo: {};
  iptsFilleds: {};
};
type Function = (props: Props) => {};

// ---------- set Export Helper
export const checkEmptyIpts: Function = ({ iptsInfo, iptsFilleds }) => {
  // ---------- set Inputs Object Required Field
  const arrIpts: any[] = Object.values(iptsInfo);
  const requiredsArr = arrIpts
    .filter(item => item.required)
    .map(item => item.itemId);

  // ---------- set Inputs Error Object
  let emptyIpts = {};
  requiredsArr.map(item => {
    const ipt = iptsFilleds?.[item];
    const condOr = ipt || ipt === false || ipt === 0;
    const condValue = condOr && ipt !== [] && ipt !== {};

    if (!condValue) {
      emptyIpts = { ...emptyIpts, [item]: true };
    }
  });

  return emptyIpts;
};
