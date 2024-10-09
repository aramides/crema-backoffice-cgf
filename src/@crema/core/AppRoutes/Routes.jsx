import React from 'react';
import { RoutePermittedRole } from '../../constants/AppEnums';

const Inputs = React.lazy(() => import('../../../modules/inputs'));
const Permisos = React.lazy(
  () => import('../../../modules/UserAdmin/Permisos'),
);
const Modulos = React.lazy(() => import('../../../modules/UserAdmin/Modulos'));
const Roles = React.lazy(() => import('../../../modules/UserAdmin/Roles'));
const Usuarios = React.lazy(
  () => import('../../../modules/UserAdmin/Usuarios'),
);

const Formulario = React.lazy(
  () => import('../../../modules/UserAdmin/Formulario'),
);

const Dashboard = React.lazy(
  () => import('../../../modules/dashboard/Estadistica'),
);
const ReportsData = React.lazy(() => import('../../../modules/reportsData'));
const DirectorsManagement = React.lazy(
  () => import('../../../modules/directorsManagement'),
);

///CFE
///Estados
const Estados = React.lazy(() => import('../../services/estados'));
const Municipio = React.lazy(() => import('../../services/municipios'));
// const Parroquias = React.lazy(() => import('../pages/Parroquia/Parroquia'));
///

export const RoutesConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/gestion-directores',
    element: <DirectorsManagement />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: '/inputs',
    element: <Inputs />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/Administracion/Permisos',
    element: <Permisos />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/Administracion/Modulos',
    element: <Modulos />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/Administracion/Roles',
    element: <Roles />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/Administracion/Usuarios',
    element: <Usuarios />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/Administracion/Formulario',
    element: <Formulario />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/datosReporte',
    element: <ReportsData />,
  },

  { path: '/estados', element: <Estados /> },
  { path: '/municipio', element: <Municipio /> },
  // { path: '/parroquias', element: <Parroquias /> },
];
