import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import icons from '@crema/constants/Icons';
import './index.css';
import AppScrollbar from '../AppScrollbar';
import { useField } from 'formik';
import { Box, FormHelperText } from '@mui/material';

export default function AppIconList({ formik, name }) {
  const [selectedIcon, setSelectedIcon] = React.useState('');
  const [selectedName, setSelectedName] = React.useState();

  const [field, meta] = useField({ name });
  const errorText = meta.error && meta.touched ? meta.error : '';

  const handleSelectIcon = (icon) => {
    setSelectedIcon(icon);
  };
  const handleSelectName = (name) => {
    setSelectedName(name);
  };

  React.useEffect(() => {
    if (formik.isSubmitting) {
      formik.setFieldTouched(name, true, true);
    }
  }, [formik.isSubmitting]);

  React.useEffect(() => {
    formik.setFieldValue(name, selectedName);
  }, [selectedName]);
  const borderColor = errorText ? '#f44336' : '#767a7d';
  return (
    <div>
      <AppScrollbar
        sx={{
          maxHeight: 200,
          border: '1px solid ' + borderColor,
          borderRadius: '5px',
        }}
      >
        <List className='CustonListIcon'>
          {icons.map((icon, index) => (
            <ListItem
              key={index}
              onClick={() =>
                handleSelectName(icon.name) || handleSelectIcon(icon)
              }
            >
              <ListItemAvatar sx={{ minWidth: 0, cursor: 'pointer' }}>
                <Avatar>{icon.icon}</Avatar>
              </ListItemAvatar>
            </ListItem>
          ))}
        </List>
      </AppScrollbar>
      {errorText && (
        <FormHelperText sx={{ color: '#f44336' }}>{errorText}</FormHelperText>
      )}

      <div className='selected-icon'>
        <h2>Selected Icon:</h2>
        {selectedIcon?.icon && <Avatar>{selectedIcon.icon}</Avatar>}
      </div>
    </div>
  );
}
