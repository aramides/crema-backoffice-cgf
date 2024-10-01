import { Box } from '@mui/material';
import { useThemeContext } from '@crema/context/AppContextProvider/ThemeContextProvider';

import LogoSvg from '@/assets/icon/LogoSvg';

const AppLogo = () => {
  const { theme } = useThemeContext();

  return (
    <Box
      sx={{
        width: { xs: 46, sm: 70, lg: 150 },
        padding: 2.5,
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        },
      }}
      className='app-logo'
    >
      <LogoSvg themeMode={theme.palette.mode} />
      {/*   <img src={Logo} alt='crema-logo' /> */}
    </Box>
  );
};

export default AppLogo;
