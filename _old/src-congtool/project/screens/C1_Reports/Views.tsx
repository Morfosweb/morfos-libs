// ----------- import Packs
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../config/useMorfos';

export default ({ info }) => (
  <View style={useStl.pad20}>
    <View style={stlBODY1a}>
      <View style={{ alignItems: 'center', marginBottom: 25 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, marginRight: 8 }}>Grupo:</Text>
          <Text style={{ fontSize: 18 }}>{info.groupName}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, marginRight: 8 }}>Mês:</Text>
          <Text style={{ fontSize: 22 }}>{info.monthExp}</Text>
          {/* */}
          {/* /}
          <Text style={{ fontSize: 22 }}>{info.monthExp-1}</Text>
          {/* */}
        </View>

        {info.isOpen && (
          <Text style={{ fontSize: 12, color: 'grey' }}>
            {`Formulário disponível até o dia ${info.limitDay}`}
          </Text>
        )}
      </View>

      {info.TEMPBTN}

      {info.isOpen && info.listItem}

      {info.isOpen && info.listItem && info.buttonsComp}

      {!info.isOpen && (
        <Text style={{ flex: 1, textAlign: 'center', fontSize: 25 }}>
          MÊS FINALIZADO!
        </Text>
      )}
    </View>
  </View>
);

export const ItemView = ({ info, children }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>
        {info.itemName}
      </Text>

      <View style={{ marginBottom: 5, flexDirection: 'row' }}>{children}</View>
      <View style={{ marginBottom: 15, flexDirection: 'column' }}>
        <TextInput
          style={inputObs}
          defaultValue={info.defaultVal}
          placeholder={'Observação breve'}
          placeholderTextColor="#bbb"
          onChangeText={info.changeText}
        />
      </View>
      <View style={{ backgroundColor: '#ddd', height: 1, width: '100' }} />
    </View>
  );
};

export const InputsView = ({ info }) => {
  return (
    <View style={[useStl.flexCenter, { flexDirection: 'column' }]}>
      <Text style={{ fontSize: 12, color: '#555' }}>{info.label}</Text>

      <TextInput
        style={input}
        defaultValue={info.defaultVal}
        placeholder={'0'}
        placeholderTextColor="#bbb"
        onChangeText={info.changeText}
        keyboardType={'numeric'}
      />
    </View>
  );
};

export const BtnsView = ({ info }) => {
  return (
    <View style={stlBODY1b}>
      {info.sttShowMsg && <Text style={stlBODY4}>{info.msgText}</Text>}

      <TouchableOpacity style={stlBODY3} onPress={info.btnSave}>
        <Text style={stlBODY2c}>SAVE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={stlBODY3a} onPress={info.btnCancel}>
        <Text>CANCEL</Text>
      </TouchableOpacity>
    </View>
  );
};

// ***************************************
// #region :: STYLEs
// ---------------

const stlBODY1a = [useStl.card, useStl.cardLongBar];
const stlBODY1b: any = [useStl.flexCenter];
const stlBODY2c = [useStl.txtPrimaryInverse];
const input: any = [
  {
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ebebeb',
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 65,
    margin: 2,
  },

  useStl.mgB20,
];
const inputObs: any = [...input, { width: 350, textAlign: 'left' }];
const stlBODY3: any = [
  useStl.btn,
  useStl.btnLarge,
  useStl.btnPrimary,
  { marginBottom: 10 },
];
const stlBODY3a: any = [useStl.btn, useStl.btnLarge];
const stlBODY4: any = [useStl.msgError];

// ---------------
// #endregion
// ***************************************
