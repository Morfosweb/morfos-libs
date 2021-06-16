// ---------- import Internals
import {
  firestore,
  firebase,
  // storage,
} from '../../../config/firebase/fbConfig';
import { asyncRefs } from '../../../config/useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    X0_InitData: () => {
      const scContent = {
        title: 'Signin',
        subTitle: 'Oi Mundo!',
        description: 'Lorem Ipsum!',
        txtBtn: 'Ir para os TERMOS',
      };

      action.asyncDispatch({ type: 'X0_InitForm' });

      return {
        ...state,
        X0: { ...state.X0, scContent },
      };
    },
  };

  const forms = {
    X0_InitForm: () => {
      // ---------- set Edit
      const idToEdit = state?.X0?.forms?.idToEdit;
      const editData = state?.X0?.itemsInfo?.[idToEdit];

      // ------- set Forms Data
      const iptsInfo = {
        // ---------- set Inputs Base

        // ---------- set Image
        image: {
          // ----- set Dynamics
          itemId: 'image',
          required: true,
          iptChange: 'X0_ImgChange',
          imgData: 'X0.forms.iptsChanges.image',

          // ----- set Edit
          editData: editData?.imgUrl,
        },

        // ---------- set Inputs TXT
        name: {
          // ----- set Dynamics
          itemId: 'name',
          required: true,
          iptChange: 'X0_IptValues',
          dataPath: 'X0.forms.iptsChanges',
          // condNumber: true,
          editData,

          // ----- set Statics
          label: 'Nome',
          pHolder: 'Escreva...',
        },

        // ---------- set Inputs Picker
        categ: {
          // ----- set Dynamics
          itemId: 'categ',
          required: true,
          iptChange: 'X0_IptPicker',
          dataPath: 'X0.forms.iptsChanges',
          editData,

          // ----- set Statics
          label: 'Categoria',
          pHolder: 'Selecione...',
          pickerList: [
            { label: 'Hortifruti', id: 'Hortifruti' },
            { label: 'Padaria', id: 'Padaria' },
            { label: 'Petshop', id: 'Petshop' },
            { label: 'Sobremesas', id: 'Sobremesas' },
          ],
        },
      };

      return {
        ...state,
        X0: {
          ...state?.X0,
          forms: {
            ...state?.X0?.forms,
            iptsInfo: { ...iptsInfo },
            iptsChanges: {},
          },
        },
      };
    },

    // ---------- set Form Changes by Type
    X0_IptValues: () => {
      const itemLabel = `${action.field}_label`;
      const condLabel = action.label ? { [itemLabel]: action.label } : {};

      return {
        ...state,
        X0: {
          ...state.X0,

          forms: {
            ...state.X0.forms,
            iptsChanges: {
              ...state.X0.forms.iptsChanges,
              [action.field]: action.value,
              ...condLabel,
            },
          },
        },
      };
    },

    X0_ImgChange: () => {
      return {
        ...state,
        X0: {
          ...state.X0,

          forms: {
            ...state.X0.forms,
            iptsChanges: {
              ...state.X0.forms.iptsChanges,
              image: action.value,
            },
          },
        },
      };
    },

    X0_IptPicker: () => {
      const itemLabel = `${action.itemId}_label`;
      const condLabel = action.label ? { [itemLabel]: action.label } : {};

      return {
        ...state,
        X0: {
          ...state.X0,

          forms: {
            ...state.X0.forms,
            iptsChanges: {
              ...state.X0.forms.iptsChanges,
              [action.itemId]: action.value,
              ...condLabel,
            },
          },
        },
      };
    },
  };

  const adds = {
    // ---------- set ADD X0 _Name
    X0_ADD_Name: () => {
      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set Data to Add
        const idToEdit = state?.X0?.forms?.idToEdit;
        const dataToAdd = { ...state?.X0?.forms?.iptsChanges };

        // ------ When Image Exist (below)
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
        // ------ When Image Exist (above)

        // ---------- set Cond Add or Edit
        const refDb = firestore.collection('collection');
        let dataSuccess = null;

        if (idToEdit) {
          const refDbEdit = refDb.doc(idToEdit);
          dataSuccess = await refDbEdit.update({ ...dataToAdd });
        } else {
          const refDbAdd = refDb.doc();
          dataToAdd.docId = refDbAdd.id;
          dataToAdd.createdAt = firebase.firestore.Timestamp.now();

          dataSuccess = await refDbAdd.set(dataToAdd);
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

    X0_ADD_Name_SUCCESS: () => {
      action.asyncDispatch({ type: 'base_setRoute', value: 'path' });
      return {
        ...state,
        X0: {
          ...state.X0,
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
