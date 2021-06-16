import { Platform } from 'react-native';
import * as VictoryNative from 'victory-native';
import * as VictoryWeb from 'victory';

const condPlat = Platform.OS === 'web' ? VictoryWeb : VictoryNative;

export const VictoryPie = condPlat.VictoryPie;
export const VictoryTooltip = condPlat.VictoryTooltip;
export const VictoryChart = condPlat.VictoryChart;
export const VictoryBar = condPlat.VictoryBar;
export const VictoryLabel = condPlat.VictoryLabel;
export const VictoryScatter = condPlat.VictoryScatter;
export const VictoryTheme = condPlat.VictoryTheme;
export const VictoryAxis = condPlat.VictoryAxis;
