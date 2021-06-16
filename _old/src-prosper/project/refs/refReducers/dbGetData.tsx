/* */
/* /

// ---------- set Async Function
const asyncFn = async () => {
  // ---------- set Async Call
  const dbRef = firestore.collection('col');
  const dataSuccess = await dbRef.orderBy('createdAt', 'desc').get();

  // ------ return SUCCESS
  return action.asyncDispatch({
    type: ref.successName,
    value: dataSuccess,
  });
};

/* */
