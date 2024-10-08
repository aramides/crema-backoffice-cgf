/**
 * Get Assets Url
 * @param fileUrl string
 * @returns fileUrl string
 */
export const getAssetsUrl = (fileUrl) => {
  return `/assets/images/${fileUrl}`;
};

export const GET_SAIME = '/saime';

// Comunas

export const GET_COMUNA_USERS_ALL = '/usuariosComunas/finAllUsuariosComunas';
export const GET_COMUNA_USERS = '/usuariosComunas/';
export const POST_COMUNA_USERS = '/usuariosComunas/';
export const DELETE_COMUNA_USERS = '/usuariosComunas/';
export const PATCH_COMUNA_USERS = '/usuariosComunas/';
