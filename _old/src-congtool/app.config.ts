import { ExpoConfig, ConfigContext } from '@expo/config';

const oneFbConfig = {
  apiKey: 'AIzaSyD-vt-a2Vpyizmu9RSmgnxMZgl0fLtySgs',
  authDomain: 'congtool-app.firebaseapp.com',
  databaseURL: 'https://congtool-app.firebaseio.com',
  projectId: 'congtool-app',
  storageBucket: 'congtool-app.appspot.com',
  messagingSenderId: '560929934469',
  appId: '1:560929934469:web:18e4434b4081db5fe5edec',

  persistence: true,
};

export const plusInfo = {
  firebase: {
    // ---------- set Production to Dev
    webConfigDev: {
      ...oneFbConfig,
    },
    webConfigProd: {
      ...oneFbConfig,
    },
  },
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,

  name: 'congtool-parque',
  slug: 'congtool-parque',
  version: '0.0.1',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  web: {
    favicon: './assets/favicon.png',
  },
});
