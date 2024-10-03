import React from 'react';
import Button from '@mui/material/Button';
import { Checkbox, Grid } from '@mui/material';
import { Form, Formik, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';

import AppInfoView from '@crema/components/AppInfoView';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import { useAuthMethod } from '@crema/hooks/AuthHooks';
import { Fonts } from '@crema/constants/AppEnums';
import { Link } from 'react-router-dom';
import AuthWrapper from '../AuthWrapper';
import { registerSchema } from '@crema/constants/Schemas/RegisterSchema';
import AppAutocompleteField from '@crema/components/AppFormComponents/AppAutocompleteField';

const validationSchema = yup.object({
  name: yup.string().required(<IntlMessages id='validation.nameRequired' />),
  email: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(<IntlMessages id='validation.emailRequired' />),
  password: yup
    .string()
    .required(<IntlMessages id='validation.passwordRequired' />),
});

const SignupJwtAuth = () => {
  const { signUpUser } = useAuthMethod();

  const Formik = useFormik({
    initialValues: {
      firstName: '',
      code: '',
      idParroquia: '',
      rif: 'C',
      email: '',
      idMunicipio: '',
      estadoId: '',
      cuentaBancariaComuna: '0102',
      tipo_rif: 'C',
      actaConstitutiva: [],
      certificado: [],
      nombreComunidad: '',
      perfil: '1',
      perteneceA: '',
      banco: '0102',
    },
    validationSchema: registerSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <AuthWrapper>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', mb: 5 }}>
          <FormikProvider value={Formik}>
            <Form style={{ textAlign: 'left' }} noValidate autoComplete='off'>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <AppAutocompleteField
                    name='perfil'
                    label='Tipo de Organización'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AppTextField name='code' label='Código SITUR' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <AppAutocompleteField
                        name='tipo_rif'
                        label='Tipo de RIF'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <AppTextField name='rif' label='RIF de la Organizacion' />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AppTextField
                    name='firstName'
                    label='Nombre de la Organizacion'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AppAutocompleteField name='estadoId' label='Estado' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AppAutocompleteField name='idMunicipio' label='Municipio' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AppAutocompleteField name='idParroquia' label='Parroquia' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AppTextField
                    name='nombreComunidad'
                    label='Nombre de la Comunidad'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AppTextField
                    name='nombreComunidad'
                    label='Comunidad o Sector'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AppAutocompleteField
                    name='perteneceA'
                    label='Comuna / Circuito'
                  />
                </Grid>
              </Grid>

              <div>
                <Button
                  variant='contained'
                  color='primary'
                  sx={{
                    minWidth: 160,
                    fontWeight: Fonts.REGULAR,
                    fontSize: 16,
                    textTransform: 'capitalize',
                    padding: '4px 16px 8px',
                  }}
                  type='submit'
                >
                  <IntlMessages id='common.signup' />
                </Button>
              </div>
            </Form>
          </FormikProvider>
        </Box>

        <Box
          sx={{
            color: 'grey.700',
          }}
        >
          <span style={{ marginRight: 4 }}>
            <IntlMessages id='common.alreadyHaveAccount' />
          </span>
          <Box
            component='span'
            sx={{
              fontWeight: Fonts.MEDIUM,
              '& a': {
                color: (theme) => theme.palette.primary.main,
                textDecoration: 'none',
              },
            }}
          >
            <Link to='/signIn'>
              <IntlMessages id='common.signIn' />
            </Link>
          </Box>
        </Box>

        <AppInfoView />
      </Box>
    </AuthWrapper>
  );
};

export default SignupJwtAuth;
