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
            Obs: Qualquer adição ou alteração começará a valer para o mês
            corrente.
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

      <IptTxt infoData={`C2.forms.iptsInfo.add.personName`} />
      <IptPicker infoData={`C2.forms.iptsInfo.add.obs`} />
      <IptPicker infoData={`C2.forms.iptsInfo.add.privilegeType`} />
      <IptPicker infoData={`C2.forms.iptsInfo.add.groupId`} />

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
  const groupNum = Number(item?.groupId) - 1;

  const groups = useData('baseDomains.selectedDomain.groups');
  const groupName = groups[groupNum]?.groupName;

  const condObs = !item.obs || item.obs === 'Ativo';

  const condShowDetails = condObs && item.privilegeType !== 'in';

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
          {!condShowDetails && (
            <Text style={stlItemObs}>{item.obs || 'Inativo'}</Text>
          )}
          {condShowDetails && (
            <>
              <Text>Privilégio: {item?.privilegeType}</Text>
              <Text>Grupo: {groupName}</Text>
            </>
          )}
        </View>
      )}
      {sttActive && (
        <UseCondLoader data={`C2.forms.iptsInfo.${itemId}.condShow`}>
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

      <IptTxt infoData={`C2.forms.iptsInfo.${itemId}.personName`} />
      <IptPicker infoData={`C2.forms.iptsInfo.${itemId}.obs`} />
      <IptPicker infoData={`C2.forms.iptsInfo.${itemId}.privilegeType`} />
      <IptPicker infoData={`C2.forms.iptsInfo.${itemId}.groupId`} />

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
