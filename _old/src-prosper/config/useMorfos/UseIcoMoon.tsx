// ----------- import Packs
import React from 'react';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import * as Font from 'expo-font';

// ----------- import Internals
import icoMoonConfig from '../../project/icoMoon/selection.json';

// ----------- set Default
export default ({ name, size = 15, color = 'black' }) => {
  const Icon = createIconSetFromIcoMoon(
    icoMoonConfig,
    'icomoon',
    'icomoon.ttf',
  );

  return <Icon name={name} size={size} color={color} />;
};
