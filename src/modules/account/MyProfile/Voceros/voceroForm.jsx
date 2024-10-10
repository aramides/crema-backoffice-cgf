import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import { Fonts } from '@crema/constants/AppEnums';
import AppAutoComplete from '@crema/components/AppFormComponents/AppAutoComplete';
import { Form, useFormik, FormikProvider } from 'formik';
import { vocerosSchema } from '@crema/constants/Schemas/VocerosSchema';
import { initialValueVoceros } from '@crema/constants/InitialValues/VocerosValues';
import { CedulaOptions } from '@crema/constants/Options/CedulaOptions';
import { TelPrefixOptions } from '@crema/constants/Options/TelPrefixOptions';
import { getPersona, PostVoceros } from '@crema/helpers/VoceroHelper';
import AppCheckboxField from '@crema/components/AppFormComponents/AppCheckboxField';
import InputMaskArray from '@crema/components/AppInputMaskArray/AppInputMaskArray';
import PropTypes from 'prop-types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const VoceroForm = ({ handleClose = () => {} }) => {
  const queryClient = useQueryClient();

  const { mutate: handleSubmit } = useMutation({
    mutationFn: async (data) => {
      data.cellphone = data.telf_prefijo + data.telefono.replaceAll('-', '');
      data.dni = data.dni.replaceAll('.', '');
      delete data.nombre;
      delete data.apellido;
      delete data.telefono;
      delete data.telf_prefijo;
      await PostVoceros(data);
      handleClose();
    }, // Replace with your mutation function
    onSuccess: () => {
      // Invalidate queries related to the mutation
      queryClient.invalidateQueries({ queryKey: ['voceros'] });
    },
  });

  const Formik = useFormik({
    initialValues: initialValueVoceros,
    validationSchema: vocerosSchema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <FormikProvider value={Formik}>
        <Form
          style={{
            textAlign: 'left',
            width: '700px',
            maxWidth: '100%',
            defaultValue: '1',
          }}
          noValidate
          autoComplete='off'
        >
          <Grid container spacing={3}>
            <Grid item xs={5} sm={4}>
              <AppAutoComplete
                name='origin'
                label='Origen'
                options={CedulaOptions}
                optionLabel='label'
                optionValue='id'
                variant='outlined'
                size='medium'
                isClearable={false}
              />
            </Grid>
            <Grid item xs={7} sm={8}>
              <InputMaskArray
                name='dni'
                label='Cédula'
                variant='outlined'
                size='medium'
                mask={'99.999.999'}
                formik={Formik}
                handleBlur={() => getPersona(Formik)}
              />
            </Grid>
            <Grid item xs={6}>
              <AppTextField
                name={`nombre`}
                label='Nombre'
                variant='outlined'
                size='medium'
                disabled={true}
              />
            </Grid>
            <Grid item xs={6}>
              <AppTextField
                name={`apellido`}
                label='Apellido'
                variant='outlined'
                size='medium'
                disabled={true}
              />
            </Grid>
            <Grid item xs={4}>
              <AppAutoComplete
                name={`telf_prefijo`}
                label={'Prefijo'}
                options={TelPrefixOptions}
                variant='outlined'
                size='medium'
                isClearable={false}
              />
            </Grid>
            <Grid item xs={8}>
              <InputMaskArray
                formik={Formik}
                name={`telefono`}
                label='Teléfono'
                type='tel'
                mask={'999-99-99'}
                variant='outlined'
                size='medium'
              />
            </Grid>
            <Grid item xs={12}>
              <AppTextField
                label='Correo'
                name={`email`}
                type='email'
                variant='outlined'
                size='medium'
              />
            </Grid>
            <Grid item xs={12}>
              <AppCheckboxField name='isAccountant' label='Cuenta Dante' />
            </Grid>
          </Grid>

          <Box mt={5}>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              sx={{
                minWidth: 160,
                fontWeight: Fonts.REGULAR,
                fontSize: 16,
                textTransform: 'capitalize',
                padding: '4px 16px 8px',
              }}
            >
              Guardar Vocero
            </Button>
          </Box>
        </Form>
      </FormikProvider>
    </>
  );
};
export default VoceroForm;

VoceroForm.propTypes = {
  handleClose: PropTypes.func,
};
