import { FastField, useField } from 'formik';
import PropTypes from 'prop-types';
import { FormControlLabel } from '@mui/material';
import AppSwitch from './AppSwitch';

const AppSwitchLabel = ({
  name,
  label,
  labelPlacement = 'top',
  onChange = () => {},
  handleBlur = () => {},
}) => {
  const [field, meta] = useField({ name });

  return (
    <FastField name={name}>
      {({ form }) => (
        <FormControlLabel
          label={label}
          labelPlacement={labelPlacement}
          control={
            <AppSwitch
              name={field.name}
              checked={field.value}
              onChange={(e) => {
                onChange(e);
                form.setFieldValue(name, e.target.checked);
              }}
              onBlur={(e) => {
                handleBlur(e);
                form.handleBlur(e);
              }}
            />
          }
        />
      )}
    </FastField>
  );
};

export default AppSwitchLabel;

AppSwitchLabel.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  labelPlacement: PropTypes.string,
  onChange: PropTypes.func,
  handleBlur: PropTypes.func,
};
