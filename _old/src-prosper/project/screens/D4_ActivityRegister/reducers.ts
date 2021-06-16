// ---------- import Internals
import { asyncRefs } from '../../../config/useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    D4_InitData: () => {
      const scContent = {
        placeholder: 'Buscar Clientes',
      };

      action.asyncDispatch({ type: 'D4_InitForm' });

      return {
        ...state,
        D4: {
          ...state.D4,
          scContent,
          selectedClient: null,
          condList: state?.B1?.clients?.condList,
        },
      };
    },
  };

  const forms = {
    // ---------- set Form Changes by Type
    D4_IptValues: () => {
      // const condList = action.value?.length >= 3;
      const condList = action.value?.length >= 1;

      return {
        ...state,
        D4: {
          ...state.D4,

          forms: {
            ...state?.D4?.forms,
            iptsChanges: {
              ...state?.D4?.forms?.iptsChanges,
              autoComplete: action.value,
              condList,
            },
          },
        },
      };
    },

    D4_FilterItems: () => {
      return {
        ...state,
        D4: {
          ...state.D4,
          filteredArr: action.value,
        },
      };
    },

    D4_SelectClient: () => {
      return {
        ...state,
        D4: {
          ...state.D4,
          selectedClient: action.value,

          forms: {
            ...state?.D4?.forms,
            iptsChanges: {
              ...state?.D4?.forms?.iptsChanges,
              autoComplete: '',
              condList: false,
            },
          },
        },
      };
    },

    D4_CloseClient: () => {
      return {
        ...state,
        D4: {
          ...state.D4,
          selectedClient: null,

          forms: {
            ...state?.D4?.forms,
            iptsChanges: {
              ...state?.D4?.forms?.iptsChanges,
              autoComplete: '',
              condList: false,
            },
          },
        },
      };
    },

    D4_ActivityData: () => {
      return {
        ...state,
        D4: {
          ...state.D4,
          arrFilterData: {
            ...state?.D4?.arrFilterData,
            autoComplete: action.value,
          },
        },
      };
    },

    D4_SaveClients: () => {
      return {
        ...state,
      };
    },

    D4_CancelClients: () => {
      return {
        ...state,
      };
    },
  };

  const adds = {
    // ---------- set ADD D4 _Name
    D4_ADD_activityRegister: () => {
      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set Data to Add
        const idToEdit = state.D4.idToEdit;
        const dataToAdd = { ...state.D4.forms.iptsChanges };

        // ------ When Image Exist
        const infoImg = dataToAdd.image;
        const getUrl = async () => {
          await storage.ref(`images/${infoImg.name}`).put(infoImg);

          const url = await storage
            .ref('images')
            .child(infoImg.name)
            .getDownloadURL();

          return url;
        };

        if (infoImg) {
          dataToAdd.imgUrl = await getUrl();
          delete dataToAdd.image;
        }

        // ---------- set Cond Edit or Save
        let dataSuccess = null;

        if (idToEdit) {
          const refDbEdit = firestore.collection('collection').doc(idToEdit);
          dataSuccess = await refDbEdit.update({ ...dataToAdd });
        } else {
          const refDb = firestore.collection('collection').doc();
          dataToAdd.docId = refDb.id;
          dataToAdd.createdAt = firebase.firestore.Timestamp.now();

          dataSuccess = await refDb.set(dataToAdd);
        }

        // ------ return SUCCESS
        return action.asyncDispatch({
          type: ref.successName,
          value: dataSuccess,
        });
      };

      // ---------- set Async References
      const ref = asyncRefs(action, asyncFn);

      // ---------- call Async / Mock
      ref.callAsync();

      // ------ set Return
      return { ...state };
    },

    D4_ADD_ActivityRegister_SUCCESS: () => {
      action.asyncDispatch({ type: 'base_setRoute', value: 'path' });
      return {
        ...state,
        D4: {
          ...state.D4,
          dataName: action.value,
        },
      };
    },
  };

  return {
    ...inits,
    ...forms,
    ...adds,
  };
};

// ---------- set Exports
export default reducers;
