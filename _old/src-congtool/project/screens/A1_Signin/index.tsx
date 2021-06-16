// ----------- import Internals
import ViewDF from './Views';
import { UseInitData, useData } from '../../../config/useMorfos';
import { useDispatch } from 'react-redux';

// ----------- set Info Screen
export const infoSc = {
  path: 'signin',
  groupSc: 'pub',
  condBigSc: true,

  scCode: 'A1',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('A1.scContent');

  // ----------- set Hooks
  const dispatch = useDispatch();

  // cond Button ENTER ------------
  const btnEnter = () => dispatch({ type: 'A1_GoogleSignIn' });
  // const btnEnter = rdAuthUser ? signOut : signinGoogle;
  // const condBtnLabel = rdAuthUser ? 'SAIR' : 'ENTRAR';

  // ----------- set Info Return
  const infoView = { content, btnEnter };

  // ----------- set Return
  return (
    <UseInitData reducer={'A1_InitData'}>
      <ViewDF info={infoView} />
    </UseInitData>
  );
};
