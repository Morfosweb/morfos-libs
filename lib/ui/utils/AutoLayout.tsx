// ----------- import Packs
import { Children, cloneElement } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

// ----------- import Internals
import { TpRElement } from './types';

// ----------- set Type
type Props = {
  children: TpRElement;
  val: number;
  style?: StyleProp<ViewStyle>;
};

// ----------- set Default
export default ({ children, val, style }: Props): any => {
  const childrenMap = Children.map(children, child =>
    cloneElement(child, {
      ...child.props,
      style: { ...child?.props?.style, marginVertical: val },
    }),
  );

  // ----------- set Return
  return <View style={style}>{childrenMap}</View>;
};
