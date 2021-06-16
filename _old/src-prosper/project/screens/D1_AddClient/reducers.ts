// ---------- import Internals
import { firestore, firebase } from '../../../config/firebase/fbConfig';
import { asyncRefs } from '../../../config/useMorfos/utils';
import estados from '../../refs/otherData/estados_cidades.json';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    D1_InitData: () => {
      const scContent = {
        title: 'Signin',
        subTitle: 'Oi Mundo!',
        description: 'Lorem Ipsum!',
        txtBtn: 'Ir para os TERMOS',
      };
      action.asyncDispatch({ type: 'D1_InitForm' });

      return {
        ...state,
        D1: { ...state.D1, scContent },
      };
    },
  };

  const forms = {
    D1_InitForm: () => {
      // ---------- set Edit
      const idToEdit = state?.D1?.forms?.idToEdit;
      const itemsInfo = state?.B1?.clients?.itemsInfo;
      const editData = itemsInfo?.[idToEdit];

      // ------- set Init State
      const UfsArr = [];
      Object.keys(estados).map(item => UfsArr.push({ label: item, id: item }));

      // ------- set Cond Change State + City
      const changePicker = value => {
        const dataCall = editData?.[value];
        if (dataCall) {
          action.asyncDispatch({
            type: 'D1_IptPicker',
            itemId: value,
            label: dataCall,
            value: dataCall,
          });
        }
      };
      changePicker('estado');
      changePicker('cidade');

      // ------- set Forms Data
      const iptsInfo = {
        // ---------- Inputs Base
        nomeDaEmpresa: {
          // ----- set Dynamics
          itemId: 'nomeDaEmpresa',
          required: true,
          iptChange: 'D1_IptValues',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D1.forms.iptsChanges',
          pHolder: 'Escreva...',
          label: 'Nome da Empresa', // place pHolder
          editData,
        },

        nomeFantasia: {
          // ----- set Dynamics
          itemId: 'nomeFantasia',
          required: true,
          iptChange: 'D1_IptValues',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D1.forms.iptsChanges',
          pHolder: 'Escreva...',
          label: 'Nome Fantasia da Empresa', // place pHolder
          editData,
        },

        CNPJ: {
          // ----- set Dynamics
          itemId: 'CNPJ',
          required: true,
          iptChange: 'D1_IptValues',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D1.forms.iptsChanges',
          pHolder: 'Escreva...',
          label: 'CNPJ', // place pHolder
          editData,
        },

        estado: {
          // ----- set Dynamics
          itemId: 'estado',
          required: true,
          iptChange: 'D1_IptPicker',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D1.forms.iptsChanges',
          pHolder: 'Selecione...',
          label: 'Estado',
          pickerList: UfsArr,

          // editData,
        },

        cidade: {
          // ----- set Dynamics
          itemId: 'cidade',
          required: true,
          iptChange: 'D1_IptPicker',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D1.forms.iptsChanges',
          pHolder: 'Escolha primeiro o Estado...',
          label: 'Cidade',
          pickerList: [],

          // editData,
        },

        rua: {
          // ----- set Dynamics
          itemId: 'rua',
          required: true,
          iptChange: 'D1_IptValues',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D1.forms.iptsChanges',
          pHolder: 'Escreva...',
          label: 'Rua', // place pHolder
          editData,
        },

        bairro: {
          // ----- set Dynamics
          itemId: 'bairro',
          required: true,
          iptChange: 'D1_IptValues',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D1.forms.iptsChanges',
          pHolder: 'Escreva...',
          label: 'Bairro', // place pHolder
          editData,
        },

        complemento: {
          // ----- set Dynamics
          itemId: 'complemento',
          required: true,
          iptChange: 'D1_IptValues',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D1.forms.iptsChanges',
          pHolder: 'Escreva...',
          label: 'Complemento', // place pHolder
          editData,
        },

        CEP: {
          // ----- set Dynamics
          itemId: 'CEP',
          required: true,
          iptChange: 'D1_IptValues',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D1.forms.iptsChanges',
          pHolder: 'Escreva...',
          label: 'CEP', // place pHolder
          editData,
        },

        foneDeContato: {
          // ----- set Dynamics
          itemId: 'foneDeContato',
          required: true,
          iptChange: 'D1_IptValues',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D1.forms.iptsChanges',
          pHolder: 'Escreva...',
          label: 'Telefone de Contato', // place pHolder
          editData,
        },

        observacoes: {
          // ----- set Dynamics
          itemId: 'observacoes',
          required: true,
          iptChange: 'D1_IptValues',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D1.forms.iptsChanges',
          pHolder: 'Escreva...',
          label: 'Observações', // place pHolder
          editData,
        },
      };

      return {
        ...state,
        D1: {
          ...state.D1,
          forms: {
            ...state?.D1?.forms,
            iptsInfo: { ...iptsInfo },
            iptsChanges: {},
          },
        },
      };
    },

    // ---------- set Form Changes by Type
    D1_IptValues: () => {
      return {
        ...state,
        D1: {
          ...state.D1,

          forms: {
            ...state.D1.forms,
            iptsChanges: {
              ...state.D1.forms.iptsChanges,
              [action.field]: action.value,
            },
          },
        },
      };
    },

    D1_IptPicker: () => {
      const condEstado = action.itemId === 'estado';
      const getCities = () => {
        const selCitiesArr = estados[action.label].cidades;
        const picker = selCitiesArr.map(item => ({ label: item, id: item }));

        return {
          cidade: {
            ...state.D1.forms.iptsInfo.cidade,
            pHolder: `Selecione a Cidade de ${action.label}`,
            pickerList: picker,
          },
        };
      };
      const condCidades = condEstado && getCities();

      return {
        ...state,
        D1: {
          ...state.D1,

          forms: {
            ...state.D1.forms,
            iptsInfo: {
              ...state.D1.forms.iptsInfo,
              ...condCidades,
            },

            iptsChanges: {
              ...state.D1.forms.iptsChanges,
              [action.itemId]: action.value,
            },
          },
        },
      };
    },
  };

  const routes = {
    D1_GoToEditClient: () => {
      action.asyncDispatch({ type: 'base_setRoute', value: 'addClient' });
      return {
        ...state,
        D1: {
          ...state.D1,
          forms: {
            idToEdit: action.value,
          },
        },
      };
    },
  };

  const adds = {
    // ---------- set ADD D1 _Client
    D1_ADD_Client: () => {
      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set Data to Add
        const idToEdit = state?.D1?.forms?.idToEdit;
        const dataToAdd = { ...state.D1.forms.iptsChanges };

        // ---------- set Cond Add or Edit
        const refDb = firestore.collection('clients');
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

    D1_ADD_Client_SUCCESS: () => {
      action.asyncDispatch({ type: 'base_setRoute', value: 'home' });
      return {
        ...state,
        D1: {
          ...state.D1,
          dataName: action.value,
        },
      };
    },
  };

  return {
    ...inits,
    ...forms,
    ...adds,
    ...routes,
  };
};

// ---------- set Exports
export default reducers;
