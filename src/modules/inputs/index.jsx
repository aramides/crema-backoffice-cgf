import {
  Card,
  CardContent,
  Typography,
  Grid,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  FormLabel,
} from '@mui/material';

import { FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import AppSelectField from '@crema/components/AppFormComponents/AppSelectField';
import AppCheckboxField from '@crema/components/AppFormComponents/AppCheckboxField';
import AppRadioField from '@crema/components/AppFormComponents/AppRadioField';
import AppDateFiled from '@crema/components/AppFormComponents/AppDateFiled';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import './index.css';

export default function Inputs() {
  const schema = Yup.object().shape({
    firstname: Yup.string().required('Nombre es requerido.'),
    origen: Yup.string().required('El origen es requerido.'),
    date: Yup.string().required('La fecha es requerida.'),
    opcion: Yup.string().required('Debe seleccionar uno.'),
  });

  const formik = useFormik({
    initialValues: {
      firstname: '',
      origen: '',
      nose: false,
      date: '',
      opcion: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
      >
        <Grid item xs={2}>
          <Card className='login-card' sx={{ minWidth: 475 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                Prueba de Inputs
              </Typography>

              <form className='form-row' onSubmit={formik.handleSubmit}>
                <FormikProvider value={formik}>
                  <AppTextField label='prueba text' name='firstname' />

                  <FormControl>
                    <InputLabel id='demo-select-label'>Hola</InputLabel>
                    <AppSelectField
                      labelId='demo-select-label'
                      id='demo-select'
                      name='origen'
                      label='Hola'
                    >
                      <MenuItem value='V'>V</MenuItem>
                      <MenuItem value='E'>E</MenuItem>
                    </AppSelectField>
                  </FormControl>

                  <AppCheckboxField label='nose' name='nose' />

                  <AppDateFiled
                    name='date'
                    label='Fecha prueba'
                    onChange={(value) =>
                      formik.setFieldValue(
                        'date',
                        value.toLocaleDateString('es-ES'),
                      )
                    }
                  />

                  <FormControl>
                    <FormLabel id='demo-radio'>Radio prueba</FormLabel>
                    <AppRadioField row={true} name='opcion' options={options} />
                  </FormControl>
                </FormikProvider>

                <Button type='submit' variant='contained'>
                  Ingresar
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}

const options = [
  { label: 'Opcion 1', value: '1' },
  { label: 'Opcion 2', value: '2' },
  { label: 'Opcion 3', value: '3' },
];
