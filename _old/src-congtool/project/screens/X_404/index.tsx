// ----------- import Packs
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

// ----------- import Internals
import ViewDF from './Views';
import { useRouter, useData, UseInitData } from '../../../config/useMorfos';
import { ezLog } from '../../../config/useMorfos/utils';

// ----------- set Info Screen
export const infoSc = {
  path: '404',
  groupSc: 'pub',

  scCode: 'X_404',

  //
  title: 'Página não Encontrada',
};

export default () => {
  // ----------- set Data
  const content = useData('X_404.scContent');
  ezLog({ content });

  // ----------- set Hooks
  const { callRouter } = useRouter();
  const btnGoto = () => callRouter('signin');

  // ----------- set Info Return
  const infoView = { content, btnGoto };

  // ----------- set Return
  return (
    <UseInitData reducer={'X_404_InitData'}>
      <ViewDF info={infoView} />;
    </UseInitData>
  );
};
