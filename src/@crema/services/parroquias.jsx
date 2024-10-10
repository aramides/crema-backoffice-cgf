import jwtAxios from '../services/auth/jwt-auth/index';
import { GET_PARROQUIAS } from './url_helpers';

export const getParroquias = async (idMunicipio) => {
  return jwtAxios.get(GET_PARROQUIAS, {
    params: {
      municipio_id: idMunicipio,
    },
  });
};
