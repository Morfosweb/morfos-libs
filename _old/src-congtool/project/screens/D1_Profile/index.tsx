// ----------- import Internals
import ViewDF from './Views';
import { UseInitData, useData } from '../../../config/useMorfos';
import { useDispatch } from 'react-redux';
import { hasData } from '../../../config/useMorfos/utils';

// ----------- set Info Screen
export const infoSc = {
  path: 'profile',
  groupSc: 'priv',
  condBigSc: true,

  scCode: 'D1',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('D1.scContent');
  const userData = useData('basePersist.user');
  const domainsArr = useData('baseDomains.domains');

  // ----------- set Hooks
  const dispatch = useDispatch();

  // ----------- set Routes
  const btnSignOut = () => dispatch({ type: 'D1_SignOut' });

  // ----------- set if no Domain
  const condDomain = hasData(domainsArr);

  // ----------- set Info Return
  const infoView = { content, btnSignOut, domainsArr, userData, condDomain };

  // ----------- set Return
  return (
    <UseInitData reducer={'D1_InitData'}>
      <ViewDF info={infoView} />
    </UseInitData>
  );
};
