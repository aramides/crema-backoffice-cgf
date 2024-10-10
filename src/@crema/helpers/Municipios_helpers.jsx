import { client as api } from '../core/AppRoutes/index';

import * as url from './url_helper';

export const GetMunicipios = (params) => {
  return api.get(`${url.GET_MUNICIPIOS}/${params}`);
};

export const GetMunicipiosTable = (params) => {
  return api.get(url.POST_MUNICIPIOS_MODULE, params);
};

export const GetAllMunicipios = (params) => {
  return api.get(url.GET_MUNICIPIOS_MODULE, params);
};
export const PostMunicipios = (params) => {
  return api.create(url.GET_MUNICIPIOS_MODULE, params);
};

export const PutMunicipios = (params) => {
  delete params.coMuncAsap;
  return api.put(url.GET_MUNICIPIOS_MODULE, params);
};

export const DeleteMunicipios = (params) => {
  return api.put(url.DELETE_MUNICIPIOS_MODULE, params);
};
