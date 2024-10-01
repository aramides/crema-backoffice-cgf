import { useInfoViewActionsContext } from '@crema/context/AppContextProvider/InfoViewContextProvider';

import PropTypes from 'prop-types';
import JWTAuthAuthProvider from '@crema/services/auth/jwt-auth/JWTAuthProvider';

const AppAuthProvider = ({ children }) => {
  const { fetchStart, fetchSuccess, fetchError, showMessage } =
    useInfoViewActionsContext();

  return (
    <JWTAuthAuthProvider
      fetchStart={fetchStart}
      fetchError={fetchError}
      fetchSuccess={fetchSuccess}
      showMessage={showMessage}
    >
      {children}
    </JWTAuthAuthProvider>
  );
};

AppAuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AppAuthProvider;
