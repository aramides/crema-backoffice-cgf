import { Grid, Button } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import '../index.css';
import MultipleSelectChip from '@crema/components/AppFormComponents/AppMultiSelect';
import AppIconList from '@crema/components/AppIconList';
import AppSwitchLabel from '@crema/components/AppFormComponents/AppSwitchLabel';
import { useEffect } from 'react';
export default function Inputs() {
  const schema = Yup.object().shape({
    NameModule: Yup.string()
      .required('este campo es requerido.')
      .min(3, 'minimo 3 caracteres')
      .max(20, 'maximo 20 caracteres'),
    DescModule: Yup.string().required('este campo es requerido.'),
    permi: Yup.array().min(1, 'Debe seleccionar al menos un elemento'),
    SubModulo: Yup.boolean(),
    icon: Yup.lazy((_, context) => {
      if (context.parent.SubModulo === false) {
        return Yup.string().required('El Icono es requerido');
      } else {
        return Yup.string();
      }
    }),
  });

  const formik = useFormik({
    initialValues: {
      NameModule: '',
      DescModule: '',
      Permisos: '',
      icon: '',
      MostrarenMenu: false,
      SubModulo: false,
      permi: [],
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (values.SubModulo) {
        delete values.icon;
      }

      console.log(values);
    },
  });

  const handleChange = (event) => {
    console.log(event);
  };

  console.log(formik.errors);

  useEffect(() => {
    console.log(formik.values.MostrarenMenu || formik.values.SubModulo);
  }, [formik.values]);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div>
        <form className='form-row' onSubmit={formik.handleSubmit}>
          <FormikProvider value={formik}>
            <Grid container spacing={2}>
              <Grid item xs={12} className='SwitchesForm'>
                <AppSwitchLabel
                  name='SubModulo'
                  label='SubModulo'
                  labelPlacement='top'
                />

                <AppSwitchLabel
                  name='MostrarenMenu'
                  label='Mostrar en Menu'
                  labelPlacement='top'
                />
              </Grid>
              <Grid item xs={12}>
                <AppTextField label='Nombre del Modulo' name='NameModule' />
              </Grid>
              <Grid item xs={12}>
                <AppTextField
                  label='Descripcion del Modulo '
                  name='DescModule'
                />
              </Grid>
              <Grid item xs={12}>
                <MultipleSelectChip
                  name='permi'
                  data={[
                    {
                      id: 1,
                      label: 'permiso 1',
                    },

                    {
                      id: 2,
                      label: 'permiso 2',
                    },

                    {
                      id: 3,
                      label: 'permiso 3',
                    },

                    {
                      id: 4,
                      label: 'permiso 4',
                    },
                  ]}
                  label='permisos'
                  width={'100%'}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            {!formik.values.SubModulo && (
              <AppIconList formik={formik} name='icon' />
            )}
          </FormikProvider>

          <Button type='submit' variant='contained'>
            Agrear
          </Button>
        </form>
      </div>
    </LocalizationProvider>
  );
}
