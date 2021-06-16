// ---------- import Packs
import { View, Text } from 'react-native';

// ---------- import Internals
// import { useStl } from '../../../config/useMorfos';

export default ({ info }) => {
  const { year1, year2, infoPerson } = info;

  const mockObj = { reportsRef: {} };

  const condYear1 = year1 ?? mockObj;
  const condYear2 = year2 ?? mockObj;

  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <View style={stl.container}>
        <View style={stl.title.view}>
          <Text style={stl.title.txt}>
            REGISTRO DE PUBLICADOR DE CONGREGAÇÃO
          </Text>
        </View>
        <DataView info={infoPerson} />

        <View style={{ width: 750 }}>
          <TbYear year={'2020'} info={condYear1} />
          <TbYear year={'2021'} info={condYear2} />
        </View>
      </View>
      <View style={stlBottom} />
    </View>
  );
};

// const ViewRegister = ({ info }) => {
//   const { returnData, YearData } = info;

//   return (
//     <View style={{ alignItems: 'center' }}>
//       <View style={stl.container}>
//         <View style={stl.title.view}>
//           <Text style={stl.title.txt}>
//             REGISTRO DE PUBLICADOR DE CONGREGAÇÃO
//           </Text>
//         </View>

//         <DataView info={returnData} />

//         <View style={{ width: 750 }}>
//           <YearData />
//         </View>
//       </View>
//     </View>
//   );
// };

// export const old_default = ({ info }) => {
//   // ---------- set Hooks
//   const selectedPubId = useSelector(
//     state => state.rdSelectedDomain.selectedPub.personId,
//   );
//   const condYearReport = useSelector(state => {
//     const reports = state.rdSelectedDomain.reportsData;

//     const condRangeMonth =
//       reports && reports['4/2020'] && reports['6/2020'] && true;

//     return condRangeMonth;
//   });
//   const [sttTeste, setTeste] = useState(condYearReport);

//   const personRef = useSelector(state => {
//     const X1 = state.rdSelectedDomain.people;
//     const X2 = X1.find(item => item.personId === selectedPubId);
//     return X2;
//   });

//   const reportsDb = useSelector(state => {
//     const X1 = state.rdSelectedDomain.reportsData;
//     let reportsRef = {};

//     Object.values(X1).map(item => {
//       const X3 = item.reportGroups;
//       const X4 = Object.values(X3).flatMap(item => item);
//       const X5 = X4.find(item => personRef.personId === selectedPubId);
//       const splitExp = item.refMonthYear.split('/');
//       const n = n => (n > 9 ? '' + n : '0' + n);
//       const reportId = `${splitExp[1]}_${n(splitExp[0])}`;

//       const {
//         publications,
//         videos,
//         hours,
//         returnVisits,
//         studies,
//         observations,
//       } = X5.report;

//       reportsRef[reportId] = {
//         privilegeType: X5.privilegeType,
//         publications,
//         videos,
//         hours,
//         returnVisits,
//         studies,
//         observations,
//       };

//       return '';
//     });

//     return reportsRef;
//   });

//   // ---------- set Return
//   const returnData = { personRef };

//   const CallData = () => {
//     const { callRead } = useCRUD();
//     const domainDoc = useSelector(state => state.rdSelectedDomain.docId);

//     callRead('readPubReports', { domainDoc, selectedPubId });

//     setTeste(true);

//     return UseLoader({ size: 30 });
//   };

//   const YearData = () => {
//     const returnReports = { reportsRef: reportsDb };
//     const noData = () => CallData();
//     const withData = () => <TbYear year={'2020'} info={returnReports} />;
//     const condReturn = sttTeste ? withData() : noData();
//     return condReturn;
//   };

//   // ---------- set Info Return
//   const infoRegister = { returnData, YearData };

//   // ---------- set Return
//   return <ViewRegister info={infoRegister} />;
// };

const DataCheck = ({ label, value, flex = 2.1 }) => {
  return (
    <View style={stlDtCkView}>
      <View style={stl.data.check.square}>
        {value && <View style={stl.data.check.selected} />}
      </View>
      <Text style={stl.data.field}> {label} </Text>
    </View>
  );
};

const DataView = ({ info }) => {
  const { personRef } = info;
  const { birth, baptism, genre, hope, elder, ministerialSv, regularPion } =
    personRef.personalData ?? false;

  const condMasc = genre === 'm';
  const condFem = genre === 'f';

  const condEarth = hope === 'oo';
  const condHeaven = hope === 'un';

  return (
    <View style={stl.data.view}>
      <View style={stl.data.line}>
        <Text style={stl.data.field}>Nome:</Text>
        <Text style={stl.data.txt}>{personRef.personName}</Text>
      </View>

      <View style={stl.data.line}>
        <View style={{ flexDirection: 'row', flex: 4 }}>
          <Text style={stl.data.field}>Data de nascimento:</Text>
          <Text style={stl.data.txt}>{birth}</Text>
        </View>

        <DataCheck label={'Masculino'} value={condMasc} />
        <DataCheck label={'Feminino'} value={condFem} />
      </View>

      <View style={stl.data.line}>
        <View style={{ flexDirection: 'row', flex: 4 }}>
          <Text style={stl.data.field}>Data de batismo:</Text>
          <Text style={stl.data.txt}>{baptism}</Text>
        </View>

        <DataCheck label={'Outras ovelhas'} value={condEarth} />
        <DataCheck label={'Ungido'} value={condHeaven} />
      </View>

      <View style={stl.data.line}>
        <View style={{ flex: 4, alignItems: 'flex-end' }}>
          <DataCheck label={'Ancião'} value={elder} />
        </View>

        <DataCheck label={'Servo ministerial'} value={ministerialSv} />
        <DataCheck label={'Pioneiro regular'} value={regularPion} />
      </View>
    </View>
  );
};

const LineTb = ({ info }) => {
  const columns = {
    1: 'publications',
    2: 'videos',
    3: 'hours',
    4: 'returnVisits',
    5: 'studies',
  };

  const textObs = info?.reports?.['observations'];
  const condObs = textObs === 0 || textObs === `0` ? '' : textObs;

  return (
    <View style={stl.table.line.all}>
      <View style={[stl.table.box.boxColA]}>
        <Text style={stl.table.text.month}>{info.name}</Text>
      </View>

      {[1, 2, 3, 4, 5].map((item, idx) => {
        const stlExp = `boxNum${item}`;
        const stlSelect = stl.table.box[stlExp];
        const selectField = columns[item];
        const condSelector = info?.reports?.[selectField];
        const condZero =
          condSelector !== 0 && condSelector !== '-' ? condSelector : 0;
        return (
          <View key={idx} style={stlSelect}>
            <Text style={stl.txtBase}>{condZero}</Text>
          </View>
        );
      })}
      <View style={[stl.table.box.boxColC]}>
        <Text style={stl.table.text.obs}>{condObs}</Text>
      </View>
    </View>
  );
};

const TbYear = ({ year, info }) => {
  const yearBefore = year - 1;
  const splitYearBf = yearBefore.toString().slice(-2);
  const splitYear = year.toString().slice(-2);

  const yearRef = `${year}`;
  const monthYear = [
    { id: `${year - 1}_09`, name: `Setembro/${splitYearBf}` },
    { id: `${year - 1}_10`, name: 'Outubro' },
    { id: `${year - 1}_11`, name: 'Novembro' },
    { id: `${year - 1}_12`, name: 'Dezembro' },
    { id: `${year}_01`, name: `Janeiro/${splitYear}` },
    { id: `${year}_02`, name: 'Fevereiro' },
    { id: `${year}_03`, name: 'Março' },
    { id: `${year}_04`, name: 'Abril' },
    { id: `${year}_05`, name: 'Maio' },
    { id: `${year}_06`, name: 'Junho' },
    { id: `${year}_07`, name: 'Julho' },
    { id: `${year}_08`, name: 'Agosto' },
  ];

  return (
    <View style={stl.table.view}>
      <View style={[stl.table.line.all, stl.table.line.title]}>
        <View style={[stl.table.box.boxColA]}>
          <Text style={stl.table.title}>Ano de Serviço {yearRef}</Text>
        </View>
        {[
          'Publicações',
          'Vídeos mostrados',
          'Horas',
          'Revisitas',
          'Estudos bíblicos',
        ].map((item, idx) => {
          const stlExp = `boxNum${idx + 1}`;
          const stlSelect = stl.table.box[stlExp];
          return (
            <View key={item} style={[stlSelect]}>
              <Text style={stl.table.title}>{item}</Text>
            </View>
          );
        })}

        <View style={[stl.table.box.boxColC]}>
          <Text style={stl.table.title}>Observações</Text>
        </View>
      </View>

      {monthYear.map((item, idx) => {
        const infoReturn = {
          name: item.name,
          reports: info.reportsRef[item.id],
        };

        return <LineTb key={item.id} info={infoReturn} />;
      })}

      {['Total', 'Média'].map((item1, idx) => {
        const columns = {
          1: 'publications',
          2: 'videos',
          3: 'hours',
          4: 'returnVisits',
          5: 'studies',
        };

        return (
          <View key={idx} style={stl.table.line.all}>
            <View style={[stl.table.box.boxColA]}>
              <Text style={stl.table.text.totals}>{item1}</Text>
            </View>

            {[1, 2, 3, 4, 5].map((item, idx) => {
              const stlExp = `boxNum${idx + 1}`;
              const stlSelect = stl.table.box[stlExp];

              const selectField = columns[item];

              // const eachMonth = monthYear.map((item, idx2) => {
              const eachMonth = monthYear
                .map((item, idx2) => {
                  const condSelector = info.reportsRef[item.id];
                  const toCount = condSelector?.[selectField];
                  return toCount;
                })
                .filter(item => item || item === 0);

              const sumTotal = () =>
                eachMonth.reduce((a, b) => Number(a) + Number(b), 0);
              const avgTotal = () =>
                Math.round(sumTotal() / eachMonth.length) || 0;

              const condTotals = item1 === 'Total' ? sumTotal() : avgTotal();

              return (
                <View key={idx} style={stlSelect}>
                  <Text style={stl.table.text.sums}>{condTotals}</Text>
                </View>
              );
            })}

            <View style={[stl.table.box.boxColC]} />
          </View>
        );
      })}
    </View>
  );
};

// ***************************************
// #region :: STYLEs
// ---------------

const stlBottom = { height: '8.3px', width: '100%' };

const stlDtCkView: any = { flexDirection: 'row', flex: 1 };

const preStl = {
  bgA: {
    backgroundColor: 'gray',
  },
  bgB: {
    backgroundColor: 'dimgray',
  },
  border: {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'black',
  },
  squareSize: {
    width: '50px',
  },

  baseBox: {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'black',
    padding: '5px',

    justifyContent: 'center', //de acordo com a direção.
    textAlign: 'center', // Horizontal
  },

  txtBase: {
    fontSize: '15px',
    fontFamily: 'Eczar',
    letterSpacing: '1px',
    // fontFamily: 'Cambria',
  },
};

const stl: any = {
  container: {
    display: 'flex',
    // flex,
    flexDirection: 'column',
    maxWidth: '750px',
  },

  // - - - -

  title: {
    view: {
      marginTop: 10,
      height: '30px',
      justifyContent: 'center', //de acordo com a direção.
      // ...preStl.bgA,
    },
    txt: {
      ...preStl.txtBase,
      textAlign: 'center', // Horizontal
      fontSize: '22px',
      fontWeight: '700',
    },
  },

  // - - - -

  data: {
    view: {
      paddingTop: 15,
      paddingBottom: 15,
      // width: 'auto',
      // height: '50px',
      // ...preStl.bgB,
    },
    line: {
      flexDirection: 'row',
      margin: 5,
      alignItems: 'bottom',
      marginTop: -2,
      marginBottom: -2,
      // width: 'auto',
      // height: '50px',
      // ...preStl.bgB,
    },
    field: {
      ...preStl.txtBase,
      fontWeight: '800',
    },
    txt: {
      ...preStl.txtBase,
      marginLeft: 5,
      fontFamily: 'sans-serif',
      fontSize: '20px',
      fontWeight: '500',
    },
    check: {
      square: {
        marginRight: 2,
        height: '18px',
        width: '18px',
        ...preStl.border,
        borderWidth: '2px',
        alignItems: 'center',
        justifyContent: 'center',
      },
      selected: {
        height: '8px',
        width: '8px',
        backgroundColor: 'black',
      },
    },
  },

  // - - - -

  table: {
    view: {
      ...preStl.border,
      marginBottom: 25,
    },
    title: {
      ...preStl.txtBase,
      fontSize: '14px',
      fontWeight: '700',
      lineHeight: '15px',
      // margin:1,

      textAlign: 'center',
    },
    line: {
      title: {
        height: '40px',
      },
      all: {
        // flex:1,
        // width: 'auto',
        // height: 'auto',
        height: '29px',
        flexDirection: 'row',
      },
    },
    text: {
      month: {
        ...preStl.txtBase,
        fontSize: '18px',
      },
      totals: {
        ...preStl.txtBase,
        fontSize: '18px',
        fontWeight: '500',
      },
      obs: {
        ...preStl.txtBase,
        lineHeight: 13,
        fontSize: 12,
        letterSpacing: 0,
      },
      sums: {
        ...preStl.txtBase,
        fontSize: 14,
        fontWeight: 600,
      },
    },
    box: {
      boxColA: {
        width: '125px',
        ...preStl.baseBox,
        textAlign: 'left', // Horizontal
      },

      boxNums: {
        width: '110px',
        ...preStl.baseBox,
      },
      boxNum1: {
        width: '110px',
        ...preStl.baseBox,
      },
      boxNum2: {
        width: '100px',
        ...preStl.baseBox,
      },
      boxNum3: {
        width: '70px',
        ...preStl.baseBox,
      },
      boxNum4: {
        width: '95px',
        ...preStl.baseBox,
      },
      boxNum5: {
        width: '80px',
        ...preStl.baseBox,
      },

      boxColC: {
        width: '170px',
        ...preStl.baseBox,
        display: '-webkit-box',
        lineHeight: '0px',
        paddingTop: 2,

        WebkitLineClamp: 2,
        overflow: 'hidden',
      },
    },
  },

  // - - - -

  footerView: {
    width: 'auto',

    height: '30px',
  },
};

// ---------------
// #endregion
// ***************************************
