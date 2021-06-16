// ----------- import Packs
import { Text, View, TouchableOpacity } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../config/useMorfos';

// ----------- set Exports

export const PubItemView = ({ info }) => {
  const { arrLabels, item, findingVal, findObs, btnRegister } = info;

  return (
    <View style={{ marginBottom: 20 }} key={item.personId}>
      <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>
        {item.personName}
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            marginBottom: 5,
            fontWeight: 'bold',
            color: 'lightgray',
          }}
        >
          {item.privilegeType}
        </Text>
        {false && (
          <TouchableOpacity onPress={btnRegister}>
            <Text style={{ marginLeft: 10, fontSize: 12, color: 'blue' }}>
              Ver Registro Completo
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={{ marginBottom: 5, flexDirection: 'row' }}>
        {arrLabels.map((item2, idx) => {
          const findVal = findingVal(item2.ref);

          const condColor =
            item2.ref === 'hours' && (!findVal || findVal === 0) && '#ff9e9e';

          const txtStl: any = {
            fontSize: 15,
            color: '#555',
            backgroundColor: condColor,
          };

          return (
            <View
              style={[useStl.flexCenter, { flexDirection: 'column' }]}
              key={idx}
            >
              <Text style={txtStl}>
                {item2.label}: {findVal ?? 0} {idx !== 4 ? '• ' : ''}
              </Text>
            </View>
          );
        })}
      </View>

      {findObs && (
        <Text style={{ fontSize: 15, color: '#555' }}>{`Obs: ${findObs}`}</Text>
      )}
    </View>
  );
};

export const GroupView = ({ info }) => {
  const { groupName, btnOpen, sttOpen } = info;

  return (
    <View style={stlBODY1b}>
      <Text
        style={{
          textAlign: 'center',
          marginBottom: 15,
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        Grupo: {groupName}
      </Text>

      <TouchableOpacity onPress={btnOpen}>
        <Text style={{ textAlign: 'center', color: 'blue' }}>
          {sttOpen ? 'fechar' : 'abrir'}
        </Text>
      </TouchableOpacity>

      {info.mapPubItem}

      {sttOpen && (
        <TouchableOpacity onPress={btnOpen}>
          <Text style={{ textAlign: 'center', color: 'blue' }}>fechar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export const TitleView = ({ info }) => {
  return (
    <View style={stlContainer}>
      <Text style={stlMonthTitle}>Mês</Text>
      <Text style={stlDate}>{info.refMonthYear}</Text>
      <View style={stlBtnView}>
        {!info.dateLimitMin && (
          <TouchableOpacity style={bgBtn} onPress={info.btnDecreaseDate}>
            <Text style={textBtn}>{'<'}</Text>
          </TouchableOpacity>
        )}
        {info.dateLimitMin && (
          <View style={[bgBtn, { backgroundColor: '#eee' }]}>
            <Text style={[textBtn, { color: '#ccc' }]}>{'<'}</Text>
          </View>
        )}

        <View style={{ width: 12 }} />

        {!info.dateLimitMax && (
          <TouchableOpacity style={bgBtn} onPress={info.btnIncreaseDate}>
            <Text style={textBtn}>{'>'}</Text>
          </TouchableOpacity>
        )}
        {info.dateLimitMax && (
          <View style={[bgBtn, { backgroundColor: '#eee' }]}>
            <Text style={[textBtn, { color: '#ccc' }]}>{'>'}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export const DataCompView = ({ info }) => {
  return (
    <View style={totalsContainer}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={members}>Membros Ativos: {info.countMembers}</Text>
        <Text style={totalsTitle}>Total</Text>
        <Text style={totalsTitle}>Pub</Text>
        <Text style={totalsTitle}>Víd</Text>
        <Text style={totalsTitle}>Hrs</Text>
        <Text style={totalsTitle}>Rev</Text>
        <Text style={totalsTitle}>Est</Text>
      </View>

      {info.arrTypes.map((type, idx) => (
        <View key={idx} style={{ flexDirection: 'row' }}>
          <Text style={totalsType}>{info.totalLabels[type]}</Text>
          <Text style={totalsVal}>{info.countTotals[type].countType}</Text>
          <Text style={totalsVal}>{info.countTotals[type].publications}</Text>
          <Text style={totalsVal}>{info.countTotals[type].videos}</Text>
          <Text style={totalsVal}>{info.countTotals[type].hours}</Text>
          <Text style={totalsVal}>{info.countTotals[type].returnVisits}</Text>
          <Text style={totalsVal}>{info.countTotals[type].studies}</Text>
        </View>
      ))}

      <View style={{ flexDirection: 'row' }}>
        <Text style={totalsType}>TOTAIS:</Text>
        <Text style={totalsTitle}>{info.countTypes}</Text>
        <Text style={totalsTitle}>{info.countTotals.all.publications}</Text>
        <Text style={totalsTitle}>{info.countTotals.all.videos}</Text>
        <Text style={totalsTitle}>{info.countTotals.all.hours}</Text>
        <Text style={totalsTitle}>{info.countTotals.all.returnVisits}</Text>
        <Text style={totalsTitle}>{info.countTotals.all.studies}</Text>
      </View>
    </View>
  );
};

// ----------- set Default
export default ({
  info,
  children1 = Element || null,
  children2 = Element || null,
}) => {
  return (
    <View style={useStl.pad20}>
      <View style={stlBODY1a}>
        <View style={stlBODY1b}>
          {info.dateControl}

          {info.condLoading}

          {children1}

          <TouchableOpacity onPress={info.btnRegisters}>
            <Text
              style={{
                textAlign: 'center',
                textDecorationLine: 'underline',
                color: 'blue',
              }}
            >
              Ver os registros de todos os publicadores
            </Text>
            <Text style={{ textAlign: 'center' }}>
              Demora um pouco pra aparecer ;)
            </Text>
          </TouchableOpacity>
        </View>

        {info.TEMPBTN}

        {children2 && <View style={stlBODY1b}>{children2}</View>}
      </View>
    </View>
  );
};

// ***************************************
// #region :: STYLEs
// ---------------

const stlBODY1a: any = [useStl.cardLongBar];
const stlBODY1b: any = [useStl.card];
const totalsVal: any = [{ margin: 3, width: 35, textAlign: 'center' }];
const totalsTitle: any = [...totalsVal, { fontWeight: 'bold' }];
const totalsType: any = [
  {
    margin: 5,
    paddingRight: 5,
    width: 130,
    height: 20,
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: '#eaeaea',
    borderRadius: 4,
  },
];
const members: any = [totalsType, { color: 'gray', fontWeight: 'regular' }];

const textBtn: any = {
  fontWeight: '900',
  fontSize: 19,
  alignText: 'center',
  color: '#999',
};
const bgBtn: any = {
  backgroundColor: '#ddd',
  borderRadius: 5,
  width: 50,
  height: 30,
  alignItems: 'center',
};

const totalsContainer: any = {
  alignSelf: 'center',
  backgroundColor: '#fafafa',
  borderRadius: 5,
  borderColor: '#999',
  borderWidth: 2,
  marginBottom: 30,
};

const stlContainer: any = {
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 15,
};
const stlMonthTitle = { fontSize: 15, marginRight: 8 };
const stlDate = { fontSize: 22 };
const stlBtnView: any = {
  marginTop: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

// ---------------
// #endregion
// ***************************************
