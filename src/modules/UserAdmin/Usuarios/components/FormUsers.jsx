import AppDateFiled from '@crema/components/AppFormComponents/AppDateFiled';
import AppSelectField from '@crema/components/AppFormComponents/AppSelectField';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import schemaUsers from '@crema/constants/Schemas/SchemaUsers';
import { Button, Grid } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';

const FormUsers = ({ postUser }) => {
  const defaultValues = {
    email: '',
    password: '',
    nationality: 'V',
    ci: '',
    phone: '',
    failedAttempts: 0,
    isActive: true,
    birthdate: '',
    profileId: 1,
  };

  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: schemaUsers,
    onSubmit: (values) => {
      console.log(new Date(values.birthdate).toISOString());
      postUser({
        ...values,
        ci: values.ci,
        birthdate: '2000-08-01',
        profileId: Number(values.profileId),
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormikProvider value={formik}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <AppTextField label='Correo Electrónico' name='email' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextField label='Contraseña' name='password' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <AppSelectField
                  label='Nacionalidad'
                  name='nationality'
                  options={[
                    {
                      value: 'V',
                      label: 'V',
                    },
                    {
                      value: 'E',
                      label: 'E',
                    },
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <AppTextField label='Cèdula de Identidad' name='ci' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextField label='Telefono' name='phone' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppSelectField
              label='selecionar perfil'
              name='profileId'
              options={[
                {
                  value: '1',
                  label: '1',
                },
                {
                  value: '2',
                  label: '2',
                },
                {
                  value: '3',
                  label: '3',
                },
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppDateFiled label='Fecha de Nacimiento' name='birthdate' />
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
            }}
          >
            <Button variant='contained' type='submit'>
              Registrar
            </Button>
          </Grid>
        </Grid>
      </FormikProvider>
    </form>
  );
};

export default FormUsers;
