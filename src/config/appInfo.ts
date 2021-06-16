/**
 * WHEN USING EXPO...
 */
// import { ExpoConfig, ConfigContext } from '@expo/config';

const fbConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',

  persistence: true
};

export const firebaseConfig = {
  firebase: {
    // ---------- set Production to Dev
    webConfigDev: {
      ...fbConfig
    },
    webConfigProd: {
      ...fbConfig
    }
  }
};

export default () => ({
  name: '',
  version: '0.0.1',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './toPublic/pwa/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  web: {
    favicon: './toPublic/pwa/favicon.png'
  }
});

/**
 * WHEN USING EXPO...
 */

// export default ({ config }: ConfigContext): ExpoConfig => ({
//   ...config,

//   name: 'congtool-parque',
//   slug: 'congtool-parque',
//   version: '0.0.1',
//   orientation: 'portrait',
//   icon: './assets/icon.png',
//   splash: {
//     image: './assets/splash.png',
//     resizeMode: 'contain',
//     backgroundColor: '#ffffff',
//   },
//   updates: {
//     fallbackToCacheTimeout: 0,
//   },
//   assetBundlePatterns: ['**/*'],
//   ios: {
//     supportsTablet: true,
//   },
//   web: {
//     favicon: './assets/favicon.png',
//   },
// });
