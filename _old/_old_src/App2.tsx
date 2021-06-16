import { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Connect,
  useSelector,
  // useDispatch,
  PropsT,
  setCtData,
  ctDataT,
  ctData,
} from './centralData2';

const stlTxtWhite = { color: 'white' };

// type BtnParT = { txt: string; change: (ctData: ctDataT) => {} };
type BtnParT = { txt: string; change: ctDataT };
const Btn = ({ txt, change }: BtnParT) => {
  const press = () => {
    console.log('3a', change);
    console.log('3b', ctData);

    setCtData(change);
  };
  // const press = () => setCtData((stt) => stt.count + 1);
  // const dispatch = useDispatch();
  // const press = () => dispatch({ type: 'CHANGE', data: { count: 0 } });

  return (
    <TouchableOpacity onPress={press}>
      <Text style={stlTxtWhite}>{txt}</Text>
    </TouchableOpacity>
  );
};

const Count = () => {
  const count = useSelector(stt => {
    console.log(2, stt);

    return stt?.count;
  });
  return <Text style={stlTxtWhite}>{count}</Text>;
};

// const dataPlus = (ctData: ctDataT) => ({ count: ctData.count + 1 });
// const dataPlus = (ctData: ctDataT) => ({ count: 1 });
const dataPlus = { count: +1 };
const Increase = () => <Btn change={dataPlus} txt={'Increase'} />;

// const dataMinus = (ctData: ctDataT) => ({ count: ctData.count - 1 });
const dataMinus = { count: -1 };
const Decrease = () => <Btn change={dataMinus} txt={'Decrease'} />;

const Init = ({ change, children }: PropsT) => {
  const fxChange = () => {
    setCtData(change);
  };

  useEffect(fxChange, []);

  return <>{children}</>;
};

function App() {
  return (
    // <Init change={() => ({ count: 0 })}>
    // <Init change={{ count: 0 }}>
    <View style={{ backgroundColor: 'red', flex: 1 }}>
      <Count />
      <Increase />
      <Decrease />
    </View>
  );
  // {/* </Init> */}
}

export default function Root() {
  return (
    <Connect>
      <App />
    </Connect>
  );
}
