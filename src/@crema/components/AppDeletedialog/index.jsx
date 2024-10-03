import AppDialogModal from '../AppDialog-modal';

import PropTypes from 'prop-types';

const AppDeleteDialog = ({
  open,
  setOpen,
  handleConfirm,
  title,
  message,
  name,
}) => {
  return (
    <AppDialogModal
      openDialog={open}
      setOpenDialog={setOpen}
      handleConfirm={handleConfirm}
      title={`${title} ${name}`}
      parrafo={message}
    />
  );
};

export default AppDeleteDialog;

AppDeleteDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  handleConfirm: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
};
