/* eslint-disable react/prop-types */
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import { FastField } from 'formik';
import PropTypes from 'prop-types';

const AppSelectField = ({
  name,
  labelId,
  id,
  label,
  children,
  disabled,
  variant = 'filled',
  options = [],
  optionLabel = 'label',
  optionValue = 'value',
  size = 'small',
}) => {
  return (
    <>
      <FastField name={name}>
        {({ field, meta }) => {
          const errorText = meta.error && meta.touched ? meta.error : '';
          return (
            <>
              <FormControl fullWidth>
                <InputLabel id={labelId}>{label}</InputLabel>
                <Select
                  {...field}
                  name={name}
                  labelId={labelId}
                  id={id}
                  label={label}
                  error={!!errorText}
                  variant={variant}
                  size={size}
                >
                  {options.map((option) => (
                    <MenuItem
                      key={option[optionValue]}
                      value={option[optionValue]}
                    >
                      {option[optionLabel]}
                    </MenuItem>
                  ))}
                  {children}
                </Select>
                {!disabled && (
                  <FormHelperText style={{ color: '#f44336' }}>
                    {errorText}
                  </FormHelperText>
                )}
              </FormControl>
            </>
          );
        }}
      </FastField>
    </>
  );
};

AppSelectField.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  labelId: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
};

export default AppSelectField;
