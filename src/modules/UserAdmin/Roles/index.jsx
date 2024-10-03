import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Paper,
} from '@mui/material';
import Tablas from '@crema/components/AppTablas/Tablas';
import AppDialog from '@crema/components/AppDialog';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import jwtAxios from '@crema/services/auth/jwt-auth';
import FormRol from './components/FormRoles';
import { Edit } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import AppDeleteDialog from '@crema/components/AppDeletedialog';
import { useIntl } from 'react-intl';

const Roles = () => {
  const queryClient = useQueryClient();
  const { messages } = useIntl();

  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [rol, setRol] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [rolDialogText, setRolDialogText] = useState('Crear Rol');
  const [pageState, setPageState] = useState({
    page: 0,
    pageSize: 10,
    data: [],
    total: 0,
    totalPages: 0,
  });

  //obtiene los roles/perfiles ya creados
  const FetchData = async () => {
    const response = await jwtAxios.get('profiles', {
      params: {
        page: pageState.page,
        take: pageState.pageSize,
      },
    });
    setPageState({
      ...pageState,
      data: response.data.data,
      page: response.data.currentPage,
      total: response.data.totalData,
      totalPages: response.data.totalPages,
    });
    return response.data;
  };

  const { isLoading } = useQuery({
    queryKey: ['profiles', pageState.page, pageState.rowsPerPage],
    queryFn: () => FetchData(),
  });

  //enviar edicion del rol
  const { mutate: postEdit } = useMutation({
    mutationFn: (params) => {
      const { id, name, description } = params;
      return jwtAxios
        .patch(`profiles/${id}`, { name, description })
        .then((res) => {
          res.data;
        });
    },

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['profiles'] });
    },
  });

  //eliminar rol
  const { mutate: roleDelete } = useMutation({
    mutationFn: (params) => {
      return jwtAxios.put(`profiles/${params.id}`).then((res) => {
        res.data;
      });
    },

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['profiles'] });
    },
  });

  //agregar rol
  const { mutate: postRol } = useMutation({
    mutationFn: (params) => {
      return jwtAxios.post(`profiles`, { ...params }).then((res) => res.data);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['profiles'] });
    },
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setRolDialogText(messages['modules.roles.create']);
    setIsEdit(false);
    setRol(null);
  };

  const handleEditClick = (role) => {
    setRolDialogText(messages['modules.roles.edit']);
    setIsEdit(true);
    setRol(role);
    handleOpen();
  };

  const handleDeleteClick = (role) => {
    setRol(role);
    setOpenDelete(true);
  };

  const columns = [
    {
      field: 'name',
      headerName: 'Rol',
      minWidth: 40,
      renderCell: ({ row: { name } }) => {
        return `${name}`;
      },
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'Descripcion',
      renderCell: ({ row: { description } }) => {
        return `${description}`;
      },
      width: 100,
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 140,
      disableColumnMenu: true,
      sortable: false,

      renderCell: ({ row }) => {
        return (
          <>
            <strong>
              <IconButton
                color='primary'
                id='edit'
                variant='contained'
                size='small'
                onClick={() => handleEditClick(row)}
              >
                <Edit />
              </IconButton>
            </strong>
            <strong>
              <IconButton
                color='secondary'
                id='delete'
                variant='contained'
                size='small'
                onClick={() => handleDeleteClick(row)}
              >
                <DeleteIcon />
              </IconButton>
            </strong>
          </>
        );
      },
    },
  ];

  return (
    <Card>
      <CardHeader
        title='Roles'
        action={
          <Button variant='contained' onClick={handleOpen}>
            {messages['modules.roles.create']}
          </Button>
        }
      />
      <CardContent>
        <Paper elevation={3}>
          <Tablas
            pageState={pageState}
            setPageState={setPageState}
            loading={isLoading}
            columns={columns}
          />
        </Paper>
      </CardContent>

      <AppDialog title={rolDialogText} open={open} onClose={handleClose}>
        <FormRol
          postRol={postRol}
          postEdit={postEdit}
          isEdit={isEdit}
          rol={rol}
          onClose={handleClose}
        />
      </AppDialog>

      <AppDeleteDialog
        open={openDelete}
        setOpen={setOpenDelete}
        handleConfirm={() => {
          roleDelete(rol);
        }}
        title='Eliminar'
        name={rol ? rol.name : 'Rol'}
        message={messages['modules.roles.warningDelete']}
      />
    </Card>
  );
};

export default Roles;
