// ---------- import Internals
import { firestore, firebase } from '../../../config/firebase/fbConfig';
import useTimeStamp from '../../../config/useMorfos/useTimeMask';
import { asyncRefs, ezLog, hasData } from '../../../config/useMorfos/utils';
import { checkEmptyIpts } from './helpers';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    D2_InitData: () => {
      const scContent = {
        title: 'Signin',
        subTitle: 'Oi Mundo!',
        description: 'Lorem Ipsum!',
        txtBtn: 'Ir para os TERMOS',
      };
      action.asyncDispatch({ type: 'D2_InitForm' });

      return {
        ...state,
        D2: { ...state.D2, scContent },
      };
    },
  };

  const forms = {
    D2_InitForm: () => {
      // ---------- set Edit
      const idToEdit = state?.D2?.forms?.idToEdit;
      const itemsInfo = state?.B1?.clients?.itemsInfo;
      const editData = itemsInfo?.[idToEdit];

      // ------- set Forms Data
      const iptsInfo = {
        // ---------- Inputs Base
        dateActivity: {
          // ----- set Dynamics
          itemId: 'dateActivity',
          required: true,
          iptChange: 'D2_DateChange',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D2.forms.iptsMask',
          datePath: 'D2.forms.iptsChanges',
          pHolder: 'Escreva...',
          label: 'Data', // place pHolder
          editData,
        },

        options_contato: {
          // ----- set Dynamics
          itemId: 'options_contato',
          required: true,
          iptChange: 'D2_IptPicker',

          // ----- set Statics
          dataPath: 'D2.forms.iptsChanges',
          label: 'Tipo de Contato',
          pHolder: 'Selecione...',
          pickerList: [
            { label: 'Telefone', id: 'Telefone' },
            { label: 'Visita', id: 'Visita' },
            { label: 'Outros', id: 'Outros' },
            { label: 'Whatsapp', id: 'Whatsapp' },
          ],

          editData,
        },

        obs_activity: {
          // ----- set Dynamics
          itemId: 'obs_activity',
          required: true,
          iptChange: 'D2_IptValues',
          dataPath: 'D2.forms.iptsChanges',
          editData,

          // ----- set Statics
          pHolder: 'Escreva...',
          label: 'Observações', // place pHolder
          // condNumber: true,
          lines: 3,
        },
      };

      return {
        ...state,
        D2: {
          ...state.D2,

          forms: {
            ...state?.D2?.forms,
            showActivity: true,
            iptsInfo: { ...iptsInfo },
            iptsChanges: {},
          },
        },
      };
    },

    // ---------- set Form Changes by Type
    D2_IptValues: () => {
      const ipt = action.value;
      const condOr = ipt || ipt === false || ipt === 0;
      const condValue = condOr && ipt !== [] && ipt !== {};
      const condIptError = condValue && { [action.field]: false };

      return {
        ...state,
        D2: {
          ...state.D2,

          forms: {
            ...state?.D2?.forms,
            msgRequireds: false,

            iptsError: {
              ...state.D2?.forms?.iptsError,
              ...condIptError,
            },

            iptsChanges: {
              ...state?.D2?.forms?.iptsChanges,
              [action.field]: action?.value,
            },
          },
        },
      };
    },

    D2_IptPicker: () => {
      const ipt = action.value;
      const condOr = ipt || ipt === false || ipt === 0;
      const condValue = condOr && ipt !== [] && ipt !== {};
      const condIptError = condValue && { [action.itemId]: false };

      return {
        ...state,
        D2: {
          ...state.D2,

          forms: {
            ...state.D2.forms,
            msgRequireds: false,

            iptsError: {
              ...state.D2?.forms?.iptsError,
              ...condIptError,
            },

            iptsChanges: {
              ...state.D2.forms.iptsChanges,
              [action.itemId]: action.value,
            },
          },
        },
      };
    },

    D2_DateChange: () => {
      const { value } = action;

      const ipt = action.value;
      const condOr = ipt || ipt === false || ipt === 0;
      const condValue = condOr && ipt !== [] && ipt !== {};
      const condIptError = condValue && { [action.field]: false };
      const condDate = condValue ?? new Date();

      const { timeMask } = useTimeStamp(condDate);
      const maskedValue = timeMask(value);

      return {
        ...state,
        D2: {
          ...state.D2,

          forms: {
            ...state.D2.forms,
            msgRequireds: false,

            iptsMask: {
              ...state.D2.forms.iptsMask,
              [action.field]: maskedValue,
            },

            iptsError: {
              ...state.D2?.forms?.iptsError,
              ...condIptError,
            },

            iptsChanges: {
              ...state.D2.forms.iptsChanges,
              [action.field]: action.value,
            },
          },
        },
      };
    },

    D2_CheckRequireds: () => {
      const iptsInfo = state.D2?.forms?.iptsInfo;
      const iptsFilleds = state.D2?.forms?.iptsChanges;

      const emptyIpts = checkEmptyIpts({ iptsInfo, iptsFilleds });
      const noData = Object.keys(emptyIpts).length > 0;

      const condShowActivity = !noData && { showActivity: false };

      !noData &&
        action.asyncDispatch({ type: 'D2_ADD_Activity', value: action.value });

      return {
        ...state,

        D2: {
          ...state.D2,

          forms: {
            ...state.D2?.forms,
            iptsError: { ...emptyIpts },
            msgRequireds: noData,
            ...condShowActivity,
          },
        },
      };
    },
  };

  const adds = {
    // ---------- set ADD D2 _Activity
    D2_ADD_Activity: () => {
      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set Data to Add
        const idToEdit = state?.D2?.forms?.idToEdit;
        const dataToAdd = { ...state.D2.forms.iptsChanges };

        // ---------- set Cond Add or Edit
        const refDb = firestore.collection('activities');
        let dataSuccess = null;

        if (idToEdit) {
          const refDbEdit = refDb.doc(idToEdit);
          dataSuccess = await refDbEdit.update({ ...dataToAdd });
        } else {
          const refDbAdd = refDb.doc();
          dataToAdd.docId = refDbAdd.id;
          dataToAdd.createdAt = firebase.firestore.Timestamp.now();
          dataToAdd.clientId = state.D4.selectedClient;

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

    D2_ADD_Activity_SUCCESS: () => {
      return {
        ...state,
        D2: {
          ...state.D2,
          activitySave: action.value,
        },

        D3: {
          ...state.D3,

          forms: {
            ...state.D3?.forms,
            showOppLine: true,
          },
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
