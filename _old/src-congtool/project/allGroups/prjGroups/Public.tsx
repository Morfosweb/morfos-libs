// ----------- import Internals
import { useRouter, useData } from '../../../config/useMorfos';

export default ({ children }) => {
  // ----------- set Data
  const authUser = useData(`basePersist.user.userId`);
  const privPath = useData(`baseRoute.pathInfo.privPath`);

  // ----------- set Hooks
  const { callRedirect } = useRouter();

  // ----------- set Return
  const condReturn = authUser ? callRedirect(privPath) : children;

  return condReturn;
};
