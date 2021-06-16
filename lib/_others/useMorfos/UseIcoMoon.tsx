// ----------- import Internals
import icoMoonConfig from '../../project/icoMoon/selection.json';
import { Platform } from 'react-native';

// ----------- set Default
export default ({ name, size = 15, color = 'black' }) => {
  const condWeb = Platform.OS === 'web';

  // ----------- set Web Icon
  if (condWeb) {
    const CondComp = require('icomoon-react').default;
    return (
      <CondComp icon={name} size={size} color={color} iconSet={icoMoonConfig} />
    );
  }

  // ----------- set Native Icon
  // if (!condWeb) {
  //   const { createIconSetFromIcoMoon } = require('@expo/vector-icons');

  //   const SetIcon = createIconSetFromIcoMoon(
  //     icoMoonConfig,
  //     'icomoon',
  //     'icomoon.ttf',
  //   );

  //   return <SetIcon name={name} size={size} color={color} />;
  // }

  // ----------- set Return
  return null;
};
