// ---------- import Internals
import {
  firestore,
  firebase,
  // storage,
} from '../../../config/firebase/fbConfig';
import { asyncRefs, ezLog, hasData } from '../../../config/useMorfos/utils';
// import { getStorageUrl } from './helpers';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    C3_InitData: () => {
      const itemsInfo =
        state.baseDomains.selectedDomain.permissions.arrayDetails;
      // const filteredList = itemsInfo.filter(item => item.groupId > 0);
      const filteredList = itemsInfo.filter(item => item.personName);
      const orderedList = filteredList.sort((a, b) =>
        a.personName.localeCompare(b.personName),
      );
      const itemsList = orderedList.map(item => String(item.id - 1));

      // ---------- set Init Reports Groups
      action.asyncDispatch({ type: 'C1_InitData' });

      return {
        ...state,
        C3: {
          ...state.C3,
          itemsInfo,
          itemsList,

          forms: {
            ...state?.C3?.forms,
            iptsInfo: {},
            iptsChanges: {},
          },
        },
      };
    },
  };

  const forms = {
    C3_InitForm: () => {
      // ---------- set Edit
      const idToEdit = action.itemId;
      const condEdit = idToEdit ?? 'add';
      const editData = state?.C3?.itemsInfo?.[idToEdit];

      const condPath = `C3.forms.iptsChanges.${condEdit}`;

      // ------- set Forms Data
      const iptsInfo = {
        // ---------- set Inputs Base

        // ---------- set Inputs TXT
        personName: {
          // ----- set Dynamics
          itemId: 'personName',
          required: true,
          iptChange: 'C3_IptValues',
          dataPath: condPath,
          // condNumber: true,
          editData,

          // ----- set Statics
          label: 'Nome',
          pHolder: 'Escreva...',
        },

        userEmail: {
          // ----- set Dynamics
          itemId: 'userEmail',
          required: true,
          iptChange: 'C3_IptValues',
          dataPath: condPath,
          // condNumber: true,
          editData,

          // ----- set Statics
          label: 'E-mail de Acesso',
          pHolder: 'Escreva...',
        },

        // ---------- set Inputs Picker
        permissionType: {
          // ----- set Dynamics
          itemId: 'permissionType',
          required: true,
          iptChange: 'C3_IptPicker',
          dataPath: condPath,
          editData,

          // ----- set Statics
          label: 'Tipo de Permissão',
          pHolder: 'Selecione...',
          pickerList: [
            { label: 'Administrador (Secretário)', id: '1' },
            // { label: 'Auxiliar do Adm', id: '2' },
            { label: 'Ancião', id: '3' },
            { label: 'Servo Ministerial', id: '4' },
            { label: 'Sem Permissão', id: '' },
          ],
        },

        group: {
          // ----- set Dynamics
          itemId: 'group',
          required: true,
          iptChange: 'C3_IptPicker',
          dataPath: condPath,
          editData,

          // ----- set Statics
          label: 'Grupo que preencherá',
          pHolder: 'Selecione...',
          pickerList: [
            { label: 'Canaã 2', id: '1' },
            { label: 'Salão do Reino', id: '2' },
            { label: 'João Paulo 2', id: '3' },
            { label: 'Parque 2', id: '4' },
            { label: 'Jóquei Clube', id: '5' },
            { label: 'Crioulo Haitiano', id: '6' },
          ],
        },
      };

      return {
        ...state,
        C3: {
          ...state?.C3,
          forms: {
            ...state?.C3?.forms,
            iptsInfo: {
              ...state?.C3?.forms?.iptsInfo,
              [condEdit]: { ...iptsInfo, condShow: true },
            },
            iptsChanges: {
              ...state?.C3?.forms?.iptsChanges,

              [condEdit]: {},
            },
          },
        },
      };
    },

    // ---------- set Form Changes by Type
    C3_IptValues: () => {
      const arrToFind = action.dataPath.split('.');
      const idxToFind = arrToFind.length - 1;
      const idToEdit = arrToFind[idxToFind];

      // const itemLabel = `${action.field}_label`;
      // const condLabel = action.label ? { [itemLabel]: action.label } : {};

      return {
        ...state,
        C3: {
          ...state.C3,

          forms: {
            ...state.C3.forms,
            iptsChanges: {
              ...state.C3.forms.iptsChanges,
              [idToEdit]: {
                ...state.C3.forms.iptsChanges?.[idToEdit],
                [action.field]: action.value,
                // ...condLabel,
              },
            },
          },
        },
      };
    },

    C3_IptPicker: () => {
      const arrToFind = action.dataPath.split('.');
      const idxToFind = arrToFind.length - 1;
      const idToEdit = arrToFind[idxToFind];

      // const itemLabel = `${action.itemId}_label`;
      // const condLabel = action.label ? { [itemLabel]: action.label } : {};

      return {
        ...state,
        C3: {
          ...state.C3,

          forms: {
            ...state.C3.forms,
            iptsChanges: {
              ...state.C3.forms.iptsChanges,
              [idToEdit]: {
                ...state.C3.forms.iptsChanges?.[idToEdit],
                [action.itemId]: action.value,
                // ...condLabel,
              },
            },
          },
        },
      };
    },
  };

  const adds = {
    // ---------- set SAVE C3 _Pub
    C3_SAVE_Pub: () => {
      const itemId = action.itemId;
      const condId = itemId ?? 'add';
      const dataToAdd = { ...state?.C3?.forms?.iptsChanges?.[condId] };
      const condData = hasData({ dataToAdd });

      // ---------- set State if no info data
      if (!condData) {
        return state;
      }

      // ---------- set People to Add or Update
      const itemChange = {};

      // const itemEditData = state?.C3?.forms.iptsInfo?.[condId];
      const itemEditData =
        state?.C3?.forms.iptsInfo?.[condId].personName.editData;
      const condSameItem = item => item?.id === itemEditData?.id;
      const domainId = state.baseDomains.selectedDomain.docId;
      const refDomain = firestore.collection('domains').doc(domainId);

      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set function to Add new Item or Edit
        const condPermissionArr = () => {
          const allPermissions =
            state.baseDomains.selectedDomain.permissions.arrayDetails;

          if (itemId) {
            const permissionsArr = [...allPermissions];

            const mapUpdateFn1 = (item, idx) => {
              if (condSameItem(item)) {
                item = { ...item, ...dataToAdd };
                itemChange[idx] = { ...dataToAdd };
              }
              return item;
            };

            return permissionsArr.map(mapUpdateFn1);
          }

          const permissionId = String(allPermissions.length + 1);

          dataToAdd.id = permissionId;
          dataToAdd.createdAt = firebase.firestore.Timestamp.now();

          const newPermissionArr = [...allPermissions, { ...dataToAdd }];
          const newIdx = newPermissionArr.length - 1;
          itemChange[newIdx] = { ...dataToAdd };

          return newPermissionArr;
        };

        const newPermissionArr = condPermissionArr();

        const mapEmails = newPermissionArr
          .filter(item => Number(item?.permissionType) > 0)
          .map(item => item.userEmail);

        const newPermissions = {
          arrayDetails: newPermissionArr,
          arrayEmails: mapEmails,
        };

        // ---------- set Success Data
        const dataSuccess = await refDomain.update({
          permissions: newPermissions,
        });

        // ------ return SUCCESS
        return dataSuccess;
      };

      // ---------- set Async References
      const ref = asyncRefs(action, asyncFn);

      // ---------- call Async / Mock
      ref.callAsync();

      // ------ set Return
      return {
        ...state,
        C3: {
          ...state.C3,
          itemChange,
        },
      };
    },

    C3_SAVE_Pub_SUCCESS: () => {
      // ------ set Update Items Info
      const itemChangeKey = Object.keys(state.C3.itemChange)[0];
      const itemChangeVal = state.C3.itemChange?.[itemChangeKey];

      // ------ set Update People Array
      const oldPermissionArr =
        state.baseDomains.selectedDomain.permissions.arrayDetails;
      const newPermissionArr = [...oldPermissionArr];
      newPermissionArr[itemChangeKey] = {
        ...newPermissionArr[itemChangeKey],
        ...itemChangeVal,
      };

      // ---------- set Init Publishers Data
      action.asyncDispatch({ type: 'C3_InitData' });

      // ------ set Return
      return {
        ...state,

        baseDomains: {
          ...state.baseDomains,

          selectedDomain: {
            ...state.baseDomains.selectedDomain,

            permissions: {
              ...state.baseDomains.selectedDomain.permissions,

              arrayDetails: [...newPermissionArr],
            },
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
