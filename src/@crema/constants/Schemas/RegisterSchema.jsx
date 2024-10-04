import * as Yup from 'yup';

export const registerSchema = Yup.object({
  firstName: Yup.string().required('El nombre de la organización es requerido'),
  /*tipoorganizacion: Yup.string().required(
    "El tipo de organización es requerido"
  ),*/
  perfil: Yup.string().required('El tipo de organización es requerido'),
  nombreComunidad: Yup.string().required(
    'El nombre de la comunidad es requerido',
  ),
  code: Yup.string().required('El código de la organización es requerido'),
  idParroquia: Yup.string().required('La parroquia es requerida'),
  rif: Yup.string().when('perfil', (perfil, schema) => {
    if (perfil[0] != '5') {
      return schema
        .required('El rif de la organización es requerido')
        .max(9, 'El rif es inválido (debe tener 9 dígitos)')
        .min(9, 'El rif es inválido (debe tener 9 dígitos)');
    }
  }),
  email: Yup.string()
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es requerido'),
  idMunicipio: Yup.string().required('El municipio es requerido'),
  estadoId: Yup.string().required('El estado es requerido'),
  cuentaBancariaComuna: Yup.string().when('perfil', (perfil, schema) => {
    if (perfil[0] != '5') {
      return schema
        .required('La cuenta bancaria es requerida')
        .matches(
          /^[0-9-]+$/,
          'Número de cuenta inválido. No debe tener letras ni guiones ni puntos',
        )
        .max(22, 'Número de cuenta inválido. Debe tener 20 dígitos')
        .min(22, 'Número de cuenta inválido. Debe tener 20 dígitos');
    }
  }),
  banco: Yup.string().when('perfil', (perfil, schema) => {
    if (perfil[0] != '5') {
      return schema.required('El banco es requerido');
    }
  }),

  actaConstitutiva: Yup.array().when('perfil', (perfil, schema) => {
    if (perfil[0] != '5') {
      return schema.min(1, 'El Acta Constitutiva es requerida');
    }
  }),
  certificado: Yup.mixed(),
  tipo_rif: Yup.string().when('perfil', (perfil, schema) => {
    if (perfil[0] != '5') {
      return schema.required('El tipo de rif es requerido');
    }
  }),
  /* 

  rif: Yup.string()
    .required("El rif de la organización es requerido")
    .max(9, "El rif es inválido (debe tener 9 dígitos)")
    .min(9, "El rif es inválido (debe tener 9 dígitos)"),

  voceros: Yup.array().of(
    Yup.object().shape({
      cedula: Yup.number()
        .typeError("Solo se permiten números")
        .required("La cédula es requerida"),
      origen: Yup.string().required("El origen es requerido"),
      nombre: Yup.string().required("El nombre es requerido"),
      apellido: Yup.string().required("El apellido es requerido"),
      email: Yup.string()
        .email("El correo electrónico no es válido")
        .required("El correo electrónico es requerido"),
      telf_prefijo: Yup.number().required("El prefijo es requerido"),
      telefono: Yup.string()
        .required("El teléfono es requerido")
        .matches(/^[0-9]+$/, "Solo se permiten numeros")
        .min(7, "Número de teléfono invalido. Debe tener 7 dígitos")
        .max(7, "Número de teléfono invalido. Debe tener 7 dígitos"),
    })
  ), */
});
