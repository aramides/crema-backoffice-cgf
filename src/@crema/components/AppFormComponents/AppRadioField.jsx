import {
  FormControlLabel,
  FormHelperText,
  RadioGroup,
  Radio,
} from '@mui/material';
import { FastField } from 'formik';
import PropTypes from 'prop-types';

const AppRadioField = ({ name, row, options, disabled }) => {
  return (
    <>
      <FastField name={name}>
        {({ field, meta }) => {
          const errorText = meta.error && meta.touched ? meta.error : '';

          return (
            <>
              <RadioGroup {...field} row={row} options={options}>
                {options.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                  />
                ))}
              </RadioGroup>
              {!disabled && (
                <FormHelperText style={{ color: '#f44336' }}>
                  {errorText}
                </FormHelperText>
              )}
            </>
          );
        }}
      </FastField>
    </>
  );
};

export default AppRadioField;

AppRadioField.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  row: PropTypes.bool,
};
