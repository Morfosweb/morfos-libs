import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Connect, useSelector, PropsT, setData, CtDataT } from './centralData3';

const stlTxtWhite = { color: 'white' };

type BtnParT = { txt: string; change: (ctData: CtDataT) => {} };

const Btn = ({ txt, change }: BtnParT) => {
  const press = () => setData(change);

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

const dataPlus = (ctData: CtDataT) => ({ count: ctData.count + 1 });
const Increase = () => <Btn change={dataPlus} txt={'Increase'} />;

const dataMinus = (ctData: CtDataT) => ({ count: ctData.count - 1 });
const Decrease = () => <Btn change={dataMinus} txt={'Decrease'} />;

const Init = ({ change, children }: PropsT) => {
  const [sttShow, setShow] = useState(false);
  const fxChange = () => {
    setData(change);
    setShow(true);
  };

  useEffect(fxChange, []);

  return <>{sttShow && children}</>;
};

function App() {
  return (
    <Init change={{ count: 0 }}>
      <View style={{ backgroundColor: 'red', flex: 1 }}>
        <Count />
        <Increase />
        <Decrease />
      </View>
    </Init>
  );
}

export default function Root() {
  return (
    <Connect>
      <App />
    </Connect>
  );
}
