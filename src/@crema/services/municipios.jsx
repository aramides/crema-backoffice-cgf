import jwtAxios from '../services/auth/jwt-auth/index';
import { GET_MUNICIPIOS } from './url_helpers';

export const getMunicipios = async (estadoId) => {
  return jwtAxios.get(GET_MUNICIPIOS, {
    params: {
      estado_id: estadoId,
    },
  });
};
