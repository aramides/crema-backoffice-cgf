import { useSidebarActionsContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import {
  useThemeActionsContext,
  useThemeContext,
} from '@crema/context/AppContextProvider/ThemeContextProvider';
import { DarkSidebar, LightSidebar } from '@crema/constants/defaultConfig';
import ButtonThemeToggleButton from './ButtonThemeMode';
import { ThemeMode } from '@crema/constants/AppEnums';
import { useState } from 'react';
import { Box } from '@mui/material';

const ThemeModeButton = () => {
  const { updateThemeMode } = useThemeActionsContext();
  const { updateSidebarColorSet } = useSidebarActionsContext();
  const { themeMode } = useThemeContext();
  const [isLight, setIsLight] = useState(
    themeMode === ThemeMode.DARK ? true : false,
  );

  const onModeChange = () => {
    setIsLight((prevState) => !prevState);

    if (isLight) {
      updateThemeMode(ThemeMode.LIGHT);
      updateSidebarColorSet({
        sidebarBgColor: LightSidebar.sidebarBgColor,
        sidebarTextColor: LightSidebar.sidebarTextColor,
        sidebarMenuSelectedBgColor: LightSidebar.sidebarMenuSelectedBgColor,
        sidebarMenuSelectedTextColor: LightSidebar.sidebarMenuSelectedTextColor,
        sidebarHeaderColor: LightSidebar.sidebarHeaderColor,
      });
    } else {
      updateThemeMode(ThemeMode.DARK);
      updateSidebarColorSet({
        sidebarBgColor: DarkSidebar.sidebarBgColor,
        sidebarTextColor: DarkSidebar.sidebarTextColor,
        sidebarMenuSelectedBgColor: DarkSidebar.sidebarMenuSelectedBgColor,
        sidebarMenuSelectedTextColor: DarkSidebar.sidebarMenuSelectedTextColor,
        sidebarHeaderColor: DarkSidebar.sidebarHeaderColor,
      });
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: isLight ? '#1f2527' : '#f4f7fe',
        borderRadius: 5,
        padding: 2,
      }}
    >
      <ButtonThemeToggleButton isDark={isLight} onChange={onModeChange} />
    </Box>
  );
};

export default ThemeModeButton;
