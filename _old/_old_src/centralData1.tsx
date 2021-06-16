import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';

type cDataT = { [key: string]: any };
type ActionT = { type: string; [key: string]: any };
type RporterT = {};
type allRepT = { [key: string]: () => RporterT };
type propsT = { children: React.ReactNode };

function reporters(centralData: cDataT = {}, action: ActionT) {
  const allRep: allRepT = {
    INCREASE() {
      return { ...centralData, count: centralData.count + 1 };
    },
    DECREASE() {
      return { ...centralData, count: centralData.count - 1 };
    },
    INIT() {
      const { value = {} } = action;

      return { ...value };
    },
  };

  const condCalls = allRep[action.type] === undefined;

  return condCalls ? centralData : allRep[action.type]();
}

const store = createStore(reporters);

const Connect = (props: propsT) => {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
};

export { Connect, useSelector, useDispatch };
