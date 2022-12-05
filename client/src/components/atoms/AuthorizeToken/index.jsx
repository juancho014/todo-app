import { getToken } from '../../../utils/token';

export default function AuthorizeToken({ children }) {
  const token = getToken();
  if (!token) {
    return (
      <h3>
        Ud no esta autorizado-registrarse por favor
      </h3>
    );
  }

  return children;
}
