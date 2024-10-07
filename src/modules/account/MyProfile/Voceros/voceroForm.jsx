import * as React from 'react';
import { Form, Formik } from 'formik';
import { Button, Checkbox } from '@mui/material';
import * as yup from 'yup';
import AppInfoView from '@crema/components/AppInfoView';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import { Fonts } from '@crema/constants/AppEnums';
import AppAutoComplete from '@crema/components/AppFormComponents/AppAutoComplete';

const VoceroForm = () => {
  const navigate = useNavigate();
  const onGoToForgetPassword = () => {
    navigate('/forget-password', { tab: 'jwtAuth' });
  };

  const { messages } = useIntl();
  const RIF_TIPOS = [
    {
      id: '1',
      label: 'J',
    },
    {
      id: '2',
      label: 'C',
    },
    {
      id: '3',
      label: 'G',
    },
  ];
  return (
    <>
      <Formik>
        {({ isSubmitting }) => (
          <Form
            style={{
              textAlign: 'left',
              width: '400px',
              maxWidth: '100%',
              defaultValue: '1',
            }}
            noValidate
            autoComplete='off'
          >
            <Box sx={{ mb: { xs: 5, xl: 12 } }}>
              <AppAutoComplete
                options={RIF_TIPOS}
                label='Tipo rif'
                defaultValue='2'
                variant='outlined'
                isClearable={false}
              />
              <AppTextField
                name={`dni`}
                label='Cédula'
                variant='outlined'
                sx={{
                  width: '100%',
                  '& .MuiInputBase-input': {
                    fontSize: 14,
                  },
                }}
              />
            </Box>

            <Box sx={{ mb: { xs: 3, xl: 4 } }}>
              <AppTextField
                type='password'
                placeholder={messages['common.password']}
                label={<IntlMessages id='common.password' />}
                name='password'
                variant='outlined'
                sx={{
                  width: '100%',
                  '& .MuiInputBase-input': {
                    fontSize: 14,
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                mb: { xs: 3, xl: 4 },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Checkbox color='primary' sx={{ ml: -3 }} id='rememberMe' />
                <Box
                  aria-labelledby='rememberMe'
                  component='span'
                  sx={{
                    color: 'grey.700',
                  }}
                >
                  <IntlMessages id='common.rememberMe' />
                </Box>
              </Box>
              <Box
                component='span'
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  fontWeight: Fonts.MEDIUM,
                  cursor: 'pointer',
                  display: 'block',
                  textAlign: 'right',
                }}
                onClick={onGoToForgetPassword}
              >
                <IntlMessages id='common.forgetPassword' />
              </Box>
            </Box>

            <div>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                disabled={isSubmitting}
                sx={{
                  minWidth: 160,
                  fontWeight: Fonts.REGULAR,
                  fontSize: 16,
                  textTransform: 'capitalize',
                  padding: '4px 16px 8px',
                }}
              >
                <IntlMessages id='common.login' />
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default VoceroForm;
