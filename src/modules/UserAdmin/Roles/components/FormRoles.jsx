import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import schemaRoles from '@crema/constants/Schemas/SchemaRoles';
import { Button } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import './index.css';

const FormRol = ({ postRol, postEdit, rol, isEdit = false, onClose }) => {
  const { messages } = useIntl();

  //Si se va a modificar un rol, esto revisa si el rol existe y agarra sus valores, si no, los pone vaci
  const defaultValues = {
    name: rol ? rol.name : '',
    description: rol ? rol.description : '',
  };

  const on_Submit = (values) => {
    if (isEdit === true) {
      postEdit({ ...values, id: rol.id });
    } else {
      postRol({ ...values });
    }
  };

  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: schemaRoles,
    onSubmit: (values) => {
      on_Submit(values);
      onClose();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='form-row'>
      <FormikProvider value={formik}>
        <AppTextField label='Nombre de Rol' name='name' />
        <AppTextField label='Descripción' name='description' />
      </FormikProvider>
      <Button variant='contained' type='submit'>
        {isEdit
          ? messages['modules.roles.editButton']
          : messages['modules.roles.addButton']}
      </Button>
    </form>
  );
};

export default FormRol;

FormRol.propTypes = {
  postRol: PropTypes.func,
  postEdit: PropTypes.func,
  rol: PropTypes.object,
  isEdit: PropTypes.bool,
  onClose: PropTypes.func,
};
