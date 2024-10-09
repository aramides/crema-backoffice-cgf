import { client as api } from '../core/AppRoutes/index';

import * as url from './url_helper';

export const GetEstados = (params) => {
  return api.get(url.GET_ESTADOS, params);
};
export const GetEstadosTable = (params) => {
  return api.get(url.POST_ESTADOS_MODULE, params);
};

export const PostEstados = (params) => {
  return api.create(url.GET_ESTADOS_MODULE, params);
};
export const PutEstados = (params) => {
  delete params.id;
  delete params.updatedAt;
  delete params.createdAt;
  return api.put(url.GET_ESTADOS_MODULE, params);
};
export const DeleteEstados = (params) => {
  return api.put(url.DELETE_ESTADOS_MODULE, params);
};
