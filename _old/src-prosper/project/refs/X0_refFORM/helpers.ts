// ---------- set Types *****
type Props = {
  iptsInfo: {};
  iptsFilleds: {};
};
type Check = (props: Props) => boolean;

// ---------- set Export Helper
export const checkRequireds: Check = ({ iptsInfo, iptsFilleds }) => {
  // ---------- set Inputs Object Required Field
  const arrIpts = Object.values(iptsInfo);
  const requiredsArr = arrIpts
    .filter(item => item.required)
    .map(item => item.itemId);

  // ---------- set Filled Inputs not empty
  const condReturn = requiredsArr.reduce((prev, curr) => {
    const item = iptsFilleds?.[curr];
    const condOr = item || item === false || item === 0;
    const condValue = condOr && item !== [] && item !== {};

    return prev && condValue;
  }, true);

  // ---------- set Return
  return condReturn;
};
