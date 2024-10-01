/* eslint-disable no-unused-vars */
import { useDropzone } from 'react-dropzone';
import { Paper, Typography, List, ListItem } from '@mui/material';
import { useIntl } from 'react-intl';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { FastField, useField } from 'formik';
import PropTypes from 'prop-types';

const SignatureLoader = ({ name }) => {
  const { messages } = useIntl();

  const [field, meta, helpers] = useField(name); // Use Formik's useField hook

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => {
      // Update Formik's field value with the accepted files
      helpers.setValue(files);
    },
  });

  const files = acceptedFiles.map((file) => (
    <ListItem key={file.path}>
      {file.path} - {file.size} bytes
    </ListItem>
  ));

  return (
    <section className='container'>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
        <div
          {...getRootProps({ className: 'dropzone' })}
          style={{
            border: '2px dashed #3f51b5',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <input {...getInputProps()} />
          <Typography variant='h6' color='textSecondary'>
            {messages['directores.firma.label']}
          </Typography>
          <DriveFolderUploadIcon color='primary' fontSize='large' />
        </div>
        <List>{files}</List>
        {meta.touched && meta.error ? (
          <Typography variant='body2' color='error'>
            {meta.error}
          </Typography>
        ) : null}
      </Paper>
    </section>
  );
};

export default SignatureLoader;

SignatureLoader.propTypes = {
  name: PropTypes.string,
};
