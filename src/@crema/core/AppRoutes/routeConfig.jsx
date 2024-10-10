import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TaskRoundedIcon from '@mui/icons-material/TaskRounded';
const routesConfig = [
  {
    id: 'app',
    title: 'menu',
    messageId: 'MENU',
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
        id: 'proyectos',
        title: 'Inputs',
        messageId: 'Proyectos',
        type: 'collapse',

        children: [
          {
            id: 'Inputs',
            title: 'proyectos-retornables',
            messageId: 'Proyectos Retornables',
            type: 'item',
            icon: <FiberSmartRecordIcon />,
            url: '/proyectos/retornables',
          },
        ],
      },
    ],
  },
  {
    id: 'Departamentos',
    title: 'Departamentos',
    messageId: 'Departamentos',
    type: 'collapse',
    children: [
      {
        id: 'Departamentos',
        title: 'Departamentos',
        messageId: 'Departamentos',
        type: 'item',
        icon: <TaskRoundedIcon />,
        url: '/departamentos/ure',
      },
    ],
  },

  {
    id: 'Admin',
    title: 'UserAdmin',
    messageId: 'sidebar.sample.useradmin',
    type: 'collapse',
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
    ],
  },
];
export default routesConfig;
