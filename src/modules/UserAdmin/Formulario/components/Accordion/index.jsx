import { FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import ModulesRoles from '../ModulesRoles';
import ModulesPerms from '../ModulesPerms';
import Modules from '../Modules';
import ModulesUsers from '../ModulesUsers';

const ModulesAccordion = () => {
  const formik = useFormik({
    initialValues: {
      rol: false,
      nombre_rol: '',
      asignar_rol: '',
      permisos: false,
      analista: false,
      coordinador: false,
      director: false,
      modulos: false,
      usuario: false,
      nuevo_usuario: '',
      crear: false,
      editar: false,
      filtrar: false,
      eliminar: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    if (event.target.type === 'checkbox') {
      return;
    }

    setExpanded(newExpanded ? panel : false);
  };

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <ModulesRoles
          expanded={expanded}
          onChange={handleChange('panel1')}
          panel='panel1'
          formik={formik}
          nombre_rol='nombre_rol'
        />
        <ModulesPerms
          expanded={expanded}
          onChange={handleChange('panel2')}
          panel='panel2'
          formik={formik}
          nombre_rol='nombre_rol'
        />
        <Modules
          expanded={expanded}
          onChange={handleChange('panel3')}
          panel='panel3'
          formik={formik}
          nombre_rol='nombre_rol'
        />
        <ModulesUsers
          expanded={expanded}
          onChange={handleChange('panel4')}
          panel='panel4'
          formik={formik}
        />
      </form>
    </FormikProvider>
  );
};

export default ModulesAccordion;
