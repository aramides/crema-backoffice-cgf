import * as Yup from 'yup';

const schemaPerms = Yup.object().shape({
  name: Yup.string().required('Scriba un permiso.'),
  description: Yup.string().required('Scriba una descripción.'),
});

export default schemaPerms;
