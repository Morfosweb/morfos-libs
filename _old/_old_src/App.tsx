// ---------- import Packs
import { View, Text, TouchableOpacity } from 'react-native';
// import { setData as setCtData, useData } from '@morfos/central-data';

// ---------- import Locals
import { setData as setCtData, useData } from '../lib/central-data';
import { InitData } from '../lib/renders/';
import { ObjPropsT } from '../lib/central-data/types';

// ---------- set Buttons Component
const stlTxtWhite = { color: 'white' };
type BtnParT = { txt: string; setData: (ctData: ObjPropsT) => {} };

const Btn = ({ txt, setData }: BtnParT) => {
  const press = () => setCtData(setData);

  return (
    <TouchableOpacity onPress={press}>
      <Text style={stlTxtWhite}>{txt}</Text>
    </TouchableOpacity>
  );
};

// ---------- set Count Number
const Count = () => {
  const count = useData('count');
  return <Text style={stlTxtWhite}>{count}</Text>;
};

// ---------- set Counter Functions
const dataPlus = (ctData: ObjPropsT) => ({ count: ctData.count + 1 });
const Increase = () => <Btn setData={dataPlus} txt={'Increase'} />;

const dataMinus = (ctData: ObjPropsT) => ({ count: ctData.count - 1 });
const Decrease = () => <Btn setData={dataMinus} txt={'Decrease'} />;

// ---------- set App Component
export default function App() {
  return (
    <InitData setData={{ count: 0 }}>
      <View style={{ backgroundColor: 'red', flex: 1 }}>
        <Count />
        <Increase />
        <Decrease />
      </View>
    </InitData>
  );
}
