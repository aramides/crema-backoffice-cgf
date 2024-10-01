import schemaRoles from '@crema/constants/Schemas/SchemaRoles';
import { Button, Grid, Typography } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

const DeleteDialog = ({ postDelete, rol, onCancel }) => {
  const { messages } = useIntl();

  const defaultValues = {
    name: rol ? rol.name : '',
    description: rol ? rol.description : '',
  };

  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: schemaRoles,
    onSubmit: (values) => {
      postDelete({ ...values, id: rol.id });
      onCancel();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormikProvider value={formik}>
        <Grid container spacing={4} alignItems='center' justifyContent='center'>
          <Grid
            item
            xs={12}
            container
            alignItems='center'
            justifyContent='center'
          >
            <Typography variant='h4'>
              {messages['modules.roles.deleteLabel']}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} container justifyContent='center'>
            <Button
              variant='outlined'
              onClick={onCancel}
              style={{ marginRight: 8 }}
            >
              {messages['modules.roles.cancelButton']}
            </Button>
            <Button variant='contained' type='submit'>
              {messages['modules.roles.deleteButton']}
            </Button>
          </Grid>
        </Grid>
      </FormikProvider>
    </form>
  );
};

export default DeleteDialog;

DeleteDialog.propTypes = {
  postDelete: PropTypes.func,
  onCancel: PropTypes.func,
  rol: PropTypes.object,
};
