import { FastField, useField } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';

const AppCheckboxField = ({ name, label }) => {
  const [field] = useField({ name });

  return (
    <FastField name={name}>
      {({ form }) => (
        <Checkbox
          label={label}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          value={field.value}
          {...field}
          checked={field.value}
        />
      )}
    </FastField>
  );
};

export default AppCheckboxField;

AppCheckboxField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};
