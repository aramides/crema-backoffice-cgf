import { useState } from 'react';
import AppDialog from '@crema/components/AppDialog';
import { Button, Grid, Typography } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import AppSelectField from '@crema/components/AppFormComponents/AppSelectField';
import AppDateFiled from '@crema/components/AppFormComponents/AppDateFiled';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import DisplayInfo from '../DisplayInfo';
import SignatureLoader from '../SignatureLoader';
import * as Yup from 'yup';
import AppScrollbar from '@crema/components/AppScrollbar';

const DirectorsFormModal = () => {
  const token = import.meta.env.VITE_APP_NOMINA_TOKEN;

  const [verificado, setVerificado] = useState(false);
  const [nombre, setNombre] = useState('');
  const [nacimiento, setNacimiento] = useState('');
  const [ingreso, setIngreso] = useState('');
  const [cargo, setCargo] = useState('');

  function numberVerification(input) {
    let regex = /^[0-9-]+$/;
    return regex.test(input);
  }

  const schema = Yup.object().shape({
    origen: Yup.string().required('El Origen es requerido'),
    cedula: Yup.number()
      .required('La Cédula es requerida')
      .min(0, 'La Cédula debe ser positiva')
      .typeError('La Cédula debe ser un numero valido'),
    cargo: Yup.string().required('El Cargo es requerido'),
    nro_resolucion: Yup.string().required(
      'El número de Resolución es requerido',
    ),
    fecha_resolucion: Yup.string().required(
      'La fecha de Resolución es requerida',
    ),
    nro_gaceta: Yup.string().required('El número de Gaceta es requerido'),
    fecha_gaceta: Yup.string().required('La fecha de Gaceta es requerida'),
    firma: Yup.array()
      .min(1, 'se requiere la Firma')
      .required('La firma es requerida'),
    estados: Yup.array()
      .min(1, 'Se requiere almenos un Estado')
      .required('Los Estados son requeridos'),
  });

  const busquedaCedula = async (values) => {
    try {
      const response = await fetch(
        `https://operativos-admin.mppe.gob.ve/nomina/trabajador/${values.origen}/${values.cedula}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.ok) {
        const data = await response.json();

        setNombre(data[0].nombre_apellido);
        setNacimiento(data[0].fecha_nacimiento);
        setIngreso(data[0].fecha_ingreso);
        setCargo(data[0].cargo);
        setVerificado(true);
      } else {
        formik.setFieldError('cedula', 'La Cédula no es valida');
        setVerificado(false);
      }
    } catch (error) {
      setVerificado(false);
    }
  };

  //Revisa mediante regex si el texto son numeros/-
  const onSubmit = async (values, { setFieldError }) => {
    if (!numberVerification(values.nro_resolucion)) {
      setFieldError('nro_resolucion', 'La entrada debe ser un numero valido');
      return;
    }
    if (!numberVerification(values.nro_gaceta)) {
      setFieldError('nro_gaceta', 'La entrada debe ser un numero valido');
      return;
    }

    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      cedula: '',
      origen: '',
      cargo: '',
      nro_resolucion: '',
      fecha_resolucion: '',
      nro_gaceta: '',
      fecha_gaceta: '',
      firma: [],
      estados: [],
    },
    validationSchema: schema,
    onSubmit: onSubmit,
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setVerificado(false);
    formik.resetForm(); //Reinicia los valores del formik
  };

  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>
        AÑADIR
      </Button>
      <AppDialog
        title='Asignación de Director'
        open={open}
        onClose={handleClose}
      >
        <form onSubmit={formik.handleSubmit}>
          <AppScrollbar sx={{ maxHeight: 400, mr: 10 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <FormikProvider value={formik}>
                <Grid container spacing={3} direction='row' sx={{ mb: 10 }}>
                  <Grid item xs={12} md={3} lg={3}>
                    <Typography
                      sx={{ fontSize: 12, mb: 3, mt: 3 }}
                      color='text.secondary'
                    >
                      Origen
                    </Typography>
                    <AppSelectField
                      name='origen'
                      label='origen'
                      labelId='origen'
                      id='origen'
                      options={options}
                    />
                  </Grid>

                  <Grid item xs={12} md={9} lg={9}>
                    <Typography
                      sx={{ fontSize: 12, mb: 3, mt: 3 }}
                      color='text.secondary'
                    >
                      Cédula
                    </Typography>
                    <AppTextField
                      name='cedula'
                      label='Cédula'
                      type='numeric'
                      variant='outlined'
                      min='0'
                    />
                  </Grid>

                  {verificado ? (
                    <>
                      <Grid
                        container
                        justifyContent='center'
                        alignItems='center'
                      >
                        <DisplayInfo
                          nombre={nombre}
                          nacimiento={nacimiento}
                          ingreso={ingreso}
                          cargo={cargo}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography
                          sx={{ fontSize: 12, mb: 3, mt: 3 }}
                          color='text.secondary'
                        >
                          Cargo
                        </Typography>
                        <AppTextField label='Cargo' name='cargo' />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Typography
                          sx={{ fontSize: 12, mb: 3, mt: 3 }}
                          color='text.secondary'
                        >
                          Número Resolución
                        </Typography>
                        <AppTextField
                          label='Numero de Resolucion'
                          name='nro_resolucion'
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Typography
                          sx={{ fontSize: 12, mb: 3, mt: 3 }}
                          color='text.secondary'
                        >
                          Fecha Resolución
                        </Typography>
                        <AppDateFiled
                          label='Fecha de Resolucion'
                          name='fecha_resolucion'
                          onChange={(value) =>
                            formik.setFieldValue(
                              'fecha_resolucion',
                              value.toLocaleDateString('es-ES'),
                            )
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Typography
                          sx={{ fontSize: 12, mb: 3, mt: 3 }}
                          color='text.secondary'
                        >
                          Número Gaceta
                        </Typography>
                        <AppTextField
                          label='Numero de Gaceta Oficial'
                          name='nro_gaceta'
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Typography
                          sx={{ fontSize: 12, mb: 3, mt: 3 }}
                          color='text.secondary'
                        >
                          Fecha Gaceta
                        </Typography>
                        <AppDateFiled
                          label='Fecha de la Gaceta Oficial'
                          name='fecha_gaceta'
                          onChange={(value) =>
                            formik.setFieldValue(
                              'fecha_gaceta',
                              value.toLocaleDateString('es-ES'),
                            )
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={12}>
                        <Typography
                          sx={{ fontSize: 12, mb: 3, mt: 3 }}
                          color='text.secondary'
                        >
                          Estados
                        </Typography>
                        <AppSelectField
                          multiple={true}
                          label='Estados'
                          labelId='Estados'
                          id='estados'
                          name='estados'
                          options={estados}
                        />
                      </Grid>

                      <Grid item xs={12} md={12} sx={{ mt: 2 }}>
                        <Typography
                          sx={{ fontSize: 12, mb: 3, mt: 3 }}
                          color='text.secondary'
                        >
                          Firma Digitalizada
                        </Typography>
                        <SignatureLoader name='firma' />
                      </Grid>
                    </>
                  ) : null}
                </Grid>
                {verificado ? (
                  <Button variant='contained' type='submit'>
                    Enviar
                  </Button>
                ) : (
                  <Button
                    variant='contained'
                    onClick={() => {
                      busquedaCedula(formik.values);
                    }}
                  >
                    Consultar trabajador
                  </Button>
                )}
              </FormikProvider>
            </LocalizationProvider>
          </AppScrollbar>
        </form>
      </AppDialog>
    </div>
  );
};

export default DirectorsFormModal;

const options = [
  { label: 'V', value: 'V' },
  { label: 'E', value: 'E' },
];

const estados = [
  { label: 'DTTO CAPITAL', value: 'DTTO CAPITAL' },
  { label: 'EDO. ANZOATEGUI', value: 'EDO. ANZOATEGUI' },
  { label: 'EDO. APURE', value: 'EDO. APURE' },
  { label: 'EDO. BARINAS', value: 'EDO. BARINAS' },
  { label: 'EDO. BOLIVAR', value: 'EDO. BOLIVAR' },
];
