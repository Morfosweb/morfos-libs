// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
} from '../../../config/chartsVictory';

// ----------- import Internals
import { useData, useStl } from '../../../config/useMorfos';
import { theme } from './helpers';

export default ({ info }) => {
  const { btnFilter } = info;
  // ---------- set Data
  const chartData = useData('B5.chartData');
  const dynHeight = 50 * chartData.length;
  return (
    <ScrollView>
      <View style={stlStarsView}>
        <TouchableOpacity style={stlBtnFilter} onPress={btnFilter}>
          <Text style={stlFilter03}>Filtro</Text>
        </TouchableOpacity>

        <VictoryChart
          horizontal
          width={400}
          height={dynHeight}
          theme={theme}
          padding={{ left: 0, top: 20, bottom: 20, right: 60 }}
        >
          <VictoryBar data={chartData} y="y" x="x" />

          <VictoryAxis />

          {chartData.map((item, idx) => {
            const { x, y } = item;
            return (
              <VictoryAxis
                key={idx}
                dependentAxis
                axisValue={x}
                label={`${x} - ${y}`}
                style={{
                  axisLabel: { padding: -5 },
                  tickLabels: { fill: 'none' },
                  axis: { stroke: 'none' },
                }}
              />
            );
          })}
        </VictoryChart>
      </View>
    </ScrollView>
  );
};

// #region :: STYLEs *********

// ---------- set Filter

const stlFilter01 = [useStl.card];
const stlFilter03 = [useStl.txTitleCard];
const stlStarsView = [
  useStl.flex1,
  useStl.pad20,
  useStl.bgSc,
  useStl.flexTopCenter,
];
const stlBtnFilter = [
  stlFilter01,
  { marginHorizontal: 20, marginTop: 20, width: '100%' },
];
// #endregion *********
