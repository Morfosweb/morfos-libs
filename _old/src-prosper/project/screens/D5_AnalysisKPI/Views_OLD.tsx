// ----------- import Packs
import React from 'react';
import {
  Picker,
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  ScrollView,
  TextInput,
} from 'react-native';

// ----------- import Internals
import { UseIcoMoon, useStl } from '../../../config/useMorfos';
import { IptImg, IptPicker, IptTxt } from '../../comps';

// ------------------------------
// #endregion

export default ({ info }) => {
  return (
    <View style={stlBodyView}>
      <View style={StlCalen}>
        <View style={[stl02]}>
          <Text>2020</Text>
          <Picker
            style={stlPicker01}
            // values={values}
            // handleTextChange={handleTextChange}
            // onValueChange={(item) => selectYearKpi(item)}
            // content={{
            //   name: 'year_kpi',
            //   values: year_kpi ? listYear.sort(year => year === year_kpi ? -1 : 1) : listYear
            // }}
            // onValueChange={(itemValue, itemIndex) => {
            //   handleTextChange(itemValue, 'year_kpi')

            // }}
          />
        </View>

        <View style={stl02}>
          <Text>Dezembro</Text>
          <Picker
            style={stlPicker01}
            // values={values}
            // handleTextChange={handleTextChange}
            // onValueChange={(item) => {
            //   keepYPosition();
            //   selectMonthKpi(item);
            // }}
            // content={{
            //   name: 'month_kpi',
            //   values: month_kpi ? listMonth.sort(month => month === month_kpi ? -1 : 1) : listMonth
            // }}
            // onValueChange={(itemValue, itemIndex) => {
            //   handleTextChange(itemValue, 'year_kpi')

            // }}
          />
        </View>
      </View>

      {/* <_STYLE> */}
      {/* <form
        renderProps={({ values, handleTextChange, handleChangeState }) => (
          <>
            <View style={stl01STYLE}>
              <SELECTYEAR values={values} handleTextChange={handleTextChange} />
              <SELECTMONTH
                values={values}
                handleChangeState={handleChangeState}
              />
            </View>
            {rdTeste && <Text>{rdTeste}</Text>}
            {getManyListPending === true ? (
              <UseLoader />
            ) : (
              kpi_query && (
                <>
                  <GOALS
                    values={values}
                    handleChangeState={handleChangeState}
                  />
                  {kpi_query && kpi_query.kpi && kpi_query.kpi[0] && (
                    <>
                      {month_kpi && (
                        <MONTHS
                          values={values}
                          handleChangeState={handleChangeState}
                        />
                      )}
                    </>
                  )}
                </>
              )
            )}
          </>
        )}
      /> */}
      {/* </_STYLE> */}

      {/* <View style={stl02STYLE}> */}
      {/* <UsePicker
          style={stlPicker01}
          values={values}
          handleTextChange={handleTextChange}
          onValueChange={item => {
            keepYPosition();
            selectMonthKpi(item);
          }}
          content={{
            name: 'month_kpi',
            values: month_kpi
              ? listMonth.sort(month => (month === month_kpi ? -1 : 1))
              : listMonth,
          }}
          // onValueChange={(itemValue, itemIndex) => {
          //   handleTextChange(itemValue, 'year_kpi')

          // }}
        /> */}
      {/* </View> */}
      <View style={stlView06STYLE}>
        <TouchableOpacity
        // onPress={() => {
        //   handleChangeState(
        //     values.month_toggle === undefined ? false : !values.month_toggle,
        //     'month_toggle',
        //   );
        // }}
        >
          <View style={stlView07STYLE}>
            <Text style={stlTxt02STYLE}>Metas de 2020</Text>
            {/* {`${month_kpi} / ${year_kpi}`} */}
            <UseIcoMoon name={'square'} size={22} color={'#333'} />
          </View>
        </TouchableOpacity>
        {/* {values.month_toggle === false ? (
          <></>
         ) : ( */}
        <View style={stlView07aSTYLE}>
          {/* {kpi_query &&
              kpi_query.kpi &&
              kpi_query.kpi[0] &&
              [{ productName: 'Total' }, ...kpi_query.kpi[0].products].map(
                product => {
                  return (
                    <ITEM_TOGGLE
                      productName={product.productName}
                      values={values}
                      handleChangeState={handleChangeState}
                    />
                  );
                },
              )} */}
          {/* COMENTADO PARA EFEITOS DE DESENVOLVIMENTO */}
          {/* <ITEM_CLOSED />
                  <ITEM_CLOSED />
                  <ITEM_CLOSED /> */}
        </View>
        {/* )} */}
      </View>

      <View style={stlView17STYLE}>
        <View style={stlView18STYLE}>
          {/* MODO DE CRIAÇÃO DE META */}
          <Text style={stlTxt13SSTYLE}>Linha VM</Text>
          {/* {productName} */}
          <View style={stlView19STYLE}>
            {/* {kpi_query && kpi_query.kpi && kpi_query.kpi.length > 0 ? ( */}
            <>
              {/* =================== MODO LISTANDO INFORMAÇÕES DO BANCO =================== */}
              <View>
                <Text style={stlTxt14SSTYLE}>Anual</Text>
                <TextInput
                  style={stlTxtInput01STYLE}
                  // defaultValue={anual}
                  editable={false}
                  keyboardType={'numeric'}
                />
              </View>
              <View>
                <Text style={stlTxt14SSTYLE}>Mensal</Text>
                <Text style={stlTxtInput02STYLE}>25</Text>
                {/* {valueMensal} */}
              </View>
              <View>
                <Text style={stlTxt14SSTYLE}>Atingido</Text>
                <View style={stlView20STYLE}>
                  <Text style={stlTxtInput02STYLE}>
                    83
                    {/* {valueMensalAtingido} */}
                  </Text>
                  <Text style={stlTxt15SSTYLE}>
                    {/* {valueMensalAtingidoPercentual &&
                        `${valueMensalAtingidoPercentual}%`} */}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={stlTxt14SSTYLE}>Faltante</Text>
                <View style={stlView21STYLE}>
                  <Text style={stlTxtInput02STYLE}>45</Text>
                  {/* {valueMensalFaltante} */}
                  <Text style={stlTxt16SSTYLE}>
                    {/* {valueMensalFaltantePercentual &&
                        `${valueMensalFaltantePercentual}%`} */}
                  </Text>
                </View>
              </View>
              {/* =================== END MODO LISTANDO INFORMAÇÕES DO BANCO =================== */}
            </>
            {/* ) : ( */}
            <>
              {/* ========== MODO CRIAÇÃO DE KPI ========== */}
              {/* <View> */}
              {/* <Text style={stlTxt14SSTYLE}>Anual</Text> */}
              {/* COMENTADO PARA CONTORNAR BUG EM HOSTING */}
              {/* <UseTextInput
                          style={stlTxtInput01}
                          placeholder="00"
                          inputName={productName}
                          setState={handleChangeState}
                        /> */}
              {/* <TextInput
                  style={stlTxtInput01STYLE}
                  placeholder={'00'}
                  keyboardType={'numeric'}
                  onChangeText={text => {
                    let total_anual = 0;
                    let total_valueMensal = 0;
                    let total_valueMensalFaltante = 0;
                    values.kpi &&
                      values.kpi.products
                        .filter(prod => prod.productName !== productName)
                        .map(prodKpi => {
                          total_anual = total_anual + prodKpi.anual;
                          total_valueMensal =
                            total_valueMensal + prodKpi.valueMensal;
                          total_valueMensalFaltante =
                            total_valueMensalFaltante +
                            prodKpi.valueMensalFaltante;
                        });
                    !values.kpi
                      ? handleChangeState(
                          {
                            products: [
                              {
                                anual: Number(text),
                                productName,
                                valueMensal: Math.ceil(Number(text) / 12),
                                valueMensalAtingido: 0,
                                valueMensalAtingidoPercentual: 0,
                                valueMensalFaltante: Number(text),
                                valueMensalFaltantePercentual: 100,
                              },
                            ],
                            total: {
                              anual: Number(text),
                              valueMensal: Math.ceil(Number(text) / 12),
                              valueMensalAtingido: 0,
                              valueMensalFaltante: Number(text),
                            },
                          },
                          'kpi',
                        )
                      : handleChangeState(
                          {
                            products: [
                              ...values.kpi.products.filter(
                                prod => prod.productName !== productName,
                              ),
                              {
                                anual: Number(text),
                                productName,
                                valueMensal: Math.ceil(Number(text) / 12),
                                valueMensalAtingido: 0,
                                valueMensalAtingidoPercentual: 0,
                                valueMensalFaltante: Number(text),
                                valueMensalFaltantePercentual: 100,
                              },
                            ],
                            total: {
                              anual: total_anual + Number(text),
                              valueMensal: Math.ceil(
                                Number((total_anual + Number(text)) / 12),
                              ),
                              valueMensalAtingido: 0,
                              valueMensalFaltante:
                                values.kpi.total.valueMensalFaltante +
                                Number(text),
                            },
                          },
                          'kpi',
                        );
                  }}
                /> */}
              {/* </View> */}

              {/* <View>
                <Text style={stlTxt14SSTYLE}>Mensal</Text>
                <Text style={stlTxtInput02STYLE}>25</Text>
              </View> */}
              {/* <View>
                <Text style={stlTxt14SSTYLE}>Atingido</Text>
                <View style={stlView20STYLE}>
                  <Text style={stlTxtInput02STYLE}>52</Text>
                  <Text style={stlTxt15SSTYLE}></Text>
                </View>
              </View> */}
              {/* <View>
                <Text style={stlTxt14SSTYLE}>Faltante</Text>
                <View style={stlView21STYLE}>
                  <Text style={stlTxtInput02STYLE}>35</Text>
                  {/* <Text style={stlTxt16}>{'valueMensalFaltantePercentual' && `${'valueMensalFaltantePercentual'}%`}</Text> */}
              {/* </View> */}
              {/* </View>  */}
              {/* ========== END MODO CRIAÇÃO DE KPI ========== */}
            </>
          </View>
        </View>
      </View>

      <View style={stlView22STYLE}>
        {/* title */}
        <View style={stlView23STYLE}>
          <Text style={stlTxt17STYLE}>Falta</Text>
          <Text style={stlTxt18STYLE}>Total de:</Text>
        </View>

        {/* line */}
        <View style={stlView24STYLE}>
          <View style={stlView25STYLE}>
            <Text style={stlTxt19STYLE}>Clientes Cadastrados</Text>
          </View>

          <View style={stlView26STYLE}>
            <Text style={stlTxt20STYLE}>total_clients</Text>
            {/* {total_clients} */}
            <Text style={stlTxt20STYLE}>{`100%`}</Text>
            <View style={stlTxt20STYLE} />
            <View style={stlTxt20STYLE} />
            <View style={stlTxt20STYLE} />
          </View>
        </View>

        {/* temp line */}
        <View style={stlView24STYLE}>
          <View style={stlView25STYLE}>
            <Text style={stlTxt19STYLE}>Clientes Envolvidos</Text>
          </View>
          <View style={stlView26STYLE}>
            <Text style={stlTxt20STYLE}>251</Text>
            {/* {clientes_envolvidos.length} */}
            <Text style={stlTxt20STYLE}>252</Text>
            {/* {`${total_clients === 0 ? 0 : Math.round((clientes_envolvidos.length / total_clients) * 100)}%`} */}
            <Text style={stlTxt20STYLE}>253</Text>
            {/* {`1/${Number(clientes_envolvidos.length) === 0 ? 0 : Math.round(total_clients / clientes_envolvidos.length)}`} */}
            <Text style={stlTxt20STYLE}>254</Text>
            {/* {Number(Number(clientes_envolvidos.length) * (Number(indicie_faltante))).toFixed(2)} */}
            <Text style={stlTxt20STYLE}>255</Text>
            {/* {Number((Number(clientes_envolvidos.length) * (Number(indicie_faltante))) + Number(clientes_envolvidos.length)).toFixed(2)} */}
          </View>
        </View>

        {/* temp line */}
        <View style={stlView24STYLE}>
          <View style={stlView25STYLE}>
            <Text style={stlTxt19STYLE}>Atividades</Text>
          </View>

          <View style={stlView26STYLE}>
            <Text style={stlTxt20STYLE}>
              100
              {/* {this_year_activities.length} */}
            </Text>
            <Text style={stlTxt20STYLE}>
              125
              {/* {`${Number(clientes_envolvidos.length) === 0 ? 0 : Math.round(Number(this_year_activities.length) / Number(clientes_envolvidos.length) * 100)}%`} */}
            </Text>
            <Text style={stlTxt20STYLE}>
              55
              {/* {`${Number(clientes_envolvidos.length) === 0 ? 0 : Math.round(Number(this_year_activities.length) / Number(clientes_envolvidos.length))}/1`} */}
            </Text>
            <Text style={stlTxt20STYLE}>
              25
              {/* {Number((Number(this_year_activities.length) * Number(indicie_faltante))).toFixed(2)} */}
            </Text>
            <Text style={stlTxt20STYLE}>
              0,2
              {/* {Number((Number(this_year_activities.length) * Number(indicie_faltante)) + Number(this_year_activities.length)).toFixed(2)} */}
            </Text>
          </View>
        </View>
        {/* temp line */}
        <View style={stlView24STYLE}>
          <View style={stlView25STYLE}>
            <Text style={stlTxt19STYLE}>Oportunidades</Text>
          </View>

          <View style={stlView26STYLE}>
            <Text style={stlTxt20STYLE}>
              56
              {/* {this_year_opportunities.length} */}
            </Text>
            <Text style={stlTxt20STYLE}>
              35
              {/* {`${Number(this_year_activities.length) === 0 ? 0 : Math.round(Number(this_year_opportunities.length) / Number(this_year_activities.length) * 100)}%`} */}
            </Text>
            <Text style={stlTxt20STYLE}>
              251
              {/* {`${Number(this_year_activities.length) === 0 ? 0 : Math.round(Number(this_year_opportunities.length) / Number(this_year_activities.length))}/1`} */}
            </Text>
            <Text style={stlTxt20STYLE}>
              45
              {/* {Number(Number(this_year_opportunities.length) * Number(indicie_faltante)).toFixed(2)} */}
            </Text>
            <Text style={stlTxt20STYLE}>
              52
              {/* {Number(Number(this_year_opportunities.length) * Number(indicie_faltante) + Number(this_year_opportunities.length)).toFixed(2)} */}
            </Text>
          </View>
        </View>
        {/* temp line */}
        <View style={stlView24STYLE}>
          <View style={stlView25STYLE}>
            <Text style={stlTxt19STYLE}>Fechamentos</Text>
          </View>

          <View style={stlView26STYLE}>
            <Text style={stlTxt20STYLE}>
              100
              {/* {fechamentos.length} */}
            </Text>
            <Text style={stlTxt20STYLE}>
              052
              {/* {`${Number(this_year_opportunities.length) === 0 ? 0 : Math.round(Number(fechamentos.length) / Number(this_year_opportunities.length) * 100)}%`} */}
            </Text>
            <Text style={stlTxt20STYLE}>
              35
              {/* {`${Number(this_year_opportunities.length) === 0 ? 0 : Math.round(Number(fechamentos.length) / Number(this_year_opportunities.length))}/1`} */}
            </Text>
            <Text style={stlTxt20STYLE}>
              56
              {/* {Number((Number(fechamentos.length) * Number(indicie_faltante))).toFixed(2)} */}
            </Text>
            <Text style={stlTxt20STYLE}>
              12
              {/* {Number((Number(fechamentos.length) * Number(indicie_faltante)) + Number(fechamentos.length)).toFixed(2)} */}
            </Text>
          </View>
        </View>
        {/* totais */}
        <View style={stlView27STYLE}>
          <View style={stlView28STYLE}>
            <Text style={stlTxt21STYLE}>Meta</Text>
            <View style={stlView31STYLE}>
              <Text style={stlTxt22STYLE}>0,25</Text>
              {/* {yearly_meta} */}
            </View>
          </View>
          <View style={stlView28STYLE}>
            <Text style={stlTxt21STYLE}>Sucesso</Text>
            <View style={stlView31STYLE}>
              <Text style={stlTxt22STYLE}>
                32
                {/* {`${Math.round(Number(fechamentos.length) / Number(yearly_meta) * 100)}%`} */}
              </Text>
            </View>
          </View>
          <View style={stlView30STYLE}>
            <Text style={stlTxt21STYLE}>Faltam</Text>
            <View style={stlView31STYLE}>
              <View style={stlView29STYLE}>
                <Text>452/325</Text>
                {/* <Text>{`${Math.round(Number(fechamentos.length) / Number(yearly_meta) * 100) - 100}%`}</Text> */}
              </View>
            </View>
          </View>
        </View>
        <View style={stlView27STYLE}>
          <View style={stlView28STYLE}>
            <Text style={stlTxt21STYLE}>Índice Faltante</Text>
            <View style={stlView31STYLE}>
              <Text style={stlTxt22STYLE}>1,25</Text>
              {/* {`${indicie_faltante}%`} */}
            </View>
          </View>
        </View>
      </View>

      <View style={stlView06STYLE}>
        <TouchableOpacity
          onPress={() => {
            handleChangeState(
              values.month_toggle === undefined ? false : !values.month_toggle,
              'month_toggle',
            );
          }}
        >
          <View style={stlView07STYLE}>
            <Text style={stlTxt02STYLE}>Mes / Ano</Text>
            <UseIcoMoon name="square" size={22} color={'#333'} />
          </View>
        </TouchableOpacity>
        {
          // values.month_toggle === false
          // ? <></>
          // :
          <View style={stlView07aSTYLE}>
            {/* {
                kpi_query && kpi_query.kpi && kpi_query.kpi[0] && [{ productName: 'Total' }, ...kpi_query.kpi[0].products].map(product => {
                  return (
                    <ITEM_TOGGLE
                      productName={product.productName}
                      values={values}
                      handleChangeState={handleChangeState}
                    />)
                })
              } */}
            {/* COMENTADO PARA EFEITOS DE DESENVOLVIMENTO */}
            {/* <ITEM_CLOSED />
                  <ITEM_CLOSED />
                  <ITEM_CLOSED /> */}
          </View>
        }
      </View>

      <TouchableOpacity
        style={stlView08STYLE}
        // onPress={() => {
        //   handleChangeState(productName, 'item_toggle');
        // }}
      >
        <View style={stlView09STYLE}>
          <Text style={stlTxt03STYLE}>Total</Text>
          <Text style={stlTxt04STYLE}>
            Atividades / Oportunidades / Clientes / Negocios
          </Text>
        </View>
        <UseIcoMoon name="plus-square" size={22} color={'#999'} />
      </TouchableOpacity>

      <TouchableOpacity
        style={stlView08STYLE}
        // onPress={() => {
        //   handleChangeState(productName, 'item_toggle');
        // }}
      >
        <View style={stlView09STYLE}>
          <Text style={stlTxt03STYLE}>Llinha VM</Text>
          <Text style={stlTxt04STYLE}>
            Atividades / Oportunidades / Clientes / Negocios
          </Text>
        </View>
        <UseIcoMoon name="plus-square" size={22} color={'#999'} />
      </TouchableOpacity>

      <TouchableOpacity
        style={stlView08STYLE}
        // onPress={() => {
        //   handleChangeState(productName, 'item_toggle');
        // }}
      >
        <View style={stlView09STYLE}>
          <Text style={stlTxt03STYLE}>Linha F</Text>
          <Text style={stlTxt04STYLE}>
            Atividades / Oportunidades / Clientes / Negocios
          </Text>
        </View>
        <UseIcoMoon name="plus-square" size={22} color={'#999'} />
      </TouchableOpacity>

      <TouchableOpacity
        style={stlView08STYLE}
        // onPress={() => {
        //   handleChangeState(productName, 'item_toggle');
        // }}
      >
        <View style={stlView09STYLE}>
          <Text style={stlTxt03STYLE}>Concórcio</Text>
          <Text style={stlTxt04STYLE}>
            Atividades / Oportunidades / Clientes / Negocios
          </Text>
        </View>
        <UseIcoMoon name="plus-square" size={22} color={'#999'} />
      </TouchableOpacity>

      <TouchableOpacity
        style={stlView08STYLE}
        // onPress={() => {
        //   handleChangeState(productName, 'item_toggle');
        // }}
      >
        <View style={stlView09STYLE}>
          <Text style={stlTxt03STYLE}>Seguros</Text>
          <Text style={stlTxt04STYLE}>
            Atividades / Oportunidades / Clientes / Negocios
          </Text>
        </View>
        <UseIcoMoon name="plus-square" size={22} color={'#999'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={stlView08STYLE}
        // onPress={() => {
        //   handleChangeState(productName, 'item_toggle');
        // }}
      >
        <View style={stlView09STYLE}>
          <Text style={stlTxt03STYLE}>Semi Novos</Text>
          <Text style={stlTxt04STYLE}>
            Atividades / Oportunidades / Clientes / Negocios
          </Text>
        </View>
        <UseIcoMoon name="plus-square" size={22} color={'#999'} />
      </TouchableOpacity>
    </View>
  );
};

// const Form = () => {
//   return (
//     <>
//       <IptImg infoData={'D5.forms.iptsInfo.image'} />
//       <IptTxt infoData={'D5.forms.iptsInfo.name'} />
//       <View style={stlMgB20}>
//         <IptTxt infoData={'D5.forms.iptsInfo.weight'} />
//       </View>
//       <IptPicker infoData={'D5.forms.iptsInfo.categ'} />
//       <IptPicker infoData={'D5.forms.iptsInfo.subCateg'} />
//       <View style={stlRow}>
//         <View style={stlSpaceCol}>
//           <IptPicker infoData={'D5.forms.iptsInfo.typeVar'} />
//         </View>
//         <View style={stlFlex1}>
//           <IptTxt infoData={'D5.forms.iptsInfo.valueVar'} />
//         </View>
//       </View>
//     </>
//   );
// };

// #region :: STYLEs *********

// const cond01 =
// values.goals_toggle === true || values.goals_toggle === undefined
const stlBodyView = [useStl.flex1, { padding: 10 }];

const StlCalen = [useStl.flexRow, useStl.flexBetWeen, { marginBottom: 30 }];

const stl01 = [
  useStl.flexRow,
  useStl.flexBetween,
  {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    position: 'absolute',
    top: -90,
    left: 0,
    width: '100%',
    padding: 20,
  },
];
const stl02 = [useStl.input, { width: '42%', marginLeft: 40 }];
const stlRow = [{ flexDirection: 'row' as const }];
const stlMgB20 = [useStl.mgB20];
const stlSpaceCol = [{ flex: 1, marginRight: 10 }];
const stlFlex1 = [{ flex: 1 }];

// BTNs
const stlCenter = [useStl.flexCenter, { marginVertical: 40 }];
const stlBtn = [useStl.btn, useStl.btnMedium, { width: 110, marginBottom: 5 }];
const stlBtnPrimary = [stlBtn, useStl.btnPrimary];
const stltxtInverse = [useStl.txtPrimaryInverse];

const stlView01STYLE = [useStl.flexMaster, useStl.whitePage];
const stlScroll01STYLE = [useStl.scrollView, { paddingTop: 90 }];
const stlView02STYLE = [useStl.longBar];
const stlView02bSTYLE = [useStl.pad20];

// SELECTYEAR
const stlPicker01 = { border: 'none', color: '#6f6f6f', fontSize: 14 };

// GOALS
const stlView03STYLE = [useStl.cardMask];
const stlView04STYLE = [useStl.itemList];
const stlView05STYLE = [{ backgroundColor: '#f6f6f6' }];

const stlTxt01STYLE = [useStl.txTitleCard];

// MONTHS
const stlView06STYLE = stlView03STYLE;
const stlView07STYLE = [useStl.itemList];
const stlView07aSTYLE = [useStl.itemAccordion, stlView05STYLE, { padding: 0 }];
const stlTxt02STYLE = stlTxt01STYLE;

//ITEM_CLOSED
const stlView08STYLE = [useStl.flexRow, useStl.itemList]; // linha
const stlView09STYLE = [useStl.flex4];
const stlTxt03STYLE = [useStl.txTitleCard, useStl.txCenter];
const stlTxt04STYLE = [useStl.txCenter, { color: '#666' }];

//ITEM_TOGGLE
const stlView10STYLE = [useStl.itemAccordion, stlView05STYLE];
const stlView11STYLE = [
  useStl.flexRow,
  useStl.flexBetween,
  { paddingHorizontal: 20 },
];
const stlView12STYLE = [
  useStl.flexRow,
  useStl.flexBetween,
  { paddingHorizontal: 20, marginBottom: -18, marginTop: 20 },
];
const stlTxt05STYLE = stlTxt03STYLE;

//ITEMS_INPUT
const stlView17STYLE = [
  useStl.itemAccordion,
  { backgroundColor: 'transparent' },
];
const stlView18STYLE = [useStl.xx, { paddingHorizontal: 20 }];
const stlView19STYLE = [
  useStl.flexRow,
  useStl.flexBetween,
  { width: '100%', marginBottom: 5 },
];
const stlView20STYLE = [useStl.flexRow];
const stlView21STYLE = [stlView20STYLE];
const stlTxt13SSTYLE = [{ fontSize: 17, color: '#666' }];
const stlTxt14SSTYLE = [{ color: '#666', textAlign: 'left', fontSize: 12 }];
const stlTxt15SSTYLE = [{ fontWeight: 'bold', color: '#666', marginLeft: 5 }];
const stlTxt16SSTYLE = [{ fontWeight: 'bold', color: '#666', marginLeft: 5 }];
const stlTxtInput01STYLE = [
  useStl.input,
  useStl.txCenter,
  { backgroundColor: 'white', width: 60, color: '#666' },
];
const stlTxtInput02STYLE = [
  useStl.input,
  useStl.txCenter,
  { width: 60, color: '#999' },
];

const stlView22STYLE = [useStl.flex1, useStl.mgB20, {}];
const stlView23STYLE = [
  useStl.flexEnd,
  useStl.itemAccordion,
  { backgroundColor: 'transparent' },
];
const stlView24STYLE = [
  useStl.flexRow,
  useStl.itemAccordion,
  { backgroundColor: 'transparent' },
];
const stlView25STYLE = [useStl.flex1];
const stlView26STYLE = [useStl.flex3, useStl.flexRow, useStl.flexBetween];
const stlTxt17STYLE = [
  {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333',
    paddingLeft: '20',
    width: 45,
  },
];
const stlTxt18STYLE = [stlTxt17STYLE];
const stlTxt19STYLE = [{ textAlign: 'right', paddingRight: 10, fontSize: 12 }];
const stlTxt20STYLE = [{ flex: 1, textAlign: 'center' }];

const stlView27STYLE = [useStl.flexBetween, useStl.flexRow, { paddingTop: 20 }];
const stlView28STYLE = [useStl.flex1];
const stlView30STYLE = [useStl.flex2];
const stlView31STYLE = [
  { backgroundColor: '#ccc', padding: 10, marginRight: 3 },
];
const stlView29STYLE = [useStl.flexBetween, useStl.flexRow];
const stlTxt21STYLE = [
  { textAlign: 'center', fontWeight: 'bold', color: '#666', fontSize: 12 },
];
const stlTxt22STYLE = [useStl.txCenter, useStl.flex1];
const stlBtn01STYLE = [
  useStl.btnPrimary,
  { marginBottom: 4, width: 200, height: 35 },
];
const stlBtnTxtSTYLE = [useStl.txInverseColor];

const stl01STYLE = [
  useStl.flexRow,
  useStl.flexBetween,
  {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    position: 'absolute',
    top: -90,
    left: 0,
    width: '100%',
    padding: 20,
  },
];
const stl02STYLE = [useStl.input, { flex: 1 }];

// #endregion *********
