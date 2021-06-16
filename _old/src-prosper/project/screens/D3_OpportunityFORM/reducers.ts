// ---------- import Internals
import { firestore, firebase } from '../../../config/firebase/fbConfig';
import useTimeStamp from '../../../config/useMorfos/useTimeMask';
import { asyncRefs } from '../../../config/useMorfos/utils';
import estados from '../../refs/otherData/estados_cidades.json';
import { checkEmptyIpts } from '../D2_ActivityFORM/helpers';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    D3_InitData: () => {
      const scContent = {
        title: 'Signin',
        subTitle: 'Oi Mundo!',
        description: 'Lorem Ipsum!',
        txtBtn: 'Ir para os TERMOS',
      };
      action.asyncDispatch({ type: 'D3_InitForm' });

      return {
        ...state,
        D3: { ...state.D3, scContent },
      };
    },
  };

  const forms = {
    D3_InitForm: () => {
      // ---------- set Edit
      const idToEdit = state?.D3?.forms?.idToEdit;
      const itemsInfo = state?.B1?.opportunities?.itemsInfo;
      const editData = itemsInfo?.[idToEdit];

      // ------- set Forms Data
      const iptsInfo = {
        // ---------- Inputs TXT
        opportunity_products: {
          // ----- set Dynamics
          itemId: 'opportunity_products',
          required: true,
          iptChange: 'D3_IptValues',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D3.forms.iptsChanges',
          pHolder: 'Escreva...',
          label: 'Nome do Produto',
          editData,
        },

        unit_value_opportunity: {
          // ----- set Dynamics
          itemId: 'unit_value_opportunity',
          required: true,
          iptChange: 'D3_IptValues',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D3.forms.iptsChanges',
          pHolder: 'Escreva...',
          label: 'Valor Unitário',
          editData,
        },

        amount_opportunity: {
          // ----- set Dynamics
          itemId: 'amount_opportunity',
          required: true,
          iptChange: 'D3_IptValues',
          dataPath: 'D3.forms.iptsChanges',
          condNumber: true,
          editData,

          // ----- set Statics
          pHolder: 'Escreva...',
          label: 'Quantidade',
        },

        total_amount_opportunity: {
          // ----- set Dynamics
          itemId: 'total_amount_opportunity',
          required: true,
          iptChange: 'D3_IptValues',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D3.forms.iptsChanges',
          pHolder: 'Escreva...',
          label: 'Valor Total',
          editData,
        },

        observation: {
          // ----- set Dynamics
          itemId: 'observation',
          required: true,
          iptChange: 'D3_IptValues',
          dataPath: 'D3.forms.iptsChanges',
          editData,

          // ----- set Statics
          pHolder: 'Escreva...',
          label: 'Observações',
          // condNumber: true,
          lines: 3,
        },

        // ---------- Inputs Picker
        options_probabilidadeVenda: {
          // ----- set Dynamics
          itemId: 'options_probabilidadeVenda',
          required: true,
          iptChange: 'D3_IptPicker',

          // ----- set Statics
          dataPath: 'D3.forms.iptsChanges',
          pHolder: 'Selecione...',
          label: 'Escolha a Probabilidade de Venda',
          pickerList: [
            { label: 'Alta', id: 'Alta' },
            { label: 'Baixa', id: 'Baixa' },
          ],

          editData,
        },

        options_probabilidadeVenda_starred: {
          // ----- set Dynamics
          itemId: 'options_probabilidadeVenda_starred',
          required: true,
          iptChange: 'D3_IptPicker',

          // ----- set Statics
          dataPath: 'D3.forms.iptsChanges',
          pHolder: 'Selecione...',
          label: 'Estrelar Oportunidade?',
          pickerList: [
            { label: 'Sim', id: 'Sim' },
            { label: 'Não', id: 'Não' },
          ],

          editData,
        },

        opportunity_products_category: {
          // ----- set Dynamics
          itemId: 'opportunity_products_category',
          required: true,
          iptChange: 'D3_IptPicker',

          // ----- set Statics
          dataPath: 'D3.forms.iptsChanges',
          pHolder: 'Selecione...',
          label: 'Escolha a Categoria do Produto',
          pickerList: [
            { label: 'Linha VM', id: 'Linha VM' },
            { label: 'Linha F', id: 'Linha F' },
            { label: 'Consórcios', id: 'Consórcios' },
            { label: 'Seguro', id: 'Seguro' },
            { label: 'Seminovo', id: 'Seminovo' },
          ],

          editData,
        },

        status: {
          // ----- set Dynamics
          itemId: 'status',
          required: true,
          iptChange: 'D3_IptPicker',

          // ----- set Statics
          dataPath: 'D3.forms.iptsChanges',
          pHolder: 'Selecione...',
          label: 'Escolha o status',
          pickerList: [
            { label: '0', id: '0' },
            { label: '1', id: '1' },
            { label: '2', id: '2' },
            { label: '3', id: '3' },
          ],

          editData,
        },

        options_actions_opportunity: {
          // ----- set Dynamics
          itemId: 'options_actions_opportunity',
          required: true,
          iptChange: 'D3_IptPicker',

          // ----- set Statics
          dataPath: 'D3.forms.iptsChanges',
          pHolder: 'Selecione...',
          label: 'Escolha uma Ação',
          pickerList: [
            { label: 'Visitar', id: 'Visitar' },
            { label: 'Ligar', id: 'Ligar' },
            { label: 'Solicitar Crédito', id: 'Solicitar Crédito' },
            { label: 'Requer Docs', id: 'Requer Docs' },
            { label: 'Follow Up', id: 'Follow Up' },
            { label: 'Cadastrar no CM', id: 'Cadastrar no CM' },
          ],

          editData,
        },

        // ---------- Inputs Date
        dateOpportunity: {
          // ----- set Dynamics
          itemId: 'dateOpportunity',
          required: true,
          iptChange: 'D3_DateChange',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D3.forms.iptsMask',
          datePath: 'D3.forms.iptsChanges',
          pHolder: 'Escreva...',
          label: 'Data', // place pHolder
          editData,
        },

        dateEndOpportunity: {
          // ----- set Dynamics
          itemId: 'dateEndOpportunity',
          required: true,
          iptChange: 'D3_DateChange',
          // condNumber: true,

          // ----- set Statics
          dataPath: 'D3.forms.iptsMask',
          datePath: 'D3.forms.iptsChanges',
          pHolder: 'Escreva...',
          label: 'Data', // place pHolder
          editData,
        },
      };

      return {
        ...state,
        D3: {
          ...state.D3,
          forms: {
            ...state?.D3?.forms,
            iptsInfo: { ...iptsInfo },
            iptsChanges: {},
          },
        },
      };
    },

    // ---------- set Form Changes by Type
    D3_IptValues: () => {
      const ipt = action.value;
      const condOr = ipt || ipt === false || ipt === 0;
      const condValue = condOr && ipt !== [] && ipt !== {};
      const condIptError = condValue && { [action.field]: false };

      return {
        ...state,
        D3: {
          ...state.D3,

          forms: {
            ...state.D3.forms,
            msgRequireds: false,

            iptsError: {
              ...state.D3?.forms?.iptsError,
              ...condIptError,
            },

            iptsChanges: {
              ...state.D3.forms.iptsChanges,
              [action.field]: action.value,
            },
          },
        },
      };
    },

    D3_IptPicker: () => {
      return {
        ...state,
        D3: {
          ...state.D3,

          forms: {
            ...state.D3.forms,

            iptsChanges: {
              ...state.D3.forms.iptsChanges,
              [action.itemId]: action.value,
            },
          },
        },
      };
    },

    D3_DateChange: () => {
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
        D3: {
          ...state.D3,

          forms: {
            ...state.D3.forms,
            msgRequireds: false,

            iptsMask: {
              ...state.D3.forms.iptsMask,
              [action.field]: maskedValue,
            },

            iptsError: {
              ...state.D3?.forms?.iptsError,
              ...condIptError,
            },

            iptsChanges: {
              ...state.D3.forms.iptsChanges,
              [action.field]: action.value,
            },
          },
        },
      };
    },

    D3_CheckRequireds: () => {
      const iptsInfo = state.D3?.forms?.iptsInfo;
      const iptsFilleds = state.D3?.forms?.iptsChanges;

      const emptyIpts = checkEmptyIpts({ iptsInfo, iptsFilleds });
      const noData = Object.keys(emptyIpts).length > 0;

      !noData &&
        action.asyncDispatch({
          type: 'D3_ADD_Opportunity',
          value: action.value,
        });

      return {
        ...state,

        D3: {
          ...state.D3,

          forms: {
            ...state.D3?.forms,
            iptsError: { ...emptyIpts },
            msgRequireds: noData,
          },
        },
      };
    },
  };

  const adds = {
    // ---------- set ADD D3 _Opportunity
    D3_ADD_Opportunity: () => {
      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set Data to Add
        const idToEdit = state?.D3?.forms?.idToEdit;
        const dataToAdd = { ...state.D3.forms.iptsChanges };

        // ---------- set Cond Add or Edit
        const refDb = firestore.collection('opportunities');
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

    D3_ADD_Opportunity_SUCCESS: () => {
      action.asyncDispatch({ type: 'base_setRoute', value: 'home' });
      return {
        ...state,

        D3: {
          ...state.D3,
          opportunitySave: action.value,
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
