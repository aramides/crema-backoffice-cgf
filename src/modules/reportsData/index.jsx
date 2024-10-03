import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { schemaReportsData } from './constants/schemaReportsData';
import './reportsData.css';

const ReportsData = () => {
  const [alteredData, setAlteredData] = useState(false);
  const [preData, setPreData] = useState({});

  const formik = useFormik({
    initialValues: {
      companyName: '',
      nroPatronalWorker: '',
      nroPatronalAdministrative: '',
      employerAddress: '',
      nameRepresentative: '',
      dniRepresentative: '',
      nroRepresentative: '',
      rifEmployer: '',
      employerEmail: '',
    },
    validationSchema: schemaReportsData,
    onSubmit: (values) => {
      console.log('values', values);
    },
  });

  useEffect(() => {
    if (Object.keys(preData).length > 0) {
      Object.keys(formik.values).forEach((name) => {
        if (preData[name] !== formik.values[name]) {
          setAlteredData(true);
        }
      });
    }
  }, [formik.values, preData]);

  useEffect(() => {
    setPreData(formik.values);
  }, []);

  return (
    <div style={{ overflow: 'hidden', position: 'relative', height: '100%' }}>
      <form onSubmit={formik.handleSubmit}>
        <Card>
          <CardHeader title={<IntlMessages id='modules.reportsData.title' />} />
          <CardContent>
            <FormikProvider value={formik}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <AppTextField label='Razón Social' name='companyName' />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    label='Número patronal de obrero'
                    name='nroPatronalWorker'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    label='Número patronal de administrativo y docentes'
                    name='nroPatronalAdministrative'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    label='Dirección del empleador o empleadora'
                    name='employerAddress'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    label='Apellidos y nombres del representante legal'
                    name='nameRepresentative'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    label='Cédula de identidad del representante legal'
                    name='dniRepresentative'
                    inputProps={{
                      maxLength: 8,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    label='Teléfono del representante legal'
                    name='nroRepresentative'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AppTextField
                    label='Registro de información fiscal (RIF) del empleador o empleadora'
                    name='rifEmployer'
                  />
                </Grid>
                <Grid item xs={12}>
                  <AppTextField
                    label='Dirección de correo electrónico del empleador o empleadora'
                    name='employerEmail'
                    multiline={true}
                  />
                </Grid>
              </Grid>
            </FormikProvider>
          </CardContent>
        </Card>
        <Card className={`${alteredData ? 'upActive' : ''} downActive`}>
          <CardContent>
            <p className='text-emergent'>
              {`${
                window.innerWidth < 640
                  ? ''
                  : 'Hay cambios sin guardar, ¿Quiere guardar los cambios?'
              }`}{' '}
              <span>
                <Button type='submit'>Guardar</Button>
                <Button
                  onClick={() => {
                    setAlteredData(false);
                    formik.handleReset();
                  }}
                >
                  Reestablecer
                </Button>
              </span>
            </p>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default ReportsData;
