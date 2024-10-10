import { client as api } from '../core/AppRoutes/index';

import * as url from './url_helper';

export const GetParroquias = (params) => {
  return api.get(`${url.GET_PARROQUIAS}/${params}`);
};
export const GetParroquiasTable = (params) => {
  return api.get(url.POST_PARROQUIAS_MODULE, params);
};
export const GetAllParroquias = (params) => {
  return api.get(url.GET_PARROQUIAS_MODULE, params);
};

export const PostParroquias = (params) => {
  return api.create(url.GET_PARROQUIAS_MODULE, params);
};

export const PutParroquias = (params) => {
  delete params.coPrrqAsap;

  return api.put(url.GET_PARROQUIAS_MODULE, params);
};

export const DeleteParroquias = (params) => {
  return api.put(url.DELETE_PARROQUIAS_MODULE, params);
};
