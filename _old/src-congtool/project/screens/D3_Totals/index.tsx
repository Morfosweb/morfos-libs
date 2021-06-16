// ----------- import Packs
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF, {
  TitleView,
  DataCompView,
  GroupView,
  PubItemView,
} from './Views';
import {
  UseInitData,
  useData,
  UseCondLoader,
  useRouter,
} from '../../../config/useMorfos';
import { ezLog, findMonth } from '../../../config/useMorfos/utils';

// ----------- set Info Screen
export const infoSc = {
  path: 'totals',
  groupSc: 'priv3',
  condBigSc: true,

  scCode: 'D3',
};

// ----------- set Default Component
export default () => {
  // ----------- set Hooks
  const { callRouter } = useRouter();
  const selMonthYear = useData('D3.selMonthYear');
  const reportsPath = `baseDomains.selectedDomain.reportsData.${selMonthYear}`;
  const reportsData = useData(reportsPath);

  // set dateControl ------------
  const dateControl = useDateControl();

  const btnRegisters = () => callRouter('registers');

  const infoReturnFather = { TEMPBTN: false, dateControl, btnRegisters };
  const infoReturnChildren1 = { reportsData };
  const infoReturnChildren2 = { reportsData };

  const children1: any = reportsData && (
    <DataComponent info={infoReturnChildren1} />
  );
  const children2: any = reportsData && (
    <CompGroup info={infoReturnChildren2} />
  );

  return (
    <UseInitData reducer={'D3_InitData'}>
      <UseCondLoader data={'D3.condLoader'}>
        <ViewDF
          info={infoReturnFather}
          children1={children1}
          children2={children2}
        />
      </UseCondLoader>
    </UseInitData>
  );
};

const DataComponent = ({ info }) => {
  const { reportsData } = info;

  // set Groups Names ------------
  const reportsArr: any = Object.values(reportsData.reportGroups);
  const filteredReport = reportsArr.filter(item => item.length > 0);

  // set Totals ------------
  const findTotals = useTotals({ data: filteredReport });
  const [countTypes, countMembers, countTotals, arrTypes] = findTotals;

  // set Totals ------------
  const totalLabels = {
    pub: 'Pub. que Relataram:',
    pa: 'Pion. Auxiliares:',
    pr: 'Pion. Regulares:',
  };

  // set Return ------------

  const infoReturn = {
    // counts ---
    countTypes,
    countMembers,
    countTotals,
    arrTypes,

    // others ---
    totalLabels,
  };

  return <DataCompView info={infoReturn} />;
};

const arrLabels = [
  { ref: 'publications', label: 'Pub' },
  { ref: 'videos', label: 'Víd' },
  { ref: 'hours', label: 'Hrs' },
  { ref: 'returnVisits', label: 'Rev' },
  { ref: 'studies', label: 'Est' },
];

function useDateControl() {
  const selMonthYear = useData('D3.selMonthYear');
  const splitMonthYear = selMonthYear?.split('/');
  const monthNumber = Number(splitMonthYear?.[0]);
  const yearNumber = Number(splitMonthYear?.[1]);

  const initMonthYear = useData('baseDomains.selectedDomain.initMonthYear');
  const thisDate = useData('baseDateInfo.infoNow');
  const lastDate = {
    month: thisDate.monthNumber - 1,
    year: thisDate.yearNumber,
  };

  const dispatch = useDispatch();

  // ---------- FALTA definir initialMonthYear no banco
  const dateLimitMin = selMonthYear === initMonthYear;
  const thisMonthYear = `${lastDate.month}/${lastDate.year}`;
  const dateLimitMax = selMonthYear === thisMonthYear;

  // const labelDate = useData('baseDateInfo.monthExp');
  const labelObj = findMonth(`${yearNumber}-${monthNumber}`);
  const labelDate = `${labelObj.monthText.pt} de ${yearNumber}`;

  ezLog({ labelDate });

  // set Btns Date ------------

  const btnIncreaseDate = () => {
    const condMonth = monthNumber === 12 ? 1 : monthNumber + 1;
    const condYear = monthNumber === 12 ? yearNumber + 1 : yearNumber;

    const newMonthYear = `${condMonth}/${condYear}`;
    dispatch({ type: 'D3_GET_Month', newMonthYear });
  };

  const btnDecreaseDate = () => {
    const condMonth = monthNumber === 1 ? 12 : monthNumber - 1;
    const condYear = monthNumber === 1 ? yearNumber - 1 : yearNumber;

    const newMonthYear = `${condMonth}/${condYear}`;
    dispatch({ type: 'D3_GET_Month', newMonthYear });
  };

  // set Return ------------

  const infoReturn = {
    dateLimitMin,
    dateLimitMax,
    btnIncreaseDate,
    btnDecreaseDate,
    refMonthYear: labelDate,
  };
  return <TitleView info={infoReturn} />;
}

function useTotals({ data }) {
  // set Totals ------------
  const countTotals = { all: {} };
  const arrTypes = ['pub', 'pa', 'pr'];

  const allPubs = data.flatMap(group => group);
  const countByRef = (arr, ref) => {
    const refFilter = arr.filter(el => el.report && el.report[ref]);
    const refReturn = refFilter.map(item => item.report[ref]);
    const refReduce = () => refReturn.reduce((acc, curr) => acc + curr);
    const condReturn = refReturn.length > 0 ? refReduce() : 0;
    return condReturn;
  };

  arrTypes.map(type => {
    const byType = allPubs.filter(
      pub => pub.privilegeType === type && pub.report && pub.report.hours > 0,
    );
    const membType2 = allPubs.filter(pub => pub.privilegeType === type);
    const newObj = { countType: byType.length, countMembers: membType2.length };
    arrLabels.map(label => {
      countTotals.all[label.ref] = countByRef(allPubs, label.ref);
      return (newObj[label.ref] = countByRef(byType, label.ref));
    });
    return (countTotals[type] = { ...newObj });
  });

  const counArrs: any = Object.values(countTotals);
  const countTypes = counArrs
    .map(item => item.countType ?? 0)
    .reduce((acc, curr) => acc + curr);
  const countMembers = counArrs
    .map(item => item.countMembers ?? 0)
    .reduce((acc, curr) => acc + curr);
  return [countTypes, countMembers, countTotals, arrTypes];
}

// set Pub Item ------------
function PubItemList({ item }) {
  // set Hooks ------------
  // const callRouter = useRouter();
  const dispatch = useDispatch();

  const findingVal = ref => item && item.report && item.report[ref];
  const findObs =
    item.report && item.report.observations && findingVal('observations');

  const btnRegister = () => {
    dispatch({
      type: 'CHANGE_RD_PROP',
      rdName: 'rdSelectedDomain',
      rdPropName: 'selectedPub',
      value: { personId: item.personId },
    });

    // callRouter('pubReg');
  };

  const infoReturn = { arrLabels, item, findingVal, findObs, btnRegister };

  return <PubItemView info={infoReturn} />;
}

function GroupsItem({ info }) {
  // set Check ------------
  const { group } = info;

  // set Hooks & Vars ------------
  const [sttOpen, setOpen] = useState(false);
  const groups = useData('baseDomains.selectedDomain.groups');
  const groupObj = groups.find(item => item.groupId === group[0].groupId);
  const groupName = groupObj.groupName;

  // const groupName = useSelector(state => {
  //   const groups = state.rdSelectedDomain.groups;
  //   const groupObj = groups.find(item => item.groupId === group[0].groupId);
  //   return groupObj.groupName;
  // });

  const mapPubItem =
    sttOpen && group.map((item, idx) => <PubItemList key={idx} item={item} />);

  // set Btns ------------
  const btnOpen = () => setOpen(!sttOpen);

  const infoReturn = {
    groupName,
    group,
    // month,
    sttOpen,
    btnOpen,
    arrLabels,
    mapPubItem,
    // findValue,
  };
  return GroupView({ info: infoReturn });
}

function CompGroup({ info }) {
  const { reportsData } = info;

  const findPermission = state => {
    const selectedDomain = state.rdSelectedDomain;

    if (selectedDomain) {
      const { permissions } = state.rdSelectedDomain;
      const userPermissionObj = permissions.arrayDetails.find(
        item => item.userEmail === state.rdAuthUser.userEmail,
      );
      const permission = userPermissionObj.permissionType;

      return permission;
    } else {
      return false;
    }
  };

  const arrGroups: any = Object.values(reportsData.reportGroups);
  const filteredReport = arrGroups.filter(item => item.length > 0);
  // const filteredReport = arrGroups;
  // const domainPermission = useSelector(findPermission);
  // const condMapGroup = domainPermission <= 2;

  const mapGroup =
    // condMapGroup &&
    filteredReport.map(group => {
      return <GroupsItem key={group[0].groupId} info={{ group }} />;
    });

  return mapGroup;
}
