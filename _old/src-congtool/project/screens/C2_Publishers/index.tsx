// ----------- import Packs
import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF, { ItemView, AddPersonView } from './Views';
import {
  UseInitData,
  useData,
  UseList,
  useToggle,
} from '../../../config/useMorfos';
import { NoItemView } from '../../comps';

// ----------- set Info Screen
export const infoSc = {
  path: 'publishers',
  groupSc: 'priv1',
  condBigSc: true,

  scCode: 'C2',
};

// ----------- set Default Component
export default () => {
  // ----------- set Info Return
  const infoView = { AddPersonComp };

  // ----------- set Info Return
  const listCBFn = (itemId: string, noItem: boolean) => {
    const noItemComp = <NoItemView />;
    const infoData = { itemsInfo: 'C2.itemsInfo', itemId };
    const itemComp = <ItemComp key={itemId} infoData={infoData} />;
    return noItem ? noItemComp : itemComp;
  };

  // ----------- set Return
  return (
    <UseInitData reducer={'C2_InitData'}>
      <ViewDF info={infoView}>
        <UseList data={'C2.itemsList'} callBackFn={listCBFn} />
      </ViewDF>
    </UseInitData>
  );
};

const AddPersonComp = () => {
  // ----------- set Hooks
  const dispatch = useDispatch();
  const [sttActive, toggle] = useToggle();

  // ----------- set Add Button
  const selAdd = () => {
    dispatch({ type: 'C2_InitForm' });
    toggle();
  };
  const btnSave = () => {
    dispatch({ type: 'C2_SAVE_Pub' });
    toggle();
  };

  // ----------- set Info Return
  const infoView = { sttActive, toggle, btnSave, selAdd };

  // ----------- set Return
  return <AddPersonView info={infoView} />;
};

const ItemComp = ({ infoData }) => {
  // ----------- set Props Parameter
  const { itemId, itemsInfo } = infoData;

  // ----------- set Data
  const item = useData(itemsInfo, itemId);

  // ----------- set Hooks
  const dispatch = useDispatch();
  const [sttActive, toggle] = useToggle();

  // ----------- set Buttons Item
  const btns = {
    selItem: () => {
      toggle();
      dispatch({ type: 'C2_InitForm', itemId });
    },
    saveItem: () => {
      dispatch({ type: 'C2_SAVE_Pub', itemId });
      toggle();
    },
    cancelItem: () => toggle(),
  };

  // ----------- set Info Return
  const infoView = { item, itemId, sttActive, btns };

  // ----------- set Return
  return <ItemView info={infoView} />;
};
