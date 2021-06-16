/* */
/* /

const asyncFn = async () => {
  // ---------- set Data to Add
  const dataToAdd = {
    userName: 'Pedro Silva',
    image: 'https://source.unsplash.com/200x150/?portrait&boy&1',
    infos: {
      jumpOnboarding: true,
    },
    typeAccount: 'client',
  };

  // ---------- set Async Call
  const refDb = firestore.collection('users').doc();
  dataToAdd.docId = refDb.id;
  dataToAdd.createdAt = Date.now();
  const dataSuccess = await refDb.set(dataToAdd);

  // ------ return SUCCESS
  return action.asyncDispatch({
    type: ref.successName,
    value: dataSuccess,
  });
};

/* */
