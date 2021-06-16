/* */
/* /

const asyncFn = async () => {
  // ---------- set Async Info
  const type = state.rdTempVehicleA.type;

  const urlBase = `https://fipeapi.appspot.com/api/1/${type}/marcas.json`;

  // ---------- call Async Function
  const fetchUrl = await fetch(urlBase, { method: 'get' });
  const dataSuccess = await fetchUrl.json();

  // ------ return SUCCESS
  return action.asyncDispatch({
    type: ref.successName,
    loggerName: ref.dataName,
    value: dataSuccess,
  });
};

/* */
