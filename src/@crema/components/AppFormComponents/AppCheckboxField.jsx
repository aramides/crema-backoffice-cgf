import { FastField, useField } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import { FormControlLabel } from '@mui/material';

const AppCheckboxField = ({
  name,
  label,
  labelPlacement = 'end',
  handleChange = () => {},
}) => {
  const [field] = useField({ name });

  return (
    <FastField name={name}>
      {({ form }) => (
        <FormControlLabel
          label={label}
          labelPlacement={labelPlacement}
          control={
            <Checkbox
              label={label}
              onChange={(event, checked) => {
                form.handleChange(event, checked);
                handleChange(event, checked);
              }}
              onBlur={form.handleBlur}
              value={field.value}
              {...field}
              checked={field.value}
            />
          }
        />
      )}
    </FastField>
  );
};

export default AppCheckboxField;

AppCheckboxField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  labelPlacement: PropTypes.string,
  handleChange: PropTypes.func,
};
