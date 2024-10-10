import { GetSaime } from './SaimeHelper';
import jwtAxios from '@crema/services/auth/jwt-auth';
import * as url from './UrlHelper';

export const GetVoceros = (params) => {
  return jwtAxios.get(url.GET_COMUNA_USERS_ALL, params);
};

export const PostVoceros = (params) => {
  return jwtAxios.post(url.POST_COMUNA_USERS, params);
};

export const DeleteVoceros = (id) => {
  return jwtAxios.update(url.DELETE_COMUNA_USERS + id, { isDelete: true });
};

export const PatchVoceros = (params) => {
  const { id, ...rest } = params;
  return jwtAxios.update(url.PATCH_COMUNA_USERS + id, rest);
};

/***
 * @param {import('formik').FormikState} formik - formik form object */
export const getPersona = async (formik) => {
  const cedula = formik.values.dni.replaceAll('.', '');
  const origen = formik.values.origin;
  const response = await GetSaime({ origen: origen, cedula: cedula });
  const data = response.data;
  if (!data.primerNombre) return;
  const nombre = data.primerNombre + ' ' + data.segundoNombre;
  const apellido = data.primerApellido + ' ' + data.segundoApellido;
  formik.setFieldValue('nombre', nombre);
  formik.setFieldValue('apellido', apellido);
  formik.setFieldValue('firstName', data.primerNombre);
  formik.setFieldValue('middleName', data.segundoNombre);
  formik.setFieldValue('lastName', data.primerApellido);
  formik.setFieldValue('secondLastName', data.segundoApellido);
  formik.setFieldValue('sex', data.sexo);
  formik.setFieldValue('dateBirth', data.fechaNacimiento);
  formik.validateForm();
};
