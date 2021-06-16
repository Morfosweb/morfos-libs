// ----------- import Packs
import React from 'react';
import { Picker } from '@react-native-picker/picker';

// ----------- import Internals
import ViewDF, { Goals, Period, NoKpiView, Products } from './Views';
import {
  useRouter,
  UseInitData,
  useData,
  UseCondLoader,
  UseCleanOut,
} from '../../../config/useMorfos';
import { useDispatch } from 'react-redux';

// ----------- set Info Screen
export const infoSc = {
  path: 'analysisKpi',
  groupSc: 'priv',
  condBigSc: true,
  scCode: 'D5',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('D5.scContent');

  // ----------- set Hooks
  const { callRouter } = useRouter();
  const dispatch = useDispatch();

  // ----------- set Btns
  const btns = {
    save: () => dispatch({ type: 'D5_ADD_Name' }),
    cancel: () => callRouter('shopsList'),
  };

  // ----------- set Pikers
  let listYear = [];
  const current_year = new Date().getFullYear() - 5;
  for (let index = 0; index < 16; index++) {
    const year = String(current_year + index);
    const idx = String(index);

    listYear.push({ label: year, id: year });
  }
  const listMonth = [
    { label: 'Janeiro', id: '0' },
    { label: 'Fevereiro', id: '1' },
    { label: 'Março', id: '2' },
    { label: 'Abril', id: '3' },
    { label: 'Maio', id: '4' },
    { label: 'Junho', id: '5' },
    { label: 'Julho', id: '6' },
    { label: 'Agosto', id: '7' },
    { label: 'Setembro', id: '8' },
    { label: 'Outubro', id: '9' },
    { label: 'Novembro', id: '10' },
    { label: 'Dezembro', id: '11' },
  ];

  // ----------- set Changes
  const ChangeItm1 = val => {
    const found = listYear.find(item => item.id === val);

    return (
      val !== 'pHolder' &&
      dispatch({
        type: 'D5_IptPicker1',
        value: val,
        itemId: 'year',
        label: found.label,
      })
    );
  };

  const ChangeItm2 = val => {
    const found = listMonth.find(item => item.id === val);

    return (
      val !== 'pHolder' &&
      dispatch({
        type: 'D5_IptPicker2',
        value: val,
        itemId: 'month',
        label: found.label,
      })
    );
  };

  // ----------- set Other Lists
  const LoopPickerYear = ({ stlPicker }) => {
    // ----------- set Data
    const sttYear = useData('D5.forms.iptsChanges.year');

    // ----------- set Return
    return (
      <Picker
        selectedValue={sttYear}
        style={stlPicker}
        onValueChange={ChangeItm1}
      >
        {listYear.map(item => (
          <Picker.Item value={item.id} label={item.label} />
        ))}
      </Picker>
    );
  };

  const LoopPickerMonth = ({ stlPicker }) => {
    // ----------- set Data
    const sttMonth = useData('D5.forms.iptsChanges.month');

    // ----------- set Return
    return (
      <Picker
        selectedValue={sttMonth}
        style={stlPicker}
        onValueChange={ChangeItm2}
      >
        {listMonth.map(item => (
          <Picker.Item value={item.id} label={item.label} />
        ))}
      </Picker>
    );
  };

  // Filter Year Goals
  const LoopGoals = () => {
    // ----------- set Data
    const kpi = useData('D5.currYear.kpi.products');
    const condKpi = kpi ?? [];

    // ----------- set Return
    const kpiList = condKpi.map(item => {
      const {
        productName,
        anual,
        valueMensal,
        valueMensalAtingido,
        valueMensalFaltante,
      } = item;
      const infoView = {
        name: productName ?? '...',
        yearly: anual ?? '...',
        monthly: valueMensal ?? '...',
        reach: valueMensalAtingido ?? '...',
        missing: valueMensalFaltante ?? '...',
      };

      return <Goals infoData={{ ...infoView }} />;
    });

    const condReturn = kpi ? kpiList : <NoKpiView />;
    return condReturn;
  };

  // Filter Monthly Goals
  const LoopMontGoals = ({ infoData }) => {
    // ----------- set Data
    const kpi = useData('D5.currYear.kpi.products');
    const condKpi = kpi ?? [];

    // ----------- set Return
    const kpiList = condKpi.map(item => {
      const {
        productName,
        anual,
        valueMensal,
        valueMensalAtingido,
        valueMensalFaltante,
      } = item;
      const infoView = {
        name: productName ?? '...',
        yearly: anual ?? '...',
        monthly: valueMensal ?? '...',
        reach: valueMensalAtingido ?? '...',
        missing: valueMensalFaltante ?? '...',
      };

      return <Products infoData={{ ...infoView }} />;
    });

    const condReturn = kpi ? kpiList : <NoKpiView />;
    return condReturn;
  };

  // ----------- set Return
  const infoView = {
    content,
    btns,
    LoopPickerYear,
    LoopPickerMonth,
    ChangeItm1,
    ChangeItm2,
  };
  const infoList = {
    LoopGoals,
    LoopMontGoals,
  };

  return (
    <UseInitData reducer={'D5_InitData'}>
      <UseCondLoader data={'D5.condList'}>
        <UseCleanOut data={'D5.condList'} />
        <ViewDF info={infoView}>
          <>
            <Period key={'year'} infoData={{ ...infoList, itemId: 'year' }} />
            <Period key={'month'} infoData={{ ...infoList, itemId: 'month' }} />
          </>
        </ViewDF>
      </UseCondLoader>
    </UseInitData>
  );
};
