import { useField, FastField } from 'formik';
import Switch from '@mui/material/Switch';
import PropTypes from 'prop-types';

const AppSwitch = ({
  label,
  name,
  variant = 'outlined',
  color = 'primary',
  onChange = () => {},
  handleBlur = () => {},
}) => {
  const [field, meta] = useField({ name });
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <FastField name={name}>
      {({ form }) => (
        <Switch
          name={field.name}
          label={label}
          color={color}
          variant={variant}
          checked={field.value}
          onChange={(e) => {
            onChange(e);
            form.setFieldValue(name, e.target.checked);
          }}
          onBlur={(e) => {
            handleBlur(e);
            form.handleBlur(e);
          }}
          error={!!errorText}
          helperText={errorText}
        />
      )}
    </FastField>
  );
};

export default AppSwitch;

AppSwitch.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  onChange: PropTypes.func,
  handleBlur: PropTypes.func,
  color: PropTypes.string,
};
