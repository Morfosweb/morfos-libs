// ---------- import Internals
import {
  firestore,
  firebase,
  firebaseAuth,
} from '../../../config/firebase/fbConfig';
import { asyncRefs } from '../../../config/useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => {
  const inits = {
    // ---------- set Init Data
    A1_InitData: () => {
      const scContent = {
        title: 'Signin',
        subTitle: 'Oi Mundo!',
        description: 'Lorem Ipsum!',
        txtBtn: 'LOGIN',
        warn: 'E-mail não ...',
      };

      return {
        ...state,
        A1: { ...state.A1, scContent },
      };
    },
  };

  const auth = {
    // ---------- set GET GoogleSignin
    A1_GoogleSignIn: () => {
      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set Firebase Reference
        const refDb = firestore.collection('users');

        // ---------- Set Web Auth Permission
        const provider = new firebase.auth.GoogleAuthProvider();
        const asyncGetPermission = await firebaseAuth.signInWithPopup(provider);

        const dataUser: any = asyncGetPermission.user;

        // ---------- set Get User DB Info
        const searchUser = await refDb
          .where('userEmail', '==', dataUser.email)
          .get();

        const arrUser: any = [];
        searchUser.forEach(doc => arrUser.push(doc.data()));
        const newUser = arrUser.length === 0;

        const userDbInfo: any = {
          userName: dataUser.displayName,
          image: dataUser.photoURL,
          userEmail: dataUser.email,
        };

        // ---------- set New User
        const refDoc = refDb.doc();
        if (newUser) {
          userDbInfo.createdAt = firebase.firestore.Timestamp.now();
          userDbInfo.docId = refDoc.id;

          await refDoc.set({ ...userDbInfo });
        }

        // ---------- set Update User
        if (!newUser) {
          await refDb.doc(arrUser[0].docId).update({ ...userDbInfo });
        }

        const dataSuccess = newUser ? userDbInfo : arrUser[0];

        // ------ return SUCCESS
        return dataSuccess;
      };

      // ---------- set Async References
      const ref = asyncRefs(action, asyncFn);

      // ---------- call Async / Mock
      ref.callAsync();

      // ---------- set Return
      return {
        ...state,
        A1: { ...state.A1 },
      };
    },

    A1_GoogleSignIn_SUCCESS: () => {
      // ---------- set Data
      const dataDb = action.value;

      // ---------- set Route
      action.asyncDispatch({ type: 'base_setRoute', value: 'profile' });

      // ---------- set Persist
      action.asyncDispatch({
        type: 'base_SET_PERSIST',
        value: {
          user: {
            userId: dataDb.docId,
            ...dataDb,
          },
        },
      });

      // ---------- set Return
      return {
        ...state,
        A1: {
          ...state.A1,
          user: dataDb,
        },
      };
    },
  };

  return {
    ...inits,
    ...auth,
  };
};

// ---------- set Exports
export default reducers;
