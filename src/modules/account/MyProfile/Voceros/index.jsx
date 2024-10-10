import { Typography } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import VoceroForm from './voceroForm';
import VoceroTable from './voceroTable';
const Voceros = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography
        component='h3'
        sx={{
          fontSize: 16,
          fontWeight: Fonts.BOLD,
          mb: { xs: 3, lg: 5 },
        }}
      >
        Voceros{' '}
      </Typography>
      <Button variant='outlined' onClick={handleClickOpen}>
        Nuevo vocero
      </Button>
      <VoceroTable />
      <Dialog open={open} onClose={handleClose}>
        <DialogActions>
          <Button onClick={handleClose}>X</Button>{' '}
        </DialogActions>

        <DialogContent>
          <VoceroForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Voceros;
