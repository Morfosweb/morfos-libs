// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';

// ----------- import Internal
import {
  useData,
  UseIcoMoon,
  useRouter,
  useStl,
} from '../../../config/useMorfos';
import { currencyMask } from '../../../config/useMorfos/utils';

const badge1 = require('../../images/part_badge1.png');
const badge2 = require('../../images/part_badge2.png');

interface Info {
  infoData: {
    itemId: string;
    itemsInfo: string;
  };
}

export default ({ infoData }: Info) => {
  // ----------- set Params
  const { itemId, itemsInfo } = infoData;

  // ----------- set Data
  const item = useData(itemsInfo, itemId);

  // ----------- set Others
  const units = `Unidades ${item.amount_opportunity}`;
  const prod = `Produto: ${item.opportunity_products}`;
  const category = item.opportunity_products_category;

  // ---------- set Value
  const condValue = typeof item.unit_value_opportunity === 'number';
  const currValue = currencyMask(item.unit_value_opportunity, true);
  const condValueExp = condValue ? currValue : item.unit_value_opportunity;
  const value = `Valor Unitário: R$: ${condValueExp}`;

  const condTotal = typeof item.total_amount_opportunity === 'number';
  const currTotal = currencyMask(item.total_amount_opportunity, false);
  const condTotalExp = condTotal ? currTotal : item.total_amount_opportunity;
  const total = `Total R$: ${condTotalExp}`;

  const expression = `${units} / ${prod} / ${category} / ${value} / ${total}`;

  // ----------- set Hooks
  const dispatch = useDispatch();

  // ----------- set Router
  const btnGoToItem = () =>
    dispatch({ type: 'C1_GoToActProfile', value: { clientId: itemId } });

  return (
    <>
      <View style={stlView07RESULT}>
        <Star style={stl07STAR} itemId={itemId} />
        <Hands info={item.options_probabilidadeVenda} />
        <TouchableOpacity style={stl03RESULT} onPress={btnGoToItem}>
          <Text style={stl04RESULT}>{item.user.nomeDaEmpresa}</Text>
          <Text style={stl05RESULT}>{expression}</Text>
        </TouchableOpacity>

        <View style={stl06RESULT}>
          <UseIcoMoon name="chevron-right" size={28} color={'#2A576B'} />
        </View>
      </View>
      <LineOptions info={item.status} />
    </>
  );
};

const Star = ({ style, itemId }) => {
  const itemSel = `B1.opportunities.itemsInfo.${itemId}`;
  const itemPath = itemSel + '.options_probabilidadeVenda_starred';
  const oppStarred = useData(itemPath);
  const [cond, setCond] = React.useState(oppStarred);
  return (
    <TouchableOpacity
      style={[style, cond ? stlView05STAR : stlView06STAR]}
      onPress={() => setCond(!cond)}
    >
      <Image style={stlImg01STAR} source={badge1} />
      <UseIcoMoon name="star" size={20} color={cond ? '#eee' : '#b5b5b5'} />
      <Image style={stlImg02STAR} source={badge2} />
    </TouchableOpacity>
  );
};

const Hands = ({ info }) => {
  const condInfo = info !== 'Baixa';
  const [condHand, setCondHand] = React.useState(condInfo);

  return (
    <View style={stl09RESULT}>
      <View style={stl10RESULT}>
        <TouchableOpacity
          style={stl08RESULT}
          onPress={() => setCondHand(!condHand)}
        >
          <UseIcoMoon
            name="hand"
            size={55}
            color={condHand ? '#008833' : '#c4c4c4'}
          />
          <UseIcoMoon
            name="hand-down"
            size={55}
            color={!condHand ? '#FF9800' : '#c4c4c4'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LineOptions = ({ info }) => {
  const status_num = Number(info);

  const [statusNum, setStatusNum] = React.useState(status_num);

  const condZero = statusNum === 0;
  const condOne = statusNum === 1;
  const condTwo = statusNum === 2;
  const condThree = statusNum === 3;

  return (
    <View style={stl11RESULT}>
      <View style={stl12RESULT}>
        <TouchableOpacity style={stl08RESULT} onPress={() => setStatusNum(0)}>
          <UseIcoMoon
            name="lost"
            size={32}
            color={condZero ? '#eb3434' : '#b5b5b5'}
          />
        </TouchableOpacity>
      </View>
      <View style={stl13RESULT}>
        <View style={stl14RESULT}>
          <TouchableOpacity style={stl08RESULT} onPress={() => setStatusNum(1)}>
            <UseIcoMoon
              name="target"
              size={32}
              color={condOne ? '#30bfb1' : '#b5b5b5'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={stl08RESULT} onPress={() => setStatusNum(2)}>
            <UseIcoMoon
              name="question"
              size={32}
              color={condTwo ? '#f5de14' : '#b5b5b5'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStatusNum(3)}>
            <UseIcoMoon
              name="contract"
              size={32}
              color={condThree ? '#14a800' : '#b5b5b5'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// #region :: STYLEs *********

// ---------- RESULT

const stl02RESULT = [{ position: 'absolute', left: 10, top: 11 }];
const stl03RESULT = [useStl.flex2, { paddingLeft: 75 }];
const stl04RESULT = [useStl.txTitleCard];
const stl05RESULT = [useStl.txSubTitleCard, { marginTop: -3 }];
const stl06RESULT = [{ marginRight: -10 }];
const stlView07RESULT = [
  useStl.cardTopRadius,
  useStl.flexRow,
  useStl.flexBetween,
  { height: 130 },
];

const stl08RESULT = {
  width: 30,
  height: 30,
};

const stl09RESULT = [stl02RESULT, { zIndex: 6 }];

const stl10RESULT = [{ position: 'absolute', left: 10, top: -5 }];

const stl11RESULT = [
  {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    backgroundColor: '#fff',
    zIndex: -1,
    height: 55,
    width: '100%',
    position: 'relative',
    bottom: 20,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: 'row',
  },
];

const stl12RESULT = [
  {
    width: '15%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
];

const stl13RESULT = {
  width: '85%',
  height: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

const stl14RESULT = {
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: '100%',
  alignItems: 'center',
};

// ---------- STAR

const stlImg01STAR = [
  { width: 40, height: 40, position: 'absolute', bottom: -13 },
];
const stlImg02STAR = [
  { width: 6, height: 6, position: 'absolute', top: 0, left: -6 },
];
const stlView05STAR = [
  // <<<<<CARLOS : Label da estrela está encaixando com oportunidades que tem um height maior q o padrão
  {
    alignItems: 'center',
    // overflow: 'hidden',
    justifyContent: 'flex-end',
    paddingBottom: 26,
    backgroundColor: '#2a576b',
    width: 30,
    height: 84,
    position: 'absolute',
    top: -6,
    right: 40,
  },
];

const stlView06STAR = [
  {
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'flex-end',
    paddingBottom: 26,
    width: 30,
    height: 84,
    position: 'absolute',
    top: -6,
    right: 40,
  },
];

const stl07STAR = { zIndex: 6 };

// #endregion *********
