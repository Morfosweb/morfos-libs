// import Packages
import firebase from 'firebase/app';
// import * as firebase from "@firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// import "@firebase/storage";

import { plusInfo } from '../../app.config';
const { webConfigDev, webConfigProd } = plusInfo.firebase;
const envConfig =
  process.env.NODE_ENV === 'production' ? webConfigProd : webConfigDev;

export const fbConfig =
  !firebase.apps.length && firebase.initializeApp(envConfig);

export { firebase };
export const firestore = firebase.firestore();
export const firebaseAuth = firebase.auth();
// export const storage = firebase.storage();
