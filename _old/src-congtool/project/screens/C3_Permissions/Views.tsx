// ----------- import Packs
import { View, Text, TouchableOpacity } from 'react-native';

// ----------- import Internals
import { UseCondLoader, useData, useStl } from '../../../config/useMorfos';
import { IptPicker, IptTxt } from '../../comps';

// ----------- set Default View
export default ({ children, info }) => {
  // ----------- set Props Params
  const { AddPersonComp } = info;

  // ----------- set Return
  return (
    <View style={useStl.pad20}>
      <View style={stlBODY1a}>
        <View style={stlBodyView}>
          {/* */}
          <AddPersonComp />
          <Text style={{ marginVertical: 10 }}>
            Obs: O usuário deverá entrar com o mesmo e-mail indicado na
            permissão. Qualquer letra diferente irá impediro acesso do usuário
            para a permissão concedida
          </Text>

          {children}
          {/* */}
        </View>
      </View>
    </View>
  );
};

export const AddPersonView = ({ info }) => {
  // ----------- set Props Params
  const { sttActive, selAdd, btnSave, toggle } = info;

  // ----------- set Return
  return (
    <>
      {!sttActive && (
        <TouchableOpacity onPress={selAdd}>
          <Text style={stlDescTxt}>{'+ Adicionar Pessoa'}</Text>
        </TouchableOpacity>
      )}
      {sttActive && <IptAdd info={{ btnSave, toggle }} />}
    </>
  );
};

const IptAdd = ({ info }) => {
  // ----------- set Props Params
  const { toggle, btnSave } = info;

  // ----------- set Return
  return (
    <View style={stlOpenView}>
      <Text style={stlItemName}>{'Adicionar Publicador(a)'}</Text>

      <IptTxt infoData={`C3.forms.iptsInfo.add.personName`} />
      <IptTxt infoData={`C3.forms.iptsInfo.add.userEmail`} />
      <IptPicker infoData={`C3.forms.iptsInfo.add.permissionType`} />
      <IptPicker infoData={`C3.forms.iptsInfo.add.group`} />

      <View style={stlViewBtns}>
        <TouchableOpacity onPress={btnSave}>
          <Text style={stlTxtSave}>SALVAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggle}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const ItemView = ({ info }) => {
  // ----------- set Props Params
  const { item, sttActive, btns, itemId } = info;
  const groupNum = Number(item?.group) - 1;

  const groups = useData('baseDomains.selectedDomain.groups');
  const groupName = groups[groupNum]?.groupName;

  const permissionLabel = {
    1: 'Administrador (Secretário)',
    2: 'Auxiliar do Adm',
    3: 'Ancião',
    4: 'Servo Ministerial',
  };

  const permissionSel = permissionLabel[item?.permissionType];

  // ----------- set Return
  return (
    <>
      {!sttActive && (
        <View style={stlItemView}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={stlItemName}>{item?.personName}</Text>
            <TouchableOpacity onPress={btns.selItem}>
              <Text>Editar</Text>
            </TouchableOpacity>
          </View>
          {!permissionSel && <Text style={stlItemObs}>{'Sem Acesso!'}</Text>}

          {permissionSel && (
            <>
              <Text>Permissão: {permissionSel}</Text>
              <Text>Grupo: {groupName}</Text>
            </>
          )}
        </View>
      )}
      {sttActive && (
        <UseCondLoader data={`C3.forms.iptsInfo.${itemId}.condShow`}>
          <IptEdit info={{ item, btns, itemId }} />
        </UseCondLoader>
      )}
    </>
  );
};

const IptEdit = ({ info }) => {
  const { btns, itemId } = info;
  const { saveItem, cancelItem } = btns;

  return (
    <View style={stlOpenView}>
      <Text style={stlItemName}>{'Editar Dados'}</Text>

      <IptTxt infoData={`C3.forms.iptsInfo.${itemId}.personName`} />
      <IptTxt infoData={`C3.forms.iptsInfo.${itemId}.userEmail`} />
      <IptPicker infoData={`C3.forms.iptsInfo.${itemId}.permissionType`} />
      <IptPicker infoData={`C3.forms.iptsInfo.${itemId}.group`} />

      <View style={stlViewBtns}>
        <TouchableOpacity onPress={saveItem}>
          <Text style={stlTxtSave}>SALVAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={cancelItem}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ***************************************
// #region :: STYLEs
// ---------------

const stlViewBtns: any = {
  alignContent: 'center',
  alignItems: 'center',
  marginVertical: 10,
  height: 50,
  justifyContent: 'space-around',
};

const stlTxtSave: any = [{ fontWeight: 500 }];

const stlItemObs = [{ color: 'red' }];
const stlOpenView = [{ backgroundColor: '#eee', padding: 20 }];

const stlDescTxt = [useStl.txtTitleCard, { color: 'gray' }];
const stlItemView = [useStl.flex1, { marginVertical: 10 }];
const stlItemName: any = [{ fontWeight: 500 }];

const stlBODY1a = [useStl.card, useStl.cardLongBar];

const stlBodyView = [useStl.flex1, { padding: 10 }];

// ---------------
// #endregion
// ***************************************
