// ----------- set Default
export default (arrGroups, CompScreen) => {
  // ----------- set Group + Screen
  const newArr = [...arrGroups, CompScreen];
  let groupComp;
  const renderAll = item => {
    const renderComp = ({ Comp, children }) => <Comp>{children}</Comp>;

    groupComp = renderComp({
      Comp: item,
      children: groupComp,
    });
  };
  newArr.reverse().map(renderAll);

  // ----------- set Return
  return groupComp;
};
