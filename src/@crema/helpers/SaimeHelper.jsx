import jwtAxios from '@crema/services/auth/jwt-auth';
import * as url from './UrlHelper';

export const GetSaime = (params) => {
  return jwtAxios.get(
    `${url.GET_SAIME}?origen=${params.origen}&cedula=${params.cedula}`,
  );
};
