import React from 'react';
import Svg, { G } from 'react-native-svg';
import { VictoryLabel, VictoryTooltip } from 'victory';

export class CustomLabel extends React.Component {
  render() {
    return (
      <G>
        <VictoryLabel
          {...this.props}
          style={{ fill: '#333' }}
          //   dy={0}
          //   dx={({ datum }) => (datum.y > 20 ? datum.y - 68 : datum.y + 18)}
        />
      </G>
    );
  }
}
CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;
CustomLabel.propTypes = { text: propTypes.string };
