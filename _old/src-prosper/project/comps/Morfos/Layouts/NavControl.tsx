// ----------- import Packs
import React from 'react';
import { View, ScrollView, Pressable } from 'react-native';

// ----------- import Internals
import {
  useStl,
  useData,
  useRouter,
  UseInitData,
} from '../../../../config/useMorfos';
import { SideLeft, NavUp, SideRight, Banner } from '../..';
import screens from '../../../screens';

export default ({ children }) => {
  // ----------- set Data
  const scInfo = useData('baseRoute.currScInfo');
  const infoBigSc = scInfo && scInfo.condBigSc;
  const condBigSc = infoBigSc ?? false;

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set BUTTONs
  const toggleMenu = () => callRouter(scInfo.path);

  // ----------- set Style
  const stlContent = [
    {
      backgroundColor: '#f0f0f0',
      flex: 1,
      height: '100%',
      overflow: 'hidden',
    },
  ];
  const stlRow = [useStl.masterContent];
  const stlFlex1 = [{ flex: 1 }];
  const stlScroll = [{ paddingBottom: 40 }];

  // ----------- set Pressable
  const CompCondBig = ({ children }) => {
    const CompBig = <Pressable onPress={toggleMenu}>{children}</Pressable>;
    const CompNoBig = <View>{children}</View>;
    const condComp = condBigSc ? CompNoBig : CompBig;
    return condComp;
  };

  return (
    <View style={stlContent}>
      <NavUp />

      <View style={stlRow}>
        <UseInitData reducer={'comps_InitMenu'}>
          <SideLeft />
        </UseInitData>
        <View style={stlFlex1}>
          <ScrollView style={stlScroll}>
            <Banner />

            {/* BIG SCREEN */}
            <CompCondBig>{children}</CompCondBig>
          </ScrollView>
        </View>
      </View>

      <CompSideRight />
    </View>
  );
};

const CompSideRight = () => {
  // ----------- set Data
  const pathRight = useData('baseRoute.pathRight');
  const CompRight = useCurrRightSc();
  return (
    !!pathRight && (
      <SideRight>
        <ScrollView>
          <CompRight />
        </ScrollView>
      </SideRight>
    )
  );
};

function useCurrRightSc() {
  // ----------- set Data
  const routesInfo = useData('baseRoute.routesInfo');
  const path = useData('baseRoute.pathRight');

  // ----------- set Current Screen Condition
  const currPath = routesInfo[path];

  // ----------- set Current Screen Comp
  const currModule = currPath?.scKey;
  const CurrScreen = screens[currModule];
  const CurrModule = CurrScreen?.default;
  // ----------- set Return
  return CurrModule;
}
