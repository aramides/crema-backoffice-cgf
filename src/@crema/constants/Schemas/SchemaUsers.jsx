import * as yup from 'yup';

const schemaUsers = yup.object().shape({
  email: yup
    .string()
    .required('El correo electrónico es requerido')
    .email('El correo electrónico debe ser válido'),
  password: yup
    .string()
    .required('La contraseña es requerida')
    .min(8, 'La contraseña debe tener al menos 8 caracteres'),
  nationality: yup.string().required('La nacionalidad es requerida'),
  ci: yup
    .string()
    .required('La cédula de identidad es requerida')
    .matches(/^[0-9]+$/, 'Solo se permiten números')
    .min(8, 'La cédula debe tener al menos 8 caracteres'),
  phone: yup.string().required('El teléfono es requerido'),
  isActive: yup.boolean(),
  birthdate: yup.string().required('La fecha de nacimiento es requerida'),
  profileId: yup.number().required('El  perfil es requerido'),
});

export default schemaUsers;
