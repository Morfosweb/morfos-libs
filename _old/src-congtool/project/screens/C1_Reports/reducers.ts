// ---------- import Internals
import { firestore, firebase } from '../../../config/firebase/fbConfig';
import { asyncRefs, ezLog } from '../../../config/useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    C1_InitData: () => {
      // ---------- set Selected Group
      action.asyncDispatch({ type: 'C1_SelectedGroup' });

      // ---------- set Return
      return {
        ...state,
        C1: { ...state.C1 },
      };
    },

    C1_SelectedGroup: () => {
      // ---------- set Selected Group
      const selectedDomain = state.baseDomains.selectedDomain;
      const userEmail = state.basePersist.user.userEmail;
      const userPermission = selectedDomain.permissions.arrayDetails.find(
        item => item.userEmail === userEmail,
      );
      const userGroupId = userPermission.group;
      const selectedGroup = selectedDomain.groups.find(
        item => item.groupId === userGroupId,
      );

      // ---------- set CheckDate
      const isOpen = state.baseDateInfo.isOpen;

      if (isOpen) {
        action.asyncDispatch({ type: 'C1_GET_People' });
      }
      const condLoader = !isOpen;

      // ---------- set Return
      return {
        ...state,
        C1: { ...state.C1, selectedGroup, condLoader },
      };
    },

    // ---------- set GET _People
    C1_GET_People: () => {
      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set Selected Domain Id
        const domainId = state.baseDomains.selectedDomain.docId;
        const refMonthYear = state?.baseDateInfo.refMonthYear;

        // ---------- set Async Call
        const refDomain = firestore.collection('domains').doc(domainId);
        const dbRef = refDomain
          .collection('fieldReports')
          .where('refMonthYear', '==', refMonthYear);
        const dataSuccess = await dbRef.get();

        // ------ return SUCCESS
        return dataSuccess;
      };

      // ---------- set Async References
      const ref = asyncRefs(action, asyncFn);

      // ---------- call Async / Mock
      ref.callAsync();

      return {
        ...state,
        C1: { ...state.C1 },
      };
    },

    C1_GET_People_SUCCESS: () => {
      // ---------- set Data to Show
      const dataDb = action.value;
      const refMonthYear = state?.baseDateInfo.refMonthYear;
      const groupId = state?.C1.selectedGroup.groupId;

      const itemsList: any = [];
      dataDb.forEach(doc => {
        itemsList.push(doc.data());
      });

      const filterGroupPeople = state.baseDomains.selectedDomain.people.filter(
        item => item.groupId === groupId,
      );
      const arrPeople = filterGroupPeople.map(item => {
        delete item.createdAt;
        item.report = {};
        return item;
      });

      type RefVal = { reportGroups: {} };
      const refValue: RefVal = itemsList[0];
      const refGroups = refValue?.reportGroups;
      const condGroup = refGroups?.[groupId];

      // ezLog({ refGroups });
      // ezLog({ condGroup });

      // ---------- set users group

      const groupData = () => ({
        [refMonthYear]: {
          ...refValue,
          reportGroups: { ...refGroups, [groupId]: [...condGroup] },
        },
      });

      // ---------- set others groups
      const groupStart = () => ({
        [refMonthYear]: {
          ...refValue,
          reportGroups: { ...refGroups, [groupId]: arrPeople },
        },
      });
      const newValue = condGroup ? groupData() : groupStart();

      return {
        ...state,
        baseDomains: {
          ...state.baseDomains,
          selectedDomain: {
            ...state.baseDomains.selectedDomain,
            reportsData: {
              ...state.baseDomains.selectedDomain.reportsData,
              ...newValue,
            },
          },
        },

        C1: {
          ...state.C1,
          condLoader: true,
        },
      };
    },
  };

  // ---------- set GoTo _Name (To Edit Form)
  const btns = {
    C1_ADD_MonthReport: () => {
      // ---------- set Async Function
      const asyncFn = async () => {
        const {
          monthDoc,
          groupId,
          refMonthYear,
          refYearMonth,
          val,
          domainDoc,
        } = action.pass;

        // ------ Set Db
        const refDb = firestore
          .collection('domains')
          .doc(domainDoc)
          .collection('fieldReports');

        // ---------- set Add or Edit
        let dataSuccess;

        if (monthDoc) {
          const expToUpdate = `reportGroups.${groupId}`;
          const dataToUpdate = { [expToUpdate]: val };

          const refDbEdit = refDb.doc(monthDoc);
          dataSuccess = await refDbEdit.update({ ...dataToUpdate });
        } else {
          const refDbAdd = refDb.doc();
          const dataToSet = {
            docId: refDbAdd.id,
            createdAt: firebase.firestore.Timestamp.now(),
            refMonthYear: refMonthYear,
            refYearMonth: refYearMonth,
            reportGroups: {
              [groupId]: val,
            },
          };

          dataSuccess = await refDbAdd.set(dataToSet);
        }

        // ------ return SUCCESS
        return dataSuccess;
      };

      // ---------- set Async References
      const ref = asyncRefs(action, asyncFn);

      // ---------- call Async / Mock
      ref.callAsync();

      // ------ set Return
      return { ...state };
    },

    C1_ADD_MonthReport_SUCCESS: () => {
      // ------ set New Page
      action.asyncDispatch({ type: 'base_setRoute', value: 'profile' });

      // ------ set Return
      return {
        ...state,
        C1: {
          ...state.C1,
          afterSave: action.value,
        },
      };
    },
  };

  return {
    ...inits,
    ...btns,
  };
};

// ---------- set Exports
export default reducers;
