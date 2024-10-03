import { useField, FastField } from 'formik';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { size } from 'lodash';

const AppDateFiled = ({ name, label, onChange, className }) => {
  // eslint-disable-next-line no-unused-vars
  const [field, meta] = useField({ name });
  const errorText = meta.error ? meta.error : '';

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FastField name={name}>
          {({ form }) => (
            <DatePicker
              label={label}
              value={field.value}
              onChange={(value) => {
                form.setFieldValue(name, value);
                if (onChange) {
                  onChange(value);
                }
              }}
              slotProps={{
                textField: {
                  sx: {
                    width: '100%',
                  },
                  helperText: errorText,
                  error: !!errorText,
                },
              }}
            />
          )}
        </FastField>
      </LocalizationProvider>
    </>
  );
};

export default AppDateFiled;

AppDateFiled.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};
