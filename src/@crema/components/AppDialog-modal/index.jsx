import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import Button from '@mui/material/Button';
import ProtoTypes from 'prop-types';
export default function AppDialogModal({
  openDialog,
  setOpenDialog,
  handleConfirm,
  title,
  parrafo,
}) {
  return (
    <>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>
          <p style={{ fontSize: '20px' }}>{title}</p>
        </DialogTitle>
        <DialogContent>{parrafo}</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
          <Button
            onClick={() => {
              handleConfirm();
              setOpenDialog(false);
            }}
            color='error'
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

AppDialogModal.propTypes = {
  openDialog: ProtoTypes.bool,
  setOpenDialog: ProtoTypes.func,
  handleConfirm: ProtoTypes.func,
  title: ProtoTypes.string,
  parrafo: ProtoTypes.string,
};
