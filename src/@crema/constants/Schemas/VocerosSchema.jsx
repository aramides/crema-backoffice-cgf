import * as Yup from 'yup';

export const vocerosSchema = Yup.object({
  dni: Yup.string()
    .typeError('Solo se permiten números')
    .matches(/^[0-9.]+$/, 'Solo se permiten numeros')
    .required('La cédula es requerida'),
  origin: Yup.string().required('El origen es requerido'),
  nombre: Yup.string().required('El nombre es requerido'),
  apellido: Yup.string().required('El apellido es requerido'),
  email: Yup.string()
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es requerido'),
  telf_prefijo: Yup.number().required('El prefijo es requerido'),
  telefono: Yup.string()
    .required('El teléfono es requerido')
    .matches(/^[0-9-]+$/, 'Solo se permiten numeros')
    .min(9, 'Número de teléfono invalido. Debe tener 7 dígitos')
    .max(9, 'Número de teléfono invalido. Debe tener 7 dígitos'),
  isAccountant: Yup.bool(),
});
