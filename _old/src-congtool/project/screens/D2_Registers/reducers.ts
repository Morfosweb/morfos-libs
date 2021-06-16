// ---------- import Internals
import { firestore } from '../../../config/firebase/fbConfig';
import { asyncRefs, ezLog } from '../../../config/useMorfos/utils';
import { dateRef } from './helpers';

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

      action.asyncDispatch({ type: 'D2_GET_Reports' });

      return {
        ...state,
        D2: { ...state.D2, scContent },
      };
    },
  };

  const gets = {
    // ---------- set GET _Reports
    D2_GET_Reports: () => {
      // ---------- set Domain Doc
      const dbRef = firestore.collection('domains').doc('ZFKJ2GKOvJKw1LNrOtp7');

      // ---------- set Domain Doc
      const asyncFn1 = async () => {
        // ---------- set Async Call
        const dataSuccess = await dbRef.get();

        // ------ return SUCCESS
        return dataSuccess;
      };

      // ---------- set All Field Reports
      const asyncFn2 = async () => {
        // ---------- set Async Call
        const dataSuccess = await dbRef.collection('fieldReports').get();

        // ------ return SUCCESS
        return dataSuccess;
      };

      // ---------- set Async References
      const ref = asyncRefs(action, [asyncFn1, asyncFn2]);

      // ---------- call Async / Mock
      ref.callAsync();

      // ---------- set Return
      return {
        ...state,
        D2: { ...state.D2 },
      };
    },

    D2_GET_Reports_SUCCESS: () => {
      // ---------- set Data to Show
      const dataDb = action.value;
      const dataDomain = dataDb[0].data();
      const listReports = dataDb[1];

      // ---------- set Items Info
      const itemsInfo = {};
      // const itemsList = [];
      const propsToSort = {};
      const itemsTotals = {};

      listReports.forEach(doc => {
        const item = doc.data();
        const reportGroups = item.reportGroups;

        for (const key in reportGroups) {
          const groupPeople = reportGroups[key];

          groupPeople.map(personMonth => {
            const { personId, report = {} } = personMonth;

            const condActive = dataDomain.people.find(
              item => item.personId === personId && item.groupId !== '0',
            );

            if (condActive) {
              const { personName, privilegeType, personalData } = condActive;
              const { monthYear, condYear } = dateRef(item.refMonthYear);

              // if (privilegeType === 'pr') {
              propsToSort[personId] = { personId, personName };

              const pathPrev = itemsTotals?.[condYear]?.reportsRef[monthYear];
              const sumFn = ref => {
                const setPrev = pathPrev?.[ref];
                const condPrev = setPrev ?? 0;

                const setCurr = report?.[ref];
                const condCurr = setCurr ?? 0;

                return condPrev + condCurr;
              };

              // ---------- set Items Totals
              itemsTotals['infoPerson'] = {
                personRef: {
                  personName: 'Geral',
                  // personName: 'Pioneiros Auxiliares',
                  // personName: 'Pioneiros Regulares',
                },
              };

              itemsTotals[condYear] = {
                reportsRef: {
                  ...itemsTotals[condYear]?.reportsRef,

                  [monthYear]: {
                    publications: sumFn('publications'),
                    videos: sumFn('videos'),
                    hours: sumFn('hours'),
                    returnVisits: sumFn('returnVisits'),
                    studies: sumFn('studies'),
                    observations: '',
                  },
                },
              };

              // ---------- set Items Info
              itemsInfo[personId] = {
                ...itemsInfo[personId],

                infoPerson: {
                  personRef: {
                    personName,
                    privilegeType,
                    personId,
                    personalData,
                  },
                },

                [condYear]: {
                  reportsRef: {
                    ...itemsInfo[personId]?.[condYear]?.reportsRef,

                    [monthYear]: {
                      privilegeType,
                      ...report,
                    },
                  },
                },
              };
              // }
            }
          });
        }
      });

      // ---------- set Sorted Item List
      const arrItemsInfo: any = Object.values(propsToSort);
      const sortedList = arrItemsInfo.sort((a, b) =>
        a.personName.localeCompare(b.personName),
      );
      const itemsList = sortedList.map(item => item.personId);

      ezLog({ itemsInfo });

      // ---------- set Return
      return {
        ...state,
        D2: {
          ...state.D2,
          dataDomain,
          // listReports,
          itemsTotals,
          itemsList,
          itemsInfo,
          condList: true,
        },
      };
    },
  };

  const changes = {
    // ---------- set UPDATE _Person
    D2_UPDATE_Person: () => {
      // const asyncsArr = dataMonths.map(dataToAdd => {
      //   const dbRef = firestore
      //     .collection('domains')
      //     .doc('ZFKJ2GKOvJKw1LNrOtp7')
      //     .collection('fieldReports');
      //   const refDbAdd = dbRef.doc();

      //   dataToAdd['docId'] = refDbAdd.id;
      //   dataToAdd['createdAt'] = firebase.firestore.Timestamp.now();

      //   return async () => refDbAdd.set(dataToAdd);
      // });

      // ezLog({ asyncsArr });

      // ---------- set Async References
      // const ref = asyncRefs(action, asyncsArr);

      // ---------- call Async / Mock
      // ref.callAsync();

      // ---------- set Return
      return state;
    },

    // ---------- set GET _Person SUCCESS
    D2_UPDATE_Person_SUCCESS: () => {
      // ---------- set Data to Show
      ezLog('OK');

      // ---------- set Return
      return {
        ...state,
      };
    },
  };

  return {
    ...inits,
    ...gets,
    ...changes,
  };
};

// ---------- set Exports
export default reducers;
