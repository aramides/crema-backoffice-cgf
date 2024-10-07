import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import { Chip } from '@mui/material';
import { FastField } from 'formik';

export default function AppAutoComplete({
  variant = 'filled',
  options = [],
  onType = () => {},
  handleBlur = () => {},
  name,
  label,
  placeholder,
  dataLoading,
  handleChange = () => {},
  disabled,
  disabledId = [],
  helperText = '',
  error,
  multiple = false,
  isClearable = true,
  defaultValue = '',
  labelOptions = 'label',
  valueOptions = 'id',
}) {
  const loading = !disabled && dataLoading;

  const onSelectValue = (e, val, form) => {
    // const event = {
    //   ...e,
    //   target: {
    //     name,
    //     val:
    //       multiple === true
    //         ? val.map((data) => data?.[valueOptions])
    //         : val?.[valueOptions],
    //   },
    // };

    try {
      if (form) form.setFieldValue(name, val[valueOptions]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FastField name={name}>
      {({ form }) => (
        <>
          <Autocomplete
            disabled={disabled}
            multiple={multiple}
            size='small'
            onChange={(e, val) => {
              onSelectValue(e, val, form);
              handleChange(val);
            }}
            getOptionLabel={(option) => {
              return option?.[labelOptions];
            }}
            options={options}
            loading={loading}
            name={name}
            autoSelect
            defaultValue={
              defaultValue
                ? options.find(
                    (option) => option[valueOptions] === defaultValue,
                  )
                : options.find(
                    (option) =>
                      option[valueOptions] === form.initialValues[name],
                  )
            }
            onBlur={(e) => {
              handleBlur(e);
              form.handleBlur(e);
            }}
            disableClearable={!isClearable}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip
                  key={index}
                  label={option[labelOptions]}
                  {...getTagProps({ index })}
                  disabled={disabledId.indexOf(option?.[valueOptions]) !== -1}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                name={name}
                placeholder={placeholder}
                {...params}
                label={label}
                variant={variant}
                onChange={(ev) => {
                  onType(ev.target.value);
                }}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color='inherit' size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
                helperText={helperText}
                error={error}
              />
            )}
          />
        </>
      )}
    </FastField>
  );
}

AppAutoComplete.propTypes = {
  onType: PropTypes.func,
  options: PropTypes.array,
  onChange: PropTypes.func,
  handleChange: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  keyName: PropTypes.string,
  valueOptions: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  dataLoading: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  disabledId: PropTypes.bool,
  handleBlur: PropTypes.func,
  variant: PropTypes.string,
  isClearable: PropTypes.bool,
  labelOptions: PropTypes.string,
  defaultValue: PropTypes.string,
};
