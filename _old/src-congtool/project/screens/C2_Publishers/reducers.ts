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
    C2_InitData: () => {
      const itemsInfo = state.baseDomains.selectedDomain.people;
      // const filteredList = itemsInfo.filter(item => item.groupId > 0);
      const filteredList = itemsInfo.filter(item => item.personName);
      const orderedList = filteredList.sort((a, b) =>
        a.personName.localeCompare(b.personName),
      );
      const itemsList = orderedList.map(item => String(item.personId - 1));

      // ---------- set Init Reports Groups
      action.asyncDispatch({ type: 'C1_InitData' });

      return {
        ...state,
        C2: {
          ...state.C2,
          itemsInfo,
          itemsList,

          forms: {
            ...state?.C2?.forms,
            iptsInfo: {},
            iptsChanges: {},
          },
        },
      };
    },
  };

  const forms = {
    C2_InitForm: () => {
      // ---------- set Edit
      const idToEdit = action.itemId;
      const condEdit = idToEdit ?? 'add';
      const editData = state?.C2?.itemsInfo?.[idToEdit];

      const condPath = `C2.forms.iptsChanges.${condEdit}`;

      // ------- set Forms Data
      const iptsInfo = {
        // ---------- set Inputs Base

        // ---------- set Inputs TXT
        personName: {
          // ----- set Dynamics
          itemId: 'personName',
          required: true,
          iptChange: 'C2_IptValues',
          dataPath: condPath,
          // condNumber: true,
          editData,

          // ----- set Statics
          label: 'Nome',
          pHolder: 'Escreva...',
        },

        // ---------- set Inputs Picker
        privilegeType: {
          // ----- set Dynamics
          itemId: 'privilegeType',
          required: true,
          iptChange: 'C2_IptPicker',
          dataPath: condPath,
          editData,

          // ----- set Statics
          label: 'Privilégio',
          pHolder: 'Selecione...',
          pickerList: [
            { label: 'Publicador(a)', id: 'pub' },
            { label: 'Pin. Auxiliar', id: 'pa' },
            { label: 'Pin. Regular', id: 'pr' },
            { label: 'Inativo', id: 'in' },
          ],
        },
        groupId: {
          // ----- set Dynamics
          itemId: 'groupId',
          required: true,
          iptChange: 'C2_IptPicker',
          dataPath: condPath,
          editData,

          // ----- set Statics
          label: 'Grupo',
          pHolder: 'Selecione...',
          pickerList: [
            { label: 'Canaã 2', id: '1' },
            { label: 'Salão do Reino', id: '2' },
            { label: 'João Paulo 2', id: '3' },
            { label: 'Parque 2', id: '4' },
            { label: 'Jóquei Clube', id: '5' },
            { label: 'Crioulo', id: '6' },
          ],
        },
        obs: {
          // ----- set Dynamics
          itemId: 'obs',
          required: true,
          iptChange: 'C2_IptPicker',
          dataPath: condPath,
          editData,

          // ----- set Statics
          label: 'Observação',
          pHolder: 'Selecione...',
          pickerList: [
            { label: 'Ativo', id: 'Ativo' },
            { label: 'Se Mudou', id: 'Se Mudou' },
            {
              label: 'Não é mais Publicador(a)',
              id: 'Não é mais Publicador(a)',
            },
          ],
        },
      };

      return {
        ...state,
        C2: {
          ...state?.C2,
          forms: {
            ...state?.C2?.forms,
            iptsInfo: {
              ...state?.C2?.forms?.iptsInfo,
              [condEdit]: { ...iptsInfo, condShow: true },
            },
            iptsChanges: {
              ...state?.C2?.forms?.iptsChanges,

              [condEdit]: {},
            },
          },
        },
      };
    },

    // ---------- set Form Changes by Type
    C2_IptValues: () => {
      const arrToFind = action.dataPath.split('.');
      const idxToFind = arrToFind.length - 1;
      const idToEdit = arrToFind[idxToFind];

      // const itemLabel = `${action.field}_label`;
      // const condLabel = action.label ? { [itemLabel]: action.label } : {};

      return {
        ...state,
        C2: {
          ...state.C2,

          forms: {
            ...state.C2.forms,
            iptsChanges: {
              ...state.C2.forms.iptsChanges,
              [idToEdit]: {
                ...state.C2.forms.iptsChanges?.[idToEdit],
                [action.field]: action.value,
                // ...condLabel,
              },
            },
          },
        },
      };
    },

    C2_IptPicker: () => {
      const arrToFind = action.dataPath.split('.');
      const idxToFind = arrToFind.length - 1;
      const idToEdit = arrToFind[idxToFind];

      // const itemLabel = `${action.itemId}_label`;
      // const condLabel = action.label ? { [itemLabel]: action.label } : {};

      return {
        ...state,
        C2: {
          ...state.C2,

          forms: {
            ...state.C2.forms,
            iptsChanges: {
              ...state.C2.forms.iptsChanges,
              [idToEdit]: {
                ...state.C2.forms.iptsChanges?.[idToEdit],
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
    // ---------- set SAVE C2 _Pub
    C2_SAVE_Pub: () => {
      const itemId = action.itemId;
      const condId = itemId ?? 'add';
      const dataToAdd = { ...state?.C2?.forms?.iptsChanges?.[condId] };
      const condData = hasData({ dataToAdd });

      // ---------- set State if no info data
      if (!condData) {
        return state;
      }

      // ---------- set People to Add or Update
      const itemChange = {};

      let asyncFn;
      // const itemEditData = state?.C2?.forms.iptsInfo?.[condId];
      const itemEditData =
        state?.C2?.forms.iptsInfo?.[condId].personName.editData;
      const condSameItem = item => item?.personId === itemEditData?.personId;
      const domainId = state.baseDomains.selectedDomain.docId;
      const refDomain = firestore.collection('domains').doc(domainId);

      // ---------- set Async Function
      const asyncFn1 = async () => {
        // ---------- set function to Add new Item or Edit
        const condPeopleArr = () => {
          const allPeople = state.baseDomains.selectedDomain.people;

          if (itemId) {
            const peopleArr = [...allPeople];

            const mapUpdateFn1 = (item, idx) => {
              if (condSameItem(item)) {
                item = { ...item, ...dataToAdd };
                itemChange[idx] = { ...dataToAdd };
              }
              return item;
            };

            return peopleArr.map(mapUpdateFn1);
          }

          const personId = String(allPeople.length + 1);

          dataToAdd.personId = personId;
          dataToAdd.createdAt = firebase.firestore.Timestamp.now();
          dataToAdd.personalData = {
            address: '',
            baptism: '',
            birth: '',
            elder: false,
            genre: 'm',
            hope: 'oo',
            ministerialSv: false,
            personId: personId,
            personName: dataToAdd.personName,
            phone: '',
            regularPion: false,
          };

          const newPeopleArr = [...allPeople, { ...dataToAdd }];
          const newIdx = newPeopleArr.length - 1;
          itemChange[newIdx] = { ...dataToAdd };

          return newPeopleArr;
        };

        const newPeopleArr = condPeopleArr();
        // ---------- set Success Data
        const dataSuccess = await refDomain.update({ people: newPeopleArr });

        // ------ return SUCCESS
        return dataSuccess;
      };

      // ---------- set Cond Report Group Data
      const refMonthYear = state.baseDateInfo.refMonthYear;
      const reportsData =
        state.baseDomains.selectedDomain.reportsData?.[refMonthYear];
      const rptGps = reportsData?.reportGroups;
      const condGroupId = itemId ? itemEditData.groupId : dataToAdd.groupId;
      const reportArr = rptGps && rptGps?.[condGroupId];

      asyncFn = asyncFn1;

      // ---------- set Cond Change Actual Report
      if (reportArr) {
        ezLog({ condGroupId });
        ezLog({ reportArr });
        ezLog({ dataToAdd });

        // ---------- set Change Reports Data
        const asyncFn2 = async () => {
          let dataToUpdate;

          if (itemId) {
            const mapUpdateFn2 = item => {
              if (condSameItem(item)) {
                item = { ...item, ...dataToAdd };
              }
              return item;
            };

            dataToUpdate = reportArr.map(mapUpdateFn2);
          } else {
            dataToUpdate = [...reportArr, { ...dataToAdd }];
          }

          // ---------- set Add or Edit
          const refReport = refDomain
            .collection('fieldReports')
            .doc(reportsData.docId);
          const selField = `reportGroups.${condGroupId}`;
          const dataSuccess = await refReport.update({
            [selField]: dataToUpdate,
          });

          return dataSuccess;
        };

        asyncFn = [asyncFn1, asyncFn2];
      }

      // ---------- set Async References
      const ref = asyncRefs(action, asyncFn);

      // ---------- call Async / Mock
      ref.callAsync();

      // ------ set Return
      return {
        ...state,
        C2: {
          ...state.C2,
          itemChange,
        },
      };
    },

    C2_SAVE_Pub_SUCCESS: () => {
      // ------ set Update Items Info
      const itemChangeKey = Object.keys(state.C2.itemChange)[0];
      const itemChangeVal = state.C2.itemChange?.[itemChangeKey];

      // ------ set Update People Array
      const oldPeopleArr = state.baseDomains.selectedDomain.people;
      const newPeopleArr = [...oldPeopleArr];
      newPeopleArr[itemChangeKey] = {
        ...newPeopleArr[itemChangeKey],
        ...itemChangeVal,
      };

      // ---------- set Init Publishers Data
      action.asyncDispatch({ type: 'C2_InitData' });

      // ------ set Return
      return {
        ...state,

        baseDomains: {
          ...state.baseDomains,

          selectedDomain: {
            ...state.baseDomains.selectedDomain,

            people: [...newPeopleArr],
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
