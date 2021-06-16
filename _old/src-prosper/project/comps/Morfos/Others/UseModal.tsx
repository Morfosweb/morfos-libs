import React from 'react';
import { Modal, Platform, View } from 'react-native';
import { createPortal } from 'react-dom';

export default props => {
  if (Platform.OS !== 'web') {
    return <Modal {...props} />;
  }

  const stlModalView = {
    zIndex: 0,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: props.transparent ? 'transparent' : 'white',
  };

  return (
    props.visible && (
      <WebPortal>
        <View style={stlModalView} {...props}>
          {props.children}
        </View>
      </WebPortal>
    )
  );
};

function WebPortal({ children }) {
  // create and get reference to Modal DOM node
  const appRoot = document.getElementById('root');
  appRoot.insertAdjacentHTML(
    'afterend',
    // 'beforebegin',
    '<div id="portal-root"></div>',
  );

  const mount = document.getElementById('portal-root');
  const el = document.createElement('div');

  const fxAppend = () => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  };

  React.useEffect(fxAppend, []);

  return createPortal(children, el);
}
