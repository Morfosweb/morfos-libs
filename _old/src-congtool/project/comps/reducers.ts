// ---------- import Internals
import { firestore } from '../../config/firebase/fbConfig';
import { asyncRefs } from '../../config/useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    comps_InitMenu: () => {
      // ---------- set Data
      const typeAccount = state?.baseAuthUser?.typeAccount;
      const routesInfo = state?.baseRoute?.routesInfo;
      const arrAllSc: any = [...Object.values(routesInfo)];

      // ---------- set Adm or Shop
      const condArr = arrAllSc.filter(item => item.groupSc === typeAccount);

      // ---------- set Items Menu
      const arrOnlyLayout = condArr.filter(item => item.layout);
      const logout = {
        layout: { icon: 'exit', title: 'Sair' },
      };
      arrOnlyLayout.push(logout);

      return {
        ...state,
        comps: {
          ...state.comps,
          sideLeft: {
            items: arrOnlyLayout,
          },
        },
      };
    },
  };

  const changes = {
    // ---------- set CHANGE Comps _Name_
    comps_ChangeName: () => {
      return {
        ...state,
        sttName: { ...action.value },
      };
    },

    // ---------- set CHANGE Comps _Logout_
    comps_Logout: () => {
      action.asyncDispatch({ type: 'base_setRoute', value: 'signin' });

      return {
        ...state,
        basePersist: {
          ...state.basePersist,
          user: {
            userId: null,
          },
        },
      };
    },

    // ---------- set CHANGE Comps _Logout_

    comps_setFilterList: () => {
      action.asyncDispatch({ type: 'base_setRoute', value: 'filterList' });

      return {
        ...state,
        B6: {
          ...state?.B6,
          filteredList: {
            listName: action.value,
          },
        },
      };
    },
  };

  const edits = {
    // ---------- set DELETE _Prod
    comps_DeleteItem: () => {
      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set Data to Delete
        const currPath = state?.baseRoute?.path;
        let selectColl = '';
        let selectId = '';

        // ---------- set Cond Delete
        switch (currPath) {
          case 'prodList':
            selectId = 'C2';
            selectColl = 'prods';
            break;
          case 'shopProdsList':
            selectId = 'C2';
            selectColl = 'prods';
            break;
          case 'shopsList':
            selectId = 'C1';
            selectColl = 'shops';
            break;
          default:
            console.log('Nenhum desses');
        }

        const idToEdit = state[selectId].idToEdit;
        let dataSuccess;
        let refDb = firestore.collection(selectColl).doc(idToEdit);

        dataSuccess = await refDb.delete();

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

    comps_DeleteItem_SUCCESS: () => {
      action.asyncDispatch({ type: 'base_setRoute', value: 'path' });

      return {
        ...state,
      };
    },
  };

  // ---------- set Reducers Return
  return {
    ...inits,
    ...changes,
    ...edits,
  };
};

// ---------- set Exports
export default reducers;
