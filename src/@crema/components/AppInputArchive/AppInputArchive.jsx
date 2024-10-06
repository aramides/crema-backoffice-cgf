// import { Component } from 'react';
// import PropTypes from 'prop-types';
// import { FilePond, registerPlugin } from 'filepond';
// import 'filepond/dist/filepond.min.css';
// import { Label } from 'reactstrap';
// import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
// import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// class InputArchive extends Component {
//   shouldComponentUpdate(nextProps) {
//     const { formik, name, errorFiles } = this.props;

//     // Compara el valor actual del archivo con el valor en `formik.values`
//     const currentValue = formik.values[name];
//     const nextValue = nextProps.formik.values[name];
//     const valueChanged = currentValue !== nextValue;

//     // Compara el estado actual de los archivos con el estado en `formik.touched`
//     const currentTouched = formik.touched[name];
//     const nextTouched = nextProps.formik.touched[name];
//     const touchedChanged = currentTouched !== nextTouched;

//     // Compara el valor actual del input con el valor en `formik.errors`
//     const currentErrorFiles = errorFiles[name];
//     const nextErrorFiles = nextProps.errorFiles[name];
//     const errorChangedFiles = currentErrorFiles !== nextErrorFiles;

//     // Compara el valor actual del input con el valor en `errors`
//     const currentError = formik.errors[name];
//     const nextError = nextProps.formik.errors[name];
//     const errorChanged = currentError !== nextError;
//     // Devuelve true si el valor o el estado de los archivos han cambiado
//     return valueChanged || touchedChanged || errorChanged || errorChangedFiles;
//   }

//   render() {
//     const {
//       formik,
//       name,
//       label,
//       isRequired = false,
//       acceptedFileTypes = ['image/*', 'application/pdf'],
//       setErrorFiles,
//       errorFiles,
//     } = this.props;

//     registerPlugin(
//       FilePondPluginFileValidateType,
//       FilePondPluginFileValidateSize,
//       FilePondPluginImagePreview,
//       FilePondPluginFilePoster,
//     );

//     return (
//       <>
//         <Label htmlFor={name} className='form-label'>
//           {label} {isRequired && <span className='text-danger'>*</span>}
//         </Label>
//         <FilePond
//           name={name}
//           allowImagePreview={true}
//           files={formik.values[name]}
//           allowMultiple={false}
//           onupdatefiles={(fileItems) => {
//             formik.setFieldValue(
//               name,
//               fileItems.map((fileItem) => {
//                 return fileItem;
//               }),
//             );
//           }}
//           onerror={(error) => {
//             setErrorFiles((prevState) => {
//               return {
//                 ...prevState,
//                 [name]: error.main,
//               };
//             });
//           }}
//           acceptedFileTypes={acceptedFileTypes}
//           labelIdle="Arrastra y suelta tus archivos o <span class='filepond--label-action'>Selecciona archivos</span>"
//           labelMaxFileSizeExceeded='Este campo acepta archivos de hasta un 1024MB'
//           labelFileTypeNotAllowed='Archivo no permitido'
//           maxFileSize='1024MB'
//         ></FilePond>
//         {errorFiles[name] && (
//           <span className='text-danger'>{errorFiles[name] + ' '}</span>
//         )}
//         {formik.errors[name] && (
//           <span className='text-danger'>{formik.errors[name]}</span>
//         )}
//       </>
//     );
//   }
// }

// InputArchive.propTypes = {
//   formik: PropTypes.object,
//   name: PropTypes.string,
//   label: PropTypes.string,
//   isRequired: PropTypes.bool,
//   setErrorFiles: PropTypes.func,
//   errorFiles: PropTypes.object,
// };

// export default InputArchive;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { FormControl, FormHelperText } from '@mui/material';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { useField } from 'formik';
import InputLabel from '@mui/material/InputLabel';

const InputArchive = ({
  formik,
  name,
  label,
  isRequired = false,
  acceptedFileTypes = ['image/*', 'application/pdf'],
  setErrorFiles,
  errorFiles,
}) => {
  const [field, meta] = useField(name);
  const { touched, error, value } = meta;

  registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize,
    FilePondPluginImagePreview,
    FilePondPluginFilePoster,
  );

  return (
    <>
      <InputLabel htmlFor={name} error={touched && error}>
        {label} {isRequired && <span className='text-danger'>*</span>}
      </InputLabel>

      <FormControl error={touched && error} fullWidth>
        <FilePond
          files={value || []}
          allowImagePreview={true}
          allowMultiple={false}
          onupdatefiles={(fileItems) => {
            formik.setFieldValue(
              name,
              fileItems.map((fileItem) => fileItem.file),
            );
          }}
          onerror={(error) => {
            setErrorFiles((prevState) => {
              return {
                ...prevState,
                [name]: error.main,
              };
            });
          }}
          acceptedFileTypes={acceptedFileTypes}
          labelIdle="Arrastra y suelta tus archivos o <span class='filepond--label-action'>Selecciona archivos</span>"
          labelMaxFileSizeExceeded='Este campo acepta archivos de hasta un 1024MB'
          labelFileTypeNotAllowed='Archivo no permitido'
          maxFileSize='1024MB'
        />
        {touched && error && <FormHelperText error>{error}</FormHelperText>}
        {errorFiles[name] && (
          <FormHelperText error>{errorFiles[name]}</FormHelperText>
        )}
      </FormControl>
    </>
  );
};

InputArchive.propTypes = {
  formik: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  setErrorFiles: PropTypes.func,
  errorFiles: PropTypes.object,
};

export default InputArchive;
