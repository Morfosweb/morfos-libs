// ----------- import Internals
import { useRouter, useData } from '../../../config/useMorfos';

export default ({ children }) => {
  // ----------- set Data
  const authUser = useData(`basePersist.user.userId`);
  const pubPath = useData(`baseRoute.pathInfo.pubPath`);

  // ----------- set Hooks
  const { callRedirect } = useRouter();

  // ----------- set Return
  const condReturn = !authUser ? callRedirect(pubPath) : children;

  return condReturn;
};

const CondPriv = (number, children) => {
  // ----------- set Data
  const pubPath = useData(`baseRoute.pathInfo.pubPath`);
  const expression = `baseDomains.selectedDomain.userPermissions.cond${number}`;
  const condPriv = useData(expression);

  // ----------- set Hooks
  const { callRedirect } = useRouter();

  // ----------- set Return
  const condReturn = condPriv ? children : callRedirect(pubPath);
  return condReturn;
};

export const Priv1 = ({ children }) => CondPriv(1, children);
export const Priv2 = ({ children }) => CondPriv(2, children);
export const Priv3 = ({ children }) => CondPriv(3, children);
export const Priv4 = ({ children }) => CondPriv(4, children);
