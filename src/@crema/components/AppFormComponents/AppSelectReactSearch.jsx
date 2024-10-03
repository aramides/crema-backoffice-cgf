import Select from 'react-select';
import { FastField, useField } from 'formik';
import PropTypes from 'prop-types';
import { InputLabel as Label } from '@mui/material';
import { useThemeContext } from '@crema/context/AppContextProvider/ThemeContextProvider';

const AppSelectSearch = ({
  label,
  name,
  variant = 'outlined',
  fullWidth = true,
  multiline = false,
  inputProps = {},
  placeholder = 'Seleccionar',
  options = [],
  optionsInputs = {},
  isRequired = false,
  isDisabled = false,
  isLoading = false,
  isClearable = true,
  isSearchable = true,
  stylesLabel = {},
  labelOptions = 'label',
  valueOptions = 'id',
  disabledLabel = false,
  styles = {},
  stylesComponent = {},
  multiple = false,
  isMulti = false,
  defaultValue,
  multiLabel = false,
  handleChange = () => {},
  handleBlur = () => {},
}) => {
  const [field, meta] = useField({ name });
  const errorText = meta.error && meta.touched ? meta.error : '';
  const customNoOptionsMessage = ({ inputValue }) => {
    return `No se encontró '${inputValue ? inputValue : 'valores'}'`;
  };
  const themeProvider = useThemeContext();
  console.log(themeProvider);

  return (
    <FastField name={name}>
      {({ form }) => (
        <>
          {!disabledLabel && (
            <Label id={name} htmlFor={name} style={stylesLabel}>
              {label} {isRequired && <span className='text-danger'>*</span>}
            </Label>
          )}

          <Select
            name={field.name}
            label={label}
            variant={variant}
            helperText={errorText}
            error={!!errorText}
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={(e) => {
              handleBlur(e);
            }}
            fullWidth={fullWidth}
            multiline={multiline}
            value={field.value}
            inputProps={inputProps}
            classNamePrefix='select'
            placeholder={placeholder}
            defaultValue={defaultValue}
            isMulti={isMulti}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            noOptionsMessage={customNoOptionsMessage}
            isSearchable={isSearchable}
            options={
              Object.keys(optionsInputs).length > 0
                ? optionsInputs[name]
                : options
            }
            getOptionLabel={
              multiple
                ? labelOptions
                : multiLabel
                  ? (options) =>
                      `${options[labelOptions]} - ${options[valueOptions]}`
                  : (options) => options[labelOptions]
            }
            getOptionValue={(options) => options[valueOptions]}
            styles={{
              container: (baseStyles) => ({
                ...baseStyles,
                '.select__menu .select__menu-list': {
                  padding: 0,
                },
              }),
              control: (baseStyles) => {
                return {
                  ...baseStyles,
                  ...styles,
                  width: '100%',
                  background: 'transparent',
                  color: 'white',
                  '.select__single-value': {
                    color: 'white',
                  },
                  paddingBlock: '8px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.23)',
                  borderColor:
                    form.touched[name] && form.errors[name] ? 'red' : 'grey',
                };
              },
              option: (baseStyles) => ({
                ...baseStyles,
                background: '#363C41',
              }),
              ...stylesComponent,
            }}
          />
        </>
      )}
    </FastField>
  );
};

export default AppSelectSearch;

AppSelectSearch.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  multiline: PropTypes.bool,
  formik: PropTypes.object,
  fullWidth: PropTypes.bool,
  inputProps: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  optionsInputs: PropTypes.object,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  stylesLabel: PropTypes.object,
  labelOptions: PropTypes.string,
  valueOptions: PropTypes.string,
  disabledLabel: PropTypes.bool,
  styles: PropTypes.object,
  stylesComponent: PropTypes.object,
  multiple: PropTypes.bool,
  nameArray: PropTypes.string,
  isMulti: PropTypes.bool,
  nameItem: PropTypes.string,
  multiLabel: PropTypes.bool,
  defaultValue: PropTypes.string,
};
