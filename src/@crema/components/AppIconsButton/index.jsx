import { IconButton, Tooltip } from '@mui/material';
import React from 'react';

export default function AppIconsButton({ id, color, onClick, icons, title }) {
  return (
    <div>
      <Tooltip title={title}>
        <IconButton
          color={color}
          id={id}
          variant='contained'
          size='small'
          onClick={onClick}
          // style={{ marginLeft: 16 }}
          // tabIndex={params.hasFocus ? 0 : -1}
        >
          {icons}
        </IconButton>
      </Tooltip>
    </div>
  );
}
