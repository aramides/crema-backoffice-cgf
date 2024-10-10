import { Box } from '@mui/material';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const AppSlideBox = ({ children, id }) => {
  return (
    <Box
      sx={{
        transition: 'all 0.5s ease',
        transform: 'translateX(100%)',
        position: 'absolute',
        top: '-60.5px',
        left: 0,
        width: '100%',
        height: 'calc(100% + 60.5px)',
        zIndex: 1,
        opacity: 0,
        visibility: 'hidden',
        backgroundColor: 'background.paper',
        '&.show': {
          transform: 'translateX(0)',
          opacity: 1,
          visibility: 'visible',
        },
      }}
      className={clsx({
        show: id,
      })}
    >
      {children}
    </Box>
  );
};

AppSlideBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
};

export default AppSlideBox;
