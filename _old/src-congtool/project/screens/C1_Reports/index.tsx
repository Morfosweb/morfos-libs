// ----------- import Packs
import { useState, useEffect } from 'react';

// ----------- import Internals
import ViewDF, { ItemView, InputsView, BtnsView } from './Views';
import {
  UseInitData,
  UseCondLoader,
  useData,
  useRouter,
} from '../../../config/useMorfos';
import { useDispatch } from 'react-redux';

// ----------- set Info Screen
export const infoSc = {
  path: 'reports',
  groupSc: 'priv4',
  condBigSc: true,

  scCode: 'C1',
};

export default () => {
  // set Return ------------
  return (
    <UseInitData reducer={'C1_InitData'}>
      <UseCondLoader data={'C1.condLoader'}>
        <FormComp />
      </UseCondLoader>
    </UseInitData>
  );
};

const useReportsData = () => {
  const selectedGroup = useData('C1.selectedGroup');
  const selectedDomain = useData('baseDomains.selectedDomain');
  const { refMonthYear } = useData('baseDateInfo');

  return selectedDomain?.reportsData?.[refMonthYear]?.reportGroups?.[
    selectedGroup.groupId
  ];
};

function FormComp() {
  const { monthExp, isOpen, limitDay } = useData('baseDateInfo');
  const selectedGroup = useData('C1.selectedGroup');

  // set Return ------------
  const info = {
    monthExp,
    limitDay,
    isOpen,
    groupName: selectedGroup?.groupName,
  };

  const peopleGroup = useReportsData();

  const arrPeople = peopleGroup ? Object.values(peopleGroup) : [];

  // set Form ------------
  const [sttVal, setVal] = useState([...arrPeople]);

  // set Save ------------
  const buttonsComp = useBtnSave({ sttVal });

  // set list Comp ------------
  const infoItem = { sttVal, setVal };
  const listItem = sttVal.map((item: any, itemIdx) => (
    <ItemComp key={item.personId} info={{ ...infoItem, item, itemIdx }} />
  ));

  // set Return ------------
  const infoReturn = {
    listItem,
    buttonsComp,
    ...info,
  };
  return <ViewDF info={infoReturn} />;
}

function ItemComp({ info: { sttVal, setVal, item, itemIdx } }) {
  const iptDyn = ({ type, val }) => {
    const newVal = val === '' || val === 0 ? null : val;

    const newArr = [...sttVal];

    const objItem = {
      ...sttVal[itemIdx],
      report: { ...sttVal[itemIdx].report, [type]: newVal },
    };
    newArr[itemIdx] = objItem;
    return setVal(newArr);
  };

  const mapInputs = item1 => {
    const arrLabels = [
      { ref: 'publications', label: 'Pub' },
      { ref: 'videos', label: 'Víd' },
      { ref: 'hours', label: 'Hrs' },
      { ref: 'returnVisits', label: 'Rev' },
      { ref: 'studies', label: 'Est' },
    ];

    return arrLabels.map((item2, idx) => {
      const report = item1.report;
      const defaultVal = report && report[item2.ref];

      const changeText = val =>
        iptDyn({
          // itemIdx: itemIdx,
          type: item2.ref,
          val: Number(val),
        });

      const label = item2.label;

      const infoReturn = {
        label,
        defaultVal,
        changeText,
      };
      return <InputsView key={idx} info={infoReturn} />;
    });
  };

  function ItemComp() {
    const reportGroup = useReportsData();
    const selectedPerson = reportGroup[itemIdx];

    const itemName = item.personName;

    const personData = selectedPerson ?? item;
    const defaultVal = personData.report ? personData.report.observations : '';
    const changeText = val =>
      iptDyn({
        type: 'observations',
        val,
        // itemIdx: item.itemIdx
      });

    const infoReturn = {
      itemName,
      defaultVal,
      changeText,
    };

    return <ItemView info={infoReturn}>{mapInputs(personData)}</ItemView>;
  }

  return ItemComp();
}

function useBtnSave({ sttVal }) {
  // ----------- set Data
  const { refMonthYear, refYearMonth } = useData(`baseDateInfo`);
  const selectedGroup = useData('C1.selectedGroup');
  const selectedDomain = useData('baseDomains.selectedDomain');

  // ----------- set Hooks
  const dispatch = useDispatch();
  const { callRouter } = useRouter();
  // const { callUpdate } = useCRUD();

  const [sttShowMsg, setShowMsg] = useState(false);
  const msgText = 'Faça alguma alteração pra poder salvar';

  const btnSave = () => {
    const dataRef = selectedDomain.reportsData;
    const dateMonth = dataRef[refMonthYear];
    const monthDoc = dateMonth?.docId;

    const filterChange = sttVal.filter(item => item.report);
    const condChanges = filterChange.length === 0;

    if (condChanges) {
      return setShowMsg(true);
    }

    dispatch({
      type: 'C1_ADD_MonthReport',
      pass: {
        monthDoc,
        groupId: selectedGroup.groupId,
        refMonthYear,
        refYearMonth,
        val: sttVal,
        domainDoc: selectedDomain.docId,
      },
    });

    // callUpdate('updateMonth', {
    //   domainDoc: selectedDomain.docId,
    //   monthDoc,
    //   groupId: selectedGroup.groupId,
    //   refMonthYear,
    //   refYearMonth,
    //   val: sttVal,
    // });
  };

  const btnCancel = () => callRouter('profile');

  const infoReturn = { btnSave, btnCancel, sttShowMsg, msgText };

  return <BtnsView info={infoReturn} />;
}
