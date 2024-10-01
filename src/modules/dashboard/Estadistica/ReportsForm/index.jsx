import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AppDialog from '@crema/components/AppDialog';
import SaveIcon from '@mui/icons-material/Save';
import { Button, Grid, Typography } from '@mui/material';
import AppSelectField from '@crema/components/AppFormComponents/AppSelectField';
import { FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import SummarizeIcon from '@mui/icons-material/Summarize';

const ReportsFormModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const rolUsuario = [
    { label: 'Analista', value: 'analista' },
    { label: 'Coordinador', value: 'coordinador' },
    { label: 'Director', value: 'director' },
  ];

  const estatus = [
    { label: 'Pendientes', value: 'pendientes' },
    { label: 'Recibidas', value: 'recibidas' },
    { label: 'procesadas', value: 'procesadas' },
    { label: 'Reasignadas', value: 'reasignadas' },
    { label: 'Rechazadas', value: 'rechazadas' },
  ];

  const estados = [
    { label: 'DTTO CAPITAL', value: 'DTTO CAPITAL' },
    { label: 'EDO. ANZOATEGUI', value: 'EDO. ANZOATEGUI' },
    { label: 'EDO. APURE', value: 'EDO. APURE' },
    { label: 'EDO. BARINAS', value: 'EDO. BARINAS' },
    { label: 'EDO. BOLIVAR', value: 'EDO. BOLIVAR' },
  ];

  const analista = [
    { label: 'Juan uno', value: 'juan1' },
    { label: 'Juan dos', value: 'juan2' },
    { label: 'Juan tres', value: 'juan3' },
    { label: 'Juan cuatro', value: 'juan4' },
  ];

  const schema = Yup.object().shape({
    rolUsuario: Yup.string().required('Rol del Usuario es requerido.'),
    estatus: Yup.string().required('Estatus de la Solicitud es requerido.'),
    estado: Yup.string().required('Estado de la Solicitud es requerida.'),
    analista: Yup.string().required('Debe seleccionar un Analista asignado..'),
  });

  const formik = useFormik({
    initialValues: {
      rolUsuario: '',
      estatus: '',
      estado: '',
      analista: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ position: 'fixed', top: 166, right: 16, zIndex: 10 }}>
          <Fab onClick={handleOpen} color='primary' variant='extended'>
            <SaveIcon sx={{ mr: 1 }} />
            Reporte
          </Fab>
        </Box>
      </Box>
      <AppDialog open={open} onClose={handleClose} title='Generar Reporte'>
        <form onSubmit={formik.handleSubmit}>
          <FormikProvider value={formik}>
            <Grid container spacing={5} direction='row' sx={{ my: 5 }}>
              <Grid item xs={12} md={4} lg={4}>
                <Typography sx={{ fontSize: 12, mb: 3 }} color='text.secondary'>
                  Rol de Usuario
                </Typography>
                <AppSelectField
                  name='rolUsuario'
                  id='usuario'
                  label='Usuario'
                  labelId='demo-select-label'
                  options={rolUsuario}
                />
              </Grid>

              <Grid item xs={12} md={4} lg={4}>
                <Typography sx={{ fontSize: 12, mb: 3 }} color='text.secondary'>
                  Estatus de la Solicitud
                </Typography>
                <AppSelectField
                  name='estatus'
                  label='Estatus'
                  id='estatus'
                  labelId='demo-select-label'
                  options={estatus}
                />
              </Grid>

              <Grid item xs={12} md={4} lg={4}>
                <Typography sx={{ fontSize: 12, mb: 3 }} color='text.secondary'>
                  Estado
                </Typography>
                <AppSelectField
                  name='estado'
                  label='Estado'
                  id='estado'
                  labelId='demo-select-label'
                  options={estados}
                />
              </Grid>

              <Grid item xs={12} md={4} lg={4}>
                <Typography sx={{ fontSize: 12, mb: 3 }} color='text.secondary'>
                  Analista Asignado
                </Typography>
                <AppSelectField
                  name='analista'
                  label='Analista'
                  id='analista'
                  labelId='demo-select-label'
                  options={analista}
                />
              </Grid>
            </Grid>
          </FormikProvider>

          <Grid container justifyContent='flex-end'>
            <Button type='submit' variant='contained' sx={{ mb: 5 }}>
              <SummarizeIcon />
              Generar
            </Button>
          </Grid>
        </form>
      </AppDialog>
    </div>
  );
};

export default ReportsFormModal;
