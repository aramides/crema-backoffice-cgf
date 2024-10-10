import { Input, TextField } from '@mui/material';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import InputMask from 'react-input-mask';
import InputLabel from '@mui/material/InputLabel';

const InputMaskArray = ({
  name,
  disabled = false,
  label,
  placeholder = '',
  type = 'text',
  maxLength = '',
  isRequired = false,
  style = {},
  formik,
  handleChange = () => null,
  handleBlur = () => null,
  disabledLabel = false,
  minDate = '',
  maxDate = '',
  onKeyDown = () => null,
  arrayName = '',
  arrayIndex = '',
  arrayKey = '',
  key = '',
  mask,
  variant = 'filled',
  size = 'small',
}) => {
  const [errorText, setErrorText] = useState('');
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    if (
      formik.errors[arrayName] &&
      formik.errors[arrayName][arrayIndex] &&
      formik.errors[arrayName][arrayIndex][arrayKey]
    ) {
      setTouched(formik.errors[arrayName][arrayIndex][arrayKey]);
      setErrorText(formik.errors[arrayName][arrayIndex][arrayKey]);
    } else {
      if (formik.errors[name]) {
        setTouched(formik.errors[name]);
        setErrorText(formik.errors[name]);
      } else {
        setTouched(false);
        setErrorText('');
      }
    }
  }, [formik.errors]);

  return (
    <>
      {/* {label && (
        <InputLabel
          id={name}
          htmlFor={name}
          error={touched && errorText}
          className={`form-label ${disabledLabel ? 'd-none' : ''}`}
        >
          {label} {isRequired && <span className='text-danger'>*</span>}
        </InputLabel>
      )} */}

      <InputMask
        style={{ width: '100%' }}
        mask={mask}
        maskChar=''
        alwaysShowMask={true}
        value={
          arrayName
            ? formik.values[arrayName][arrayIndex][arrayKey]
            : formik.values[name]
        }
        onChange={(e) => {
          formik.handleChange(e);
          handleChange(e, formik);
        }}
        onBlur={(e) => {
          formik.handleBlur(e);
          handleBlur(e);
        }}
        type={type}
        disabled={disabled}
      >
        {(inputProps) => (
          <TextField
            variant={variant}
            size={size}
            label={label}
            key={key ? key : name}
            id={name}
            className='form-control custom-input'
            min={minDate}
            max={`${
              type === 'date'
                ? maxDate.length > 0
                  ? maxDate
                  : '9999-12-31'
                : ''
            }`}
            name={name}
            maxLength={maxLength}
            placeholder={placeholder}
            style={style}
            value={
              arrayName
                ? formik.values[arrayName][arrayIndex][arrayKey]
                : formik.values[name]
            }
            error={
              arrayName
                ? errorText && touched
                  ? true
                  : false
                : formik.errors[name] && formik.touched[name]
                  ? true
                  : false
            }
            onKeyDown={onKeyDown}
            {...inputProps}
            helperText={errorText}
          />
        )}
      </InputMask>
      {/* {arrayName && errorText && touched && (
        <span className='text-danger'>{errorText}</span>
      )}

      {!arrayName && formik.errors[name] && formik.touched[name] && (
        <span className='text-danger'>{formik.errors[name]}</span>
      )} */}
    </>
  );
};

export default InputMaskArray;

InputMaskArray.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  isRequired: PropTypes.bool,
  disabled: PropTypes.bool,
  formik: PropTypes.any.isRequired,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  defaultValue: PropTypes.string,
  style: PropTypes.object,
  disabledLabel: PropTypes.bool,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  maxLength: PropTypes.number,
  onKeyDown: PropTypes.func,
  nameValue: PropTypes.string,
  key: PropTypes.string,
  mask: PropTypes.string,
  arrayName: PropTypes.string,
  arrayIndex: PropTypes.string,
  arrayKey: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};
