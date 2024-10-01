import AuthRoutes from './@crema/components/AuthRoutes';
import InfoViewContextProvider from './@crema/context/AppContextProvider/InfoViewContextProvider';
import AppLocaleProvider from './@crema/context/AppLocaleProvider';
import AppStyleProvider from './@crema/context/AppStyleProvider';
import AppThemeProvider from './@crema/context/AppThemeProvider';
import AppAuthProvider from './@crema/core/AppAuthProvider';
import AppLayout from './@crema/core/AppLayout';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './@crema/context/AppContextProvider';
import './styles/index.css';
import ReactQueryProvider from '@crema/services/react-query/ReactQueryProvider';

const App = () => (
  <ReactQueryProvider>
    <AppContextProvider>
      <AppThemeProvider>
        <AppStyleProvider>
          <AppLocaleProvider>
            <BrowserRouter>
              <InfoViewContextProvider>
                <AppAuthProvider>
                  <AuthRoutes>
                    <CssBaseline />
                    <AppLayout />
                  </AuthRoutes>
                </AppAuthProvider>
              </InfoViewContextProvider>
            </BrowserRouter>
          </AppLocaleProvider>
        </AppStyleProvider>
      </AppThemeProvider>
    </AppContextProvider>
  </ReactQueryProvider>
);

export default App;
