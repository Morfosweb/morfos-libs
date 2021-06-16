/* */
/* /

const asyncFn = async () => {
  // ---------- set Data to Update
  const dataToUpdate = {
    userName: 'Pedro Silva',
    image: 'https://source.unsplash.com/200x150/?portrait&boy&1',
    infos: {
      jumpOnboarding: true,
    },
    typeAccount: 'client',
  };

  // ---------- set Async Call
  const refDb = firestore.collection('users').doc(action.idToEdit);
  const dataSuccess = await refDb.update(dataToAdd);

  // ------ return SUCCESS
  return action.asyncDispatch({
    type: ref.successName,
    value: dataSuccess,
  });
};

/* */
