import React, { useState } from 'react';
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
// import { FilePond, registerPlugin } from 'react-filepond';
// import 'filepond/dist/filepond.min.css';
import InputArchive from '@crema/components/AppInputArchive/AppInputArchive';
import InputMaskArray from '@crema/components/AppInputMaskArray/AppInputMaskArray';

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

// registerPlugin();
const SignupJwtAuth = () => {
  // const { signUpUser } = useAuthMethod();
  const [errorFiles, setErrorFiles] = useState({});

  const RIF_TIPOS = [
    {
      id: 'J',
      label: 'J',
    },
    {
      id: 'C',
      label: 'C',
    },
    {
      id: 'G',
      label: 'G',
    },
  ];
  //quitar rif , cinstitutiva y certificado ,cuentabacaria,
  const ORG_TIPOS = [
    {
      id: '1',
      label: 'Comuna',
    },
    {
      id: '2',
      label: 'Consejo Comunal',
    },
    /*{
      id: "3",
      label: "OBPP",
    },
    {
      id: "4",
      label: "Movimientos Sociales",
    },*/
    {
      id: '5',
      label: 'Circuitos',
    },
  ];

  const cc = [
    { id: '0102', label: 'BANCO DE VENEZUELA' },
    { id: '0156', label: '100% BANCO' },
    { id: '0172', label: 'BANCAMIGA BANCO MICROFINANCIERO C A' },
    { id: '0114', label: 'BANCARIBE' },
    { id: '0171', label: 'BANCO ACTIVO' },
    { id: '0166', label: 'BANCO AGRICOLA DE VENEZUELA' },
    { id: '0175', label: 'BANCO BICENTENARIO DEL PUEBLO' },
    { id: '0128', label: 'BANCO CARONI' },
    { id: '0163', label: 'BANCO DEL TESORO' },
    { id: '0115', label: 'BANCO EXTERIOR' },
    { id: '0151', label: 'BANCO FONDO COMUN' },
    { id: '0173', label: 'BANCO INTERNACIONAL DE DESARROLLO' },
    { id: '0105', label: 'BANCO MERCANTIL' },
    { id: '0191', label: 'BANCO NACIONAL DE CREDITO' },
    { id: '0138', label: 'BANCO PLAZA' },
    { id: '0137', label: 'BANCO SOFITASA' },
    { id: '0104', label: 'BANCO VENEZOLANO DE CREDITO' },
    { id: '0168', label: 'BANCRECER' },
    { id: '0134', label: 'BANESCO' },
    { id: '0177', label: 'BANFANB' },
    { id: '0146', label: 'BANGENTE' },
    { id: '0174', label: 'BANPLUS' },
    { id: '0108', label: 'BBVA PROVINCIAL' },
    { id: '0157', label: 'DELSUR BANCO UNIVERSAL' },
    { id: '0169', label: 'MI BANCO' },
    { id: '0178', label: 'N58 BANCO DIGITAL BANCO MICROFINANCIERO S A' },
  ];

  const Formik = useFormik({
    initialValues: {
      firstName: '',
      code: '',
      idParroquia: '',
      rif: '',
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
  console.log(Formik.values);

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
                    options={ORG_TIPOS}
                    labelOptions='label'
                    valueOptions='id'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AppTextField name='code' label='Código SITUR' />
                </Grid>
                {Formik.values.perfil !== '5' ? (
                  <Grid item xs={12} sm={6}>
                    <Grid container spacing={3}>
                      <Grid item xs={4}>
                        <AppAutocompleteField
                          name='tipo_rif'
                          label='Tipo de RIF'
                          options={RIF_TIPOS}
                          valueOptions='id'
                          labelOptions='label'
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <AppTextField
                          name='rif'
                          label='RIF de la Organizacion'
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                ) : null}

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
                {Formik.values.perfil == '2' ? (
                  <Grid item xs={12} sm={6}>
                    <AppAutocompleteField
                      name='perteneceA'
                      label='Comuna / Circuito'
                    />
                  </Grid>
                ) : null}

                <Grid item xs={12} sm={6}>
                  <AppAutocompleteField
                    name='banco'
                    label='Banco'
                    options={cc}
                    multiLabel={true}
                    valueOptions='id'
                    labelOptions='label'
                    isClearable={false}
                    handleChange={(val) => {
                      Formik.setFieldValue('cuentaBancariaComuna', val.id);
                    }}
                    handleBlur={Formik.onBlur}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputMaskArray
                    label='Cuenta Bancaria de la organización'
                    name='cuentaBancariaComuna'
                    formik={Formik}
                    type='cuenta'
                    // isRequired={true}
                    mask={'9999-9999-999999999999'}
                    handleChange={Formik.onChange}
                    handleBlur={Formik.onBlur}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <AppTextField
                    name='email'
                    label='Correo Electronico de la Organizacion'
                  />
                </Grid>

                {Formik.values.perfil !== '5' ? (
                  <Grid item xs={12} sm={12}>
                    <InputArchive
                      label='Cargar Acta Constitutiva (de la Organizacion)'
                      name='actaConstitutiva'
                      acceptedFileTypes={['application/pdf']}
                      formik={Formik}
                      setErrorFiles={setErrorFiles}
                      errorFiles={errorFiles}
                    />
                  </Grid>
                ) : null}
                {Formik.values.perfil !== '5' ? (
                  <Grid item xs={12} sm={12}>
                    <InputArchive
                      label='Cargar Certificado (Opcional)'
                      name='certificado'
                      formik={Formik}
                      acceptedFileTypes={['application/pdf']}
                      setErrorFiles={setErrorFiles}
                      errorFiles={errorFiles}
                    />
                  </Grid>
                ) : null}
              </Grid>

              <div style={{ marginTop: 20 }}>
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
