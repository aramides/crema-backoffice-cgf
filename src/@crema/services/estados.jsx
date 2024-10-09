import jwtAxios from '../services/auth/jwt-auth/index';
import { GET_ESTADOS } from './url_helpers';

export const getEstados = () => {
  return jwtAxios.get(GET_ESTADOS);
};
