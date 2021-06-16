/* */
/* /

// ---------- set Async Function
const asyncGet1 = async () => {
  // ---------- set Async Call
  const vehicleId = action.value;
  const dataDb = await firestore.collection('get1').get();

  // ---------- set Data to Show
  const dataSuccess = [];
  dataDb.forEach(doc => dataSuccess.push(doc.data()));

  // ------ return SUCCESS
  return dataSuccess;
};

// ---------- set Async References
const asyncGet2 = async () => {
  // ---------- set Async Call
  const vehicleId = action.value;
  const dataDb = await firestore.collection('get2').get();

  // ---------- set Data to Show
  const dataSuccess = [];
  dataDb.forEach(doc => dataSuccess.push(doc.data()));

  // ------ return SUCCESS
  return dataSuccess;
};

const asyncAll = async () => {
  const dataSuccess = await Promise.all([asyncGet1, asyncGet2]);

  // ------ return SUCCESS
  return action.asyncDispatch({
    type: ref.successName,
    value: dataSuccess,
  });
};

/* */
