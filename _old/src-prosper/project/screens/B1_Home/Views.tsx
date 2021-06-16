// ----------- import Packs
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP } from '../../../config/styles';

// ----------- import Internals
import { UseIcoMoon, useStl } from '../../../config/useMorfos';

export default ({ info }) => {
  const { routes, content } = info;
  return (
    <View style={stlViewHome}>
      <ScrollView style={stlScrollHome}>
        <View style={stlViewCards}>
          <View style={stlCardPosition}>
            <TouchableOpacity
              style={stlViewCard}
              onPress={routes.activityRegister}
            >
              <UseIcoMoon name="bag" size={60} color={'#113646'} />
              <Text style={stlTxtCard}>{content.txt01}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stlViewCard} onPress={routes.clientsList}>
              <UseIcoMoon name="clients" size={64} color={'#113646'} />
              <Text style={stlTxtCard}>{content.txt02}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stlViewCard} onPress={routes.kpi}>
              <UseIcoMoon name="calculator" size={70} color={'#113646'} />
              <Text style={stlTxtCard}>{content.txt03}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stlViewCard} onPress={routes.chart}>
              <UseIcoMoon name="laptop" size={70} color={'#113646'} />
              <Text style={stlTxtCard}>{`${content.txt04}s`}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stlViewCard} onPress={routes.reportsList}>
              <UseIcoMoon name="thumbs-up" size={120} color={'#113646'} />
              <Text style={stlTxtCard}>{content.txt05}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stlViewCard} onPress={routes.activities}>
              <UseIcoMoon name="checklist" size={60} color={'#113646'} />
              <Text style={stlTxtCard}>{content.txt06}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// #region :: STYLEs *********

// ----------- set Home
const stlViewHome = [useStl.flexMaster];
const stlScrollHome = [useStl.scrollView];
const stlViewCards = [useStl.pad20];

// ----------- ser Card Position
const stlCardPosition = [useStl.colView];

// ----------- set Card
const stlViewCard = [
  useStl.card,
  useStl.flexCenter,
  { width: widthPercentageToDP('40%'), height: 170 },
];
const stlTxtCard = [useStl.txCenter, { marginTop: 10 }];

// #endregion *********
