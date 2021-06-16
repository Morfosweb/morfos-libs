// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// ----------- import Internals
import { UseIcoMoon, useStl } from '../../../config/useMorfos';
import { LineListIcons } from '../../comps';

export const NoItemView = () => {
  return <Text>Sem Itens</Text>;
};

export const ItemView = ({ info: { item, itemId } }) => {
  return <LineListIcons infoData={item} itemId={itemId} />;
};

export default ({ info, children }) => {
  return (
    <View style={bodyView}>
      <View style={stlPadContent}>
        {false && <Modal />}
        {true && <Form info={info} />}
        {children}
      </View>
    </View>
  );
};

const Modal = () => {
  return (
    <View style={stl01MODAL}>
      <View style={stl01MODAL2}>
        <View style={stl01MODAL3}>
          <Text style={{ textAlign: 'center' }}>
            Deseja considerar essa Oportunidade como Perdida?
          </Text>
        </View>
        <View style={stl01MODAL4}>
          <TouchableOpacity style={stl01MODAL5}>
            <Text style={{ color: '#fff' }}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stl01MODAL6}>
            <Text style={{ color: '#fff' }}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Form = ({ info }) => {
  const {
    getIptClientName,
    condValClientName,
    condValState,
    getPickState,
    condValCity,
    getPickCity,
    getIptProb,
    condValProb,
    condValProd,
    getPickProd,
    condValMod,
    getPickMod,
    btnClear,
    btnFilter,
  } = info;
  const [show, setShow] = React.useState(true);
  const condStl = !show && { flex: 1 };
  const setBtnShow = () => setShow(!show);
  return (
    <View style={[stl01FILTER, condStl]}>
      <TouchableOpacity style={stl01FILTER2} onPress={setBtnShow}>
        <View style={stlView04FILTER}>
          <Text style={[stlTxt01FILTER]}>Filtro</Text>
          <View>
            <UseIcoMoon name={'edit'} size={22} color={'#333'} />
          </View>
        </View>
      </TouchableOpacity>

      {show && (
        // FILTRO DE CLIENTE
        <>
          <View style={stlView04FILTER2}>
            <View style={stl01FILTER2}>
              <Text style={stl03FILTER}>Nome de Cliente</Text>
              <TextInput
                onChangeText={getIptClientName}
                style={stl03INPUT}
                value={condValClientName}
              />
            </View>

            <View style={stl01FILTER3}>
              <View style={stl01FILTER4}>
                <View style={stl08FILTER}>
                  <Text style={stl03FILTER}>Estado</Text>
                  <Picker
                    selectedValue={condValState}
                    style={stl08FILTER2}
                    onValueChange={getPickState}
                  >
                    <Picker.Item value="initial" label="Selecione um Estado" />
                    <Picker.Item
                      value="Santa Catarina"
                      label="Santa Catarina"
                    />
                    <Picker.Item value="Ceará" label="Ceará" />
                    <Picker.Item value="São Paulo" label="São Paulo" />
                  </Picker>
                </View>

                <View style={stlBox}>
                  <Text style={stl03FILTER}>Cidade</Text>

                  <Picker
                    style={stl08FILTER3}
                    selectedValue={condValCity}
                    onValueChange={getPickCity}
                  >
                    <Picker.Item value="initial" label="Selecione uma Cidade" />
                    <Picker.Item
                      value="Balneário Gaivota"
                      label="Balneário Gaivota"
                    />
                    <Picker.Item value="rioDeJaneiro" label="Rio de Janeiro" />
                  </Picker>
                </View>
              </View>
            </View>
            {/* FILTRO DE PROBABILIDADE */}
            <View style={stl08FILTER4}>
              <Text style={stl03FILTER}>Probabilidade</Text>

              <View style={stl08FILTER5}>
                {/* INPUT SELECT PARA PROBABILIDADE */}
                <TextInput
                  onChangeText={getIptProb}
                  style={stl03INPUT}
                  value={condValProb}
                />
              </View>
            </View>
          </View>

          {/* FILTRO DE PRODUTO/MODELO */}
          <View style={stl08FILTER6}>
            <View style={stl08FILTER7}>
              <View style={stl08FILTER}>
                <Text style={stl03FILTER}>Produto</Text>
                <Picker
                  selectedValue={condValProd}
                  style={stl08FILTER2}
                  onValueChange={getPickProd}
                >
                  <Picker.Item value="initial" label="Selecione uma Opção" />
                  <Picker.Item value="FM 380 6X2" label="FM 380 6X2" />
                  <Picker.Item value="convencional" label="convencional" />
                </Picker>
              </View>
              <View style={stl08FILTER}>
                <Text style={stl03FILTER}>Modelo</Text>
                <Picker
                  selectedValue={condValMod}
                  style={stl08FILTER2}
                  onValueChange={getPickMod}
                >
                  <Picker.Item value="initial" label="Selecione uma Opção" />
                  <Picker.Item value="Linha F" label="linha F" />
                  <Picker.Item value="Consórcio" label="Consórcio" />
                </Picker>
              </View>
            </View>
          </View>

          <View style={stl08FILTER10}>
            <TouchableOpacity style={stl08FILTER11} onPress={btnClear}>
              <Text style={{ color: '#666' }}>Limpar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stl08FILTER11} onPress={btnFilter}>
              <Text style={{ color: '#666' }}>Filtrar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

// #region :: STYLEs *********
const bodyView = [useStl.flex1, useStl.flexCenter];
const stlPadContent = [{ width: '90%' }];
const stlBox = [useStl.stlBox, { width: '50%' }];

// ---------- set Filter
const stl01FILTER = [
  useStl.card,
  useStl.flexRow,
  useStl.flexBetween,
  { height: 550, width: '100%', flexDirection: 'column' },
];
const stl01FILTER2 = { width: '100%' };
const stl01FILTER3 = { width: '100%', marginTop: 20 };
const stl01FILTER4 = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};
const stl03FILTER = [{ fontSize: 14 }];
const stl03INPUT = [useStl.input, { marginBottom: 20 }];
const stl08FILTER = [{ flex: 1 }];
const stl08FILTER2 = {
  height: 30,
  width: '80%',
  marginTop: 2,
  borderColor: '#ddd',
};
const stl08FILTER3 = {
  height: 30,
  width: '100%',
  marginTop: 5,
  borderColor: '#ddd',
};
const stl08FILTER4 = { width: '100%', marginTop: 20 };
const stl08FILTER5 = { flexDirection: 'row' };
const stl08FILTER6 = { width: '100%', marginTop: -40 };
const stl08FILTER7 = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};
const stl08FILTER10 = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
};
const stl08FILTER11 = [
  useStl.btn,
  { width: '40%', height: 40, marginTop: 15, marginBottom: 10 },
];
const stlView04FILTER = [useStl.flexRow, useStl.flexBetween];
const stlView04FILTER2 = { width: '100%' };
const stlTxt01FILTER = [useStl.Card, { fontSize: 19 }];

const shadowRESULT = [useStl.shadow];

// ---------- set Modal
const stl01MODAL = {
  width: '100%',
  zIndex: 7,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};
const stl01MODAL2 = [
  shadowRESULT,
  {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 300,
    height: 200,
    top: -15,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
];
const stl01MODAL3 = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
};
const stl01MODAL4 = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 30,
};
const stl01MODAL5 = {
  width: '40%',
  height: 40,
  backgroundColor: '#a9a9a9',
  flexDirection: 'row',
  borderRadius: 30,
  alignItems: 'center',
  justifyContent: 'center',
};
const stl01MODAL6 = {
  width: '40%',
  height: 40,
  backgroundColor: '#2A576B',
  flexDirection: 'row',
  borderRadius: 30,
  alignItems: 'center',
  justifyContent: 'center',
};

// #endregion *********
