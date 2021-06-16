// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

// ----------- import Internals
import { useData, UseIcoMoon, useStl } from '../../../config/useMorfos';
import { getMonthData } from './helpers';

// #region :: EXPORTs *********
export const NoKpiView = ({ infoData }) => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ color: '#444', fontSize: 12 }}>Nenhum kpi encontrado</Text>
    </View>
  );
};

export const Products = ({ infoData }) => {
  // ----------- set Data
  const { name } = infoData;
  const {
    monthCli,

    involvedCli,
    invCliPercent,
    invFraction,
    invMissing,
    invTotal,

    total_activities,
    actvCliPercent,
    actvFraction,
    actvMissing,
    actvTotal,

    total_opportunities,
    oppPercent,
    oppFraction,
    oppMissing,
    oppTotal,

    total_fechamentos,
    closePercent,
    closeFraction,
    closeMissing,
    closeTotal,

    month_meta,
    month_meta_perc,
    num_miss,
    num_miss_perc,
    indicie_faltante,
  } = getMonthData(name);

  // ----------- set Hooks
  const [sttToggle, setToggle] = React.useState(false);

  // ----------- set Btns & Conds
  const condIcon = sttToggle ? 'minus-square' : 'plus-square';
  const btnToggle = () => setToggle(!sttToggle);

  return (
    <View style={stlLineGoal}>
      {/* Title & Button Open */}
      <TouchableOpacity onPress={btnToggle}>
        <Text style={stlTxt02}>{name}</Text>
        <Text style={stlTxt03}>
          Atividades / Oportunidades / Clientes / Negócios
        </Text>
        <View style={stlIcoPosition}>
          <UseIcoMoon name={condIcon} size={14} color={'#666'} />
        </View>
      </TouchableOpacity>

      {/* Table Data */}
      {sttToggle && (
        <View style={stlGoals}>
          <View style={[stlLine, useStl.flexEnd]}>
            <Text style={stlTxt01}>Falta</Text>
            <Text style={stlTxt01}>Total de:</Text>
          </View>

          <View style={stlLine}>
            <Text style={[stlTitleSm2]}>Clientes Cadastrados:</Text>
            <Text style={stlTableData}>{monthCli}</Text>
            <Text style={stlTableData}>100%</Text>
            <View style={{ flex: 3 }} />
          </View>

          <View style={stlLine}>
            <Text style={[stlTitleSm2]}>Clientes Envolvidos:</Text>
            <Text style={stlTableData}>{involvedCli}</Text>
            <Text style={stlTableData}>{invCliPercent}</Text>
            <Text style={stlTableData}>{invFraction}</Text>
            <Text style={stlTableData}>{invMissing}</Text>
            <Text style={stlTableData}>{invTotal}</Text>
          </View>

          <View style={stlLine}>
            <Text style={[stlTitleSm2]}>Atividades:</Text>
            <Text style={stlTableData}>{total_activities}</Text>
            <Text style={stlTableData}>{actvCliPercent}</Text>
            <Text style={stlTableData}>{actvFraction}</Text>
            <Text style={stlTableData}>{actvMissing}</Text>
            <Text style={stlTableData}>{actvTotal}</Text>
          </View>

          <View style={stlLine}>
            <Text style={[stlTitleSm2]}>Oportunidades:</Text>
            <Text style={stlTableData}>{total_opportunities}</Text>
            <Text style={stlTableData}>{oppPercent}</Text>
            <Text style={stlTableData}>{oppFraction}</Text>
            <Text style={stlTableData}>{oppMissing}</Text>
            <Text style={stlTableData}>{oppTotal}</Text>
          </View>

          <View style={stlLine}>
            <Text style={[stlTitleSm2]}>Fechamentos:</Text>
            <Text style={stlTableData}>{total_fechamentos}</Text>
            <Text style={stlTableData}>{closePercent}</Text>
            <Text style={stlTableData}>{closeFraction}</Text>
            <Text style={stlTableData}>{closeMissing}</Text>
            <Text style={stlTableData}>{closeTotal}</Text>
          </View>

          <View style={stlLine}>
            <View style={stlFlex1}>
              <Text style={stlCloseTxt}>Meta</Text>
              <Text style={stlClosureTxt}>{month_meta}</Text>
            </View>

            <View style={stlFlex1}>
              <Text style={stlCloseTxt}>Sucesso</Text>
              <Text style={stlClosureTxt}>{month_meta_perc}</Text>
            </View>

            <View style={stlFlex3}>
              <Text style={stlCloseTxt}>Faltam</Text>
              <View style={[stlClosure, stlRow]}>
                <Text style={stlTableData}>{num_miss}</Text>
                <Text style={stlTableData}>{num_miss_perc}</Text>
              </View>
            </View>
          </View>
          <View style={stlLine}>
            <View style={stlFlex1}>
              <Text style={stlCloseTxt}>Índice Faltante</Text>
              <Text style={stlClosureTxt}>{indicie_faltante}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export const Goals = ({ infoData }) => {
  const { name, yearly, monthly, reach, missing } = infoData;

  return (
    <View style={stlLineGoal}>
      <Text>{name}</Text>
      <View style={stlRow}>
        <View style={stlFlex1}>
          <Text style={stlTitleSm}>Anual</Text>
          <Text style={stlDataView}>{yearly}</Text>
        </View>
        <View style={stlFlex1}>
          <Text style={stlTitleSm}>Mensal</Text>
          <Text style={stlDataView}>{monthly}</Text>
        </View>
        <View style={stlFlex1}>
          <Text style={stlTitleSm}>Atingido</Text>
          <Text style={stlDataView}>{reach}</Text>
        </View>
        <View style={stlFlex1}>
          <Text style={stlTitleSm}>Faltante</Text>
          <Text style={stlDataView}>{missing}</Text>
        </View>
      </View>
    </View>
  );
};

export const Period = ({ infoData }) => {
  // ----------- set Data
  const { LoopGoals, LoopMontGoals, itemId } = infoData;

  // ----------- set Hooks
  const [sttToggle, setToggle] = React.useState(false);

  // ----------- set Conds & Return
  const year = itemId === 'year';
  const info = { sttToggle, setToggle, itemId };
  const compA = <Year infoData={{ ...info, LoopGoals }} />;
  const compB = <Month infoData={{ ...info, LoopMontGoals }} />;

  const condReturn = year ? compA : compB;
  return condReturn;
};

export const Year = ({ infoData }) => {
  // ----------- set Data
  const { LoopGoals, itemId, sttToggle, setToggle } = infoData;
  const selYear = useData('D5.forms.iptsChanges.year');
  const currYear = useData('D5.currYear');
  const kpi = currYear?.kpi;
  const clients = currYear?.clients;
  const activities = currYear?.activities;
  const opportunities = currYear?.opportunities;

  const filterInvCli = () => {
    let arr = [];
    clients &&
      clients.map(client => {
        activities.find(act => act.clientId === client.docId) &&
          arr.push(client);
      });
    return arr;
  };

  // --- set Table Data
  const fechamentos = [];
  const totalCli = clients?.length;
  const involvedCli = filterInvCli();
  const yearlyMeta = kpi?.total?.anual;
  const missingIdx =
    Number(fechamentos?.length) === 0
      ? 0
      : Number(
          Math.round(
            (Number(kpi.total.anual) / Number(fechamentos.length)) * 100,
          ) - 100,
        ) / 100; // Antigo Indice_Faltante

  // --- set Involved (Envolvidos)
  const invData1 = (par1, par2) => {
    return `${par1 === 0 ? 0 : Math.round((par2?.length / par1) * 100)}%`;
  };
  const invData2 = (par1, par2) => {
    return `1/${
      Number(par2.length) === 0 ? 0 : Math.round(par1 / par2.length)
    }`;
  };
  // --- set Col Data
  const colData1 = (par1, par2) => {
    return `${
      Number(par1.length) === 0
        ? 0
        : Math.round((Number(par2.length) / Number(par1.length)) * 100)
    }%`;
  };
  const colData2 = (par1, par2) => {
    return `${
      Number(par1.length) === 0
        ? 0
        : Math.round(Number(par2.length) / Number(par1.length))
    }/1`;
  };
  const colData3 = (par1, par2) => {
    return Number(Number(par1.length) * Number(par2)).toFixed(2);
  };
  const colData4 = (par1, par2) => {
    return Number(
      Number(par1.length) * Number(par2) + Number(par1.length),
    ).toFixed(2);
  };
  const success = `${Math.round(
    (Number(fechamentos.length) / Number(yearlyMeta)) * 100,
  )}%`;
  const missing = Number(yearlyMeta) - Number(fechamentos.length);
  const missingPerc = `${
    Math.round((Number(fechamentos.length) / Number(yearlyMeta)) * 100) - 100
  }%`;

  // ----------- set Btns & Conds
  const condIcon = sttToggle ? 'minus-square' : 'plus-square';
  const btnToggle = () => setToggle(!sttToggle);
  const yearLabel = selYear ?? '...';

  return (
    <View style={stlCard}>
      {/* Title Card & Btn Open */}
      <TouchableOpacity style={stlCloseCard} onPress={btnToggle}>
        <Text>{`Metas de ${yearLabel}`}</Text>
        <View>
          <UseIcoMoon name={condIcon} size={22} color={'#333'} />
        </View>
      </TouchableOpacity>

      {/* Goals */}
      {sttToggle && (
        <View style={stlGoals}>
          <LoopGoals />
          <View style={[stlLine, useStl.flexEnd]}>
            <Text style={stlTxt01}>Falta</Text>
            <Text style={stlTxt01}>Total de:</Text>
          </View>

          <View style={stlLine}>
            <Text style={[stlTitleSm2]}>Clientes Cadastrados:</Text>
            <Text style={stlTableData}>{totalCli}</Text>
            <Text style={stlTableData}>100%</Text>
            <View style={{ flex: 3 }} />
          </View>

          <View style={stlLine}>
            <Text style={[stlTitleSm2]}>Clientes Envolvidos:</Text>
            <Text style={stlTableData}>{involvedCli.length}</Text>
            <Text style={stlTableData}>{invData1(totalCli, involvedCli)}</Text>
            <Text style={stlTableData}>{invData2(totalCli, involvedCli)}</Text>
            <Text style={stlTableData}>
              {colData3(involvedCli, missingIdx)}
            </Text>
            <Text style={stlTableData}>
              {colData4(involvedCli, missingIdx)}
            </Text>
          </View>

          <View style={stlLine}>
            <Text style={[stlTitleSm2]}>Atividades:</Text>
            <Text style={stlTableData}>{activities.length}</Text>
            <Text style={stlTableData}>
              {colData1(involvedCli, activities)}
            </Text>
            <Text style={stlTableData}>
              {colData2(involvedCli, activities)}
            </Text>
            <Text style={stlTableData}>{colData3(activities, missingIdx)}</Text>
            <Text style={stlTableData}>{colData4(activities, missingIdx)}</Text>
          </View>

          <View style={stlLine}>
            <Text style={[stlTitleSm2]}>Oportunidades:</Text>
            <Text style={stlTableData}>{opportunities.length}</Text>
            <Text style={stlTableData}>
              {colData1(activities, opportunities)}
            </Text>
            <Text style={stlTableData}>
              {colData2(activities, opportunities)}
            </Text>
            <Text style={stlTableData}>
              {colData3(opportunities, missingIdx)}
            </Text>
            <Text style={stlTableData}>
              {colData4(opportunities, missingIdx)}
            </Text>
          </View>

          <View style={stlLine}>
            <Text style={[stlTitleSm2]}>Fechamentos:</Text>
            <Text style={stlTableData}>{fechamentos.length}</Text>
            <Text style={stlTableData}>
              {colData1(opportunities, fechamentos)}
            </Text>
            <Text style={stlTableData}>
              {colData2(opportunities, fechamentos)}
            </Text>
            <Text style={stlTableData}>
              {colData3(fechamentos, missingIdx)}
            </Text>
            <Text style={stlTableData}>
              {colData4(fechamentos, missingIdx)}
            </Text>
          </View>

          <View style={stlLine}>
            <View style={stlFlex1}>
              <Text style={stlCloseTxt}>Meta</Text>
              <Text style={stlClosureTxt}>{yearlyMeta}</Text>
            </View>

            <View style={stlFlex1}>
              <Text style={stlCloseTxt}>Sucesso</Text>
              <Text style={stlClosureTxt}>{success}</Text>
            </View>

            <View style={stlFlex3}>
              <Text style={stlCloseTxt}>Faltam</Text>
              <View style={[stlClosure, stlRow]}>
                <Text style={stlTableData}>{missing}</Text>
                <Text style={stlTableData}>{missingPerc}</Text>
              </View>
            </View>
          </View>
          <View style={stlLine}>
            <View style={stlFlex1}>
              <Text style={stlCloseTxt}>Índice Faltante</Text>
              <Text style={stlClosureTxt}>{`${missingIdx}%`}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export const Month = ({ infoData }) => {
  // ----------- set Data
  const { sttToggle, setToggle, LoopMontGoals } = infoData;
  const currYear = useData('D5.forms.iptsChanges.year');
  const currMonth = useData('D5.forms.iptsChanges.month');
  const listMonth = useData('D5.listMonth');

  // ----------- set Btns & Conds
  const condIcon = sttToggle ? 'minus-square' : 'plus-square';
  const btnToggle = () => setToggle(!sttToggle);
  const yearLabel = currYear ?? '...';
  const monthLabel = listMonth[currMonth].label ?? '...';

  return (
    <View style={stlCard}>
      {/* Title Card */}
      <TouchableOpacity style={stlCloseCard} onPress={btnToggle}>
        <Text>{`${monthLabel} / ${yearLabel}`}</Text>
        <View>
          <UseIcoMoon name={condIcon} size={22} color={'#333'} />
        </View>
      </TouchableOpacity>

      {/* Goals */}
      {sttToggle && (
        <View style={stlGoals}>
          <LoopMontGoals />
        </View>
      )}
    </View>
  );
};
// #endregion *********

export default ({ info, children }) => {
  return (
    <View style={stlBodyView}>
      <ScrollView>
        <View style={stlPickerBox}>
          <View style={[stlViewPicker]}>
            <info.LoopPickerYear stlPicker={stlPicker} />
          </View>
          <View style={[stlViewPicker]}>
            <info.LoopPickerMonth stlPicker={stlPicker} />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          {/* Goals List */}
          {children}
        </View>
      </ScrollView>
    </View>
  );
};

// #region :: STYLEs *********

// ----------- set Utils
const stlFlex1 = [useStl.flex1];
const stlFlex3 = [useStl.flex3];
const stlBodyView = [...stlFlex1];
const stlBorder = [useStl.border(0, 0, 1, 0, '#ddd')];
const stlCard = [
  useStl.card,
  { padding: 0, marginHorizontal: 20, overflow: 'hidden' },
];
const stlRow = [useStl.flexRow];
const stlCloseCard = [stlRow, useStl.flexBetween, { padding: 10 }];
const stlPickerBox = [
  stlRow,
  { backgroundColor: '#fff', padding: 10, borderRadius: 8 },
];
const stlViewPicker = [
  useStl.input,
  { flex: 1, marginBottom: -20, marginLeft: 10 },
];
const stlPicker = [{ borderWidth: 0, height: 20 }];
const stlIcoPosition = [{ position: 'absolute', top: 6, right: 13 }];

// ----------- set Views
const stlGoals = [{ backgroundColor: '#F6F6F6' }];
const stlDataView = [
  useStl.input,
  { fontSize: 10, color: '#666', padding: 5, marginRight: 3 },
];

// ----------- set Lines
const stlLine = [...stlBorder, stlRow, { padding: 10 }];
const stlLineGoal = [
  ...stlBorder,
  {
    backgroundColor: '#F6F6F6',
    padding: 10,
  },
];

// ----------- set Texts
const stlTitleSm = [{ fontSize: 10, color: '#666' }];
const stlTitleSm2 = [{ width: 90, fontSize: 10, color: '#666' }];
const stlTableData = [...stlTitleSm, { flex: 1, textAlign: 'center' }];
const stlTxt01 = [
  { fontWeight: 'bold', fontSize: 10, color: '#333333', marginRight: 10 },
];
const stlTxt02 = [{ textAlign: 'center' }];
const stlTxt03 = [{ textAlign: 'center', fontSize: 11, color: '#444' }];
const stlCloseTxt = [stlTxt01, { textAlign: 'center' }];

const stlClosure = [
  ...stlTableData,
  { backgroundColor: '#ccc', marginRight: 3, paddingVertical: 5 },
];
const stlClosureTxt = [stlClosure, { textAlign: 'center' }];

// #endregion *********
