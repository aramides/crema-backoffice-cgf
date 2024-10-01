import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import defaultConfig, {
  DarkSidebar,
  LightSidebar,
} from '@crema/constants/defaultConfig';

const SidebarContext = createContext();
const SidebarActionsContext = createContext();

export const useSidebarContext = () => useContext(SidebarContext);

export const useSidebarActionsContext = () => useContext(SidebarActionsContext);

const SidebarContextProvider = ({ children }) => {
  const [menuStyle, updateMenuStyle] = useState(
    defaultConfig.sidebar.menuStyle,
  );
  const [sidebarColorSet, updateSidebarColorSet] = useState(
    defaultConfig.sidebar.colorSet,
  );
  const [allowSidebarBgImage, updateImage] = useState(
    defaultConfig.sidebar.allowSidebarBgImage,
  );
  const [sidebarBgImageId, setSidebarImage] = useState(
    defaultConfig.sidebar.sidebarBgImageId,
  );

  const setSidebarBgImage = useCallback((allowSidebarBgImage) => {
    updateImage(allowSidebarBgImage);
  }, []);

  const updateSidebarBgImage = useCallback((sidebarBgImageId) => {
    setSidebarImage(sidebarBgImageId);
  }, []);

  useEffect(() => {
    if (import.meta.env.VITE_APP_THEME_MODE == 'light') {
      updateSidebarColorSet({
        sidebarBgColor: LightSidebar.sidebarBgColor,
        sidebarTextColor: LightSidebar.sidebarTextColor,
        sidebarMenuSelectedBgColor: LightSidebar.sidebarMenuSelectedBgColor,
        sidebarMenuSelectedTextColor: LightSidebar.sidebarMenuSelectedTextColor,
        sidebarHeaderColor: LightSidebar.sidebarHeaderColor,
      });
    } else {
      updateSidebarColorSet({
        sidebarBgColor: DarkSidebar.sidebarBgColor,
        sidebarTextColor: DarkSidebar.sidebarTextColor,
        sidebarMenuSelectedBgColor: DarkSidebar.sidebarMenuSelectedBgColor,
        sidebarMenuSelectedTextColor: DarkSidebar.sidebarMenuSelectedTextColor,
        sidebarHeaderColor: DarkSidebar.sidebarHeaderColor,
      });
    }
  }, []);
  return (
    <SidebarContext.Provider
      value={{
        ...sidebarColorSet,
        menuStyle,
        allowSidebarBgImage,
        sidebarBgImageId,
        borderColor: defaultConfig.sidebar.borderColor,
      }}
    >
      <SidebarActionsContext.Provider
        value={{
          updateMenuStyle,
          updateSidebarColorSet,
          setSidebarBgImage,
          updateSidebarBgImage,
        }}
      >
        {children}
      </SidebarActionsContext.Provider>
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;

SidebarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
