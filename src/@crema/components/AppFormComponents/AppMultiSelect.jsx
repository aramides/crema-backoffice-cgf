/*import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useField } from 'formik';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultipleSelectChip = ({
  data = [],
  label = 'Chip',
  width = 300,
  idName = 'id',
  name,
  LabelName = 'label',
}) => {
  const theme = useTheme();
  const [field, meta, helpers] = useField({ name });
  const errorText = meta.error && meta.touched ? meta.error : '';

  const getStyles = (name, personName, theme) => {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    helpers.setValue(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <FormControl sx={{ m: 1, width: width }}>
      <InputLabel id='demo-multiple-chip-label'>{label}</InputLabel>
      <Select
        name={name}
        labelId='demo-multiple-chip-label'
        id='demo-multiple-chip'
        multiple
        helperText={errorText}
        error={!!errorText}
        value={field.value}
        onChange={handleChange}
        input={<OutlinedInput id='select-multiple-chip' label={label} />}
        renderValue={(selected) => {
          return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => {
                return (
                  <Chip
                    key={value}
                    label={
                      data.filter((item) => item[idName] === value)[0][
                        LabelName
                      ]
                    }
                  />
                );
              })}
            </Box>
          );
        }}
        MenuProps={MenuProps}
      >
        {data.map((option) => (
          <MenuItem
            key={option.name}
            value={option[idName]}
            style={getStyles(option[idName], field.value, theme)}
          >
            {option[LabelName]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleSelectChip;
*/

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useField, useFormikContext } from 'formik';
import { FormHelperText } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultipleSelectChip = ({
  data = [],
  label = 'Chip',
  width = 300,
  idName = 'id',
  name,
  LabelName = 'label',
}) => {
  const theme = useTheme();
  const [field, meta] = useField({ name });
  const { setFieldValue } = useFormikContext();
  const errorText = meta.error && meta.touched ? meta.error : '';
  const getStyles = (name, personName, theme) => {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFieldValue(name, typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <FormControl sx={{ m: 1, width: width }}>
      <InputLabel
        sx={errorText ? { color: '#f44336' } : {}}
        id='demo-multiple-chip-label'
      >
        {label}
      </InputLabel>
      <Select
        name={name}
        labelId='demo-multiple-chip-label'
        id='demo-multiple-chip'
        multiple
        helperText={errorText}
        error={!!errorText}
        value={field.value}
        onChange={handleChange}
        input={<OutlinedInput id='select-multiple-chip' label={label} />}
        renderValue={(selected) => {
          return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value, index) => {
                return (
                  <Chip
                    key={index}
                    label={
                      data.filter((item) => item[idName] === value)[0][
                        LabelName
                      ]
                    }
                  />
                );
              })}
            </Box>
          );
        }}
        MenuProps={MenuProps}
      >
        {data.map((option) => (
          <MenuItem
            key={option.name}
            value={option[idName]}
            style={getStyles(option[idName], field.value, theme)}
          >
            {option[LabelName]}
          </MenuItem>
        ))}
      </Select>
      {errorText && (
        <FormHelperText sx={{ color: '#f44336' }}>{errorText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default MultipleSelectChip;
