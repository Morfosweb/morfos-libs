import { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SayHello } from '@morfos/hello-morfos';
import { Connect, useSelector, useDispatch } from './centralData1';

const initialData = {
  count: 0
};

const Count = () => {
  const count = useSelector((stt) => stt?.count);
  return <Text>{count}</Text>;
};
const Increase = () => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity onPress={() => dispatch({ type: 'INCREASE' })}>
      <Text>Increase</Text>
    </TouchableOpacity>
  );
};
const Decrease = () => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity onPress={() => dispatch({ type: 'DECREASE' })}>
      <Text>Decrease</Text>
    </TouchableOpacity>
  );
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'INIT', value: initialData });
  }, []);

  return (
    <View style={{ backgroundColor: 'red' }}>
      <SayHello value="Morfos" />
      <Count />
      <Increase />
      <Decrease />
    </View>
  );
}

export default function Root() {
  return (
    <Connect>
      <App />
    </Connect>
  );
}
