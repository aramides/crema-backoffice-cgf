import * as yup from 'yup';

const schemaRoles = yup.object().shape({
  name: yup.string().required('El nombre del Rol es requerido.'),
  description: yup.string().required('La descripcion del Rol es requerida.'),
});

export default schemaRoles;
