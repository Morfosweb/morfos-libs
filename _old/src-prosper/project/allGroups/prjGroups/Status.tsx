// ----------- import Packs
import React from 'react';
import { StatusBar } from 'react-native';

// ----------- import Internals
import { primaryColor } from '../../../config/styles';

export default ({ children }) => (
  <>
    <StatusBar backgroundColor={primaryColor} barStyle={'light-content'} />
    {children}
  </>
);
