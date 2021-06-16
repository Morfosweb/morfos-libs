// ---------- import Internals
import {
  asyncRefs,
  ezLog,
  findMonth,
  hasData,
} from '../../config/useMorfos/utils';
import { firestore } from '../../config/firebase/fbConfig';

// ---------- set Reducers
const reducers = (state, action) => {
  const gets = {
    // ---------- set Shops List
    allgps_GET_Domains: () => {
      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set User Email
        const userEmail = state.basePersist.user.userEmail;

        // ---------- set Async Call
        const dbRef = firestore
          .collection('domains')
          .where('permissions.arrayEmails', 'array-contains', userEmail);
        const dataSuccess = await dbRef.get();

        // ------ return SUCCESS
        return dataSuccess;
      };

      // ---------- set Async References
      const ref = asyncRefs(action, asyncFn);

      // ---------- call Async / Mock
      ref.callAsync();

      return state;
    },

    allgps_GET_Domains_SUCCESS: () => {
      // ---------- set Data to Show
      const dataDb = action.value;
      const arrDomains: any = [];
      dataDb.forEach(doc => arrDomains.push(doc.data()));

      const condDomain = hasData(arrDomains);

      if (!condDomain) {
        return {
          ...state,
          baseDomains: {
            domains: [],
            condData: true,
          },
        };
      }

      const selectedDomain = arrDomains[0];

      // ----------- set Pemission Conditions
      const userEmail = state.basePersist.user.userEmail;
      const permissions = selectedDomain.permissions.arrayDetails;
      const userDomain = permissions.find(item => item.userEmail === userEmail);
      const permissionType = userDomain?.permissionType;
      const permissionNum = Number(permissionType);
      const condPermission = permissionNum !== 0 && permissionNum;

      const cond1 = condPermission <= 1;
      const cond2 = condPermission <= 2;
      const cond3 = condPermission <= 3;
      const cond4 = condPermission <= 4;

      // ----------- set Date Control
      action.asyncDispatch({ type: 'base_DateInfo' });

      return {
        ...state,
        baseDomains: {
          domains: [...arrDomains],
          selectedDomain: {
            ...selectedDomain,

            userPermissions: {
              cond1,
              cond2,
              cond3,
              cond4,
            },
          },
          condData: true,
        },
      };
    },
  };

  const inits = {
    base_DateInfo: () => {
      function dateControl() {
        const { monthNumber, yearNumber, dateNumber } = findMonth('now');
        const lastMonth = monthNumber - 1;
        const refMonthYear = `${lastMonth}/${yearNumber}`;
        const { monthText } = findMonth(`${yearNumber}-${lastMonth}`);
        const monthExp = `${monthText.pt} de ${yearNumber}`;
        const condZero = lastMonth > 9 ? lastMonth : '0' + lastMonth;
        const refYearMonth = `${yearNumber}/${condZero}`;

        const limitDay = 20;
        // const limitDay = 15;
        const isOpen = dateNumber <= limitDay;

        return {
          refYearMonth,
          refMonthYear,
          isOpen,
          monthExp,
          limitDay,
          infoNow: { monthNumber, yearNumber },
        };
      }

      const dateInfo = dateControl();

      return {
        ...state,
        baseDateInfo: { ...state.baseDateInfo, ...dateInfo },
      };
    },
  };

  return {
    ...gets,
    ...inits,
  };
};

// ---------- set Exports
export default reducers;
