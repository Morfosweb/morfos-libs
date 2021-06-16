// ----------- import Packs
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

// ----------- import Internals
import { TpRElement } from '.';

// ----------- set Type
type Props = {
  children: TpRElement;
  val: number;
  style?: StyleProp<ViewStyle>;
};

// ----------- set Default
export default ({ children, val, style }: Props): any => {
  const childrenMap = React.Children.map(children, child =>
    React.cloneElement(child, {
      ...child.props,
      style: { ...child?.props?.style, marginVertical: val },
    }),
  );

  // ----------- set Return
  return <View style={style}>{childrenMap}</View>;
};
