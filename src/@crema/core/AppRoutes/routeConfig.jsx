import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const routesConfig = [
  {
    id: 'app',
    title: 'Sample',
    messageId: 'sidebar.sample',
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        messageId: 'sidebar.dashboard.label',
        type: 'item',
        icon: <EqualizerIcon />,
        url: '/dashboard',
      },
      {
        id: 'gestion-directores',
        title: 'Gestion Directores',
        messageId: 'sidebar.sample.gestionDirectores',
        type: 'item',
        icon: <FiberSmartRecordIcon />,
        url: '/gestion-directores',
      },
      {
        id: 'Inputs',
        title: 'Inputs',
        messageId: 'sidebar.sample.inputs',
        type: 'item',
        icon: <FiberSmartRecordIcon />,
        url: '/inputs',
      },
      {
        id: 'reportsData',
        title: 'Datos de los reportes',
        messageId: 'sidebar.reportsData.label',
        type: 'item',
        icon: <EqualizerIcon />,
        url: '/datosReporte',
      },
    ],
  },

  {
    id: 'Admin',
    title: 'UserAdmin',
    messageId: 'sidebar.sample.useradmin',
    type: 'group',
    children: [
      {
        id: 'Permisos',
        title: 'Permisos',
        messageId: 'sidebar.sample.Permisos',
        type: 'item',
        icon: <ManageAccountsIcon />,
        url: '/Administracion/Permisos',
      },
      {
        id: 'Modulos',
        title: 'Modulos',
        messageId: 'sidebar.sample.Modulos',
        type: 'item',
        icon: <ManageAccountsIcon />,
        url: '/Administracion/Modulos',
      },
      {
        id: 'Roles',
        title: 'Roles',
        messageId: 'sidebar.sample.Roles',
        type: 'item',
        icon: <ManageAccountsIcon />,
        url: '/Administracion/Roles',
      },
      {
        id: 'Usuarios',
        title: 'Usuarios',
        messageId: 'sidebar.sample.Usuarios',
        type: 'item',
        icon: <ManageAccountsIcon />,
        url: '/Administracion/Usuarios',
      },
      {
        id: 'Formulario',
        title: 'Formulario',
        messageId: 'sidebar.sample.Formulario',
        type: 'item',
        icon: <ManageAccountsIcon />,
        url: '/Administracion/Formulario',
      },
    ],
  },
];
export default routesConfig;
