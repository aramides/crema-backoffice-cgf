import TextField from '@mui/material/TextField';
import { FastField, useField } from 'formik';
import PropTypes from 'prop-types';

const AppTextField = ({
  label,
  name,
  disabled = false,
  variant = 'filled',
  fullWidth = true,
  size = 'small',
  multiline = false,
  inputProps = {},
  handleChange = () => {},
  handleBlur = () => {},
}) => {
  const [field, meta] = useField({ name });
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <FastField name={name}>
      {({ form }) => (
        <TextField
          name={field.name}
          label={label}
          size={size}
          variant={variant}
          helperText={errorText}
          error={!!errorText}
          disabled={disabled}
          // slotProps={{
          //   input: {
          //     startAdornment: (
          //       <InputAdornment position='start'>
          //         <AccountCircle />
          //       </InputAdornment>
          //     ),
          //   },
          // }}
          onChange={(e) => {
            handleChange(e);
            form.handleChange(e);
          }}
          onBlur={(e) => {
            handleBlur(e);
            form.handleBlur(e);
          }}
          fullWidth={fullWidth}
          multiline={multiline}
          value={field.value}
          inputProps={inputProps}
        />
      )}
    </FastField>
  );
};

export default AppTextField;

AppTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  multiline: PropTypes.bool,
  fullWidth: PropTypes.bool,
  inputProps: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};
