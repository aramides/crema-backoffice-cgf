import { Button } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';

import PropTypes from 'prop-types';
import schemaPerms from '@crema/constants/Schemas/SchemaPerms';

import './index.css';
const PermsForm = ({ postPerm, editPerm, perm, isEdit = false, onClose }) => {
  const defaultValues = {
    name: perm ? perm.name : '',
    description: perm ? perm.description : '',
  };

  const on_Submit = (values) => {
    if (isEdit === true) {
      editPerm({ ...values, id: perm.id });
    } else {
      postPerm({ ...values });
    }
  };

  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: schemaPerms,
    onSubmit: (values) => {
      on_Submit(values);
      onClose();
    },
  });

  return (
    <div>
      <form className='form-row' onSubmit={formik.handleSubmit}>
        <FormikProvider value={formik}>
          <AppTextField label='Permiso' name='name' />
          <AppTextField label='Descripción' name='description' />
        </FormikProvider>

        <Button type='submit' variant='contained'>
          {isEdit ? 'Editar' : 'agregar'}
        </Button>
      </form>
    </div>
  );
};

export default PermsForm;

PermsForm.propTypes = {
  postPerm: PropTypes.func,
  editPerm: PropTypes.func,
  perm: PropTypes.object,
  isEdit: PropTypes.bool,
  onClose: PropTypes.func,
};
