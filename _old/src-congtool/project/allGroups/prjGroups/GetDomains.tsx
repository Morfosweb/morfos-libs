// ----------- import Internals
import { UseInitData, UseCondLoader } from '../../../config/useMorfos';

export default ({ children }) => {
  // ----------- set Return
  return (
    <UseInitData reducer={'allgps_GET_Domains'}>
      <UseCondLoader data={'baseDomains.condData'}>{children}</UseCondLoader>
    </UseInitData>
  );
};
