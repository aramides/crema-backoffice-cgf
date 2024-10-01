import AppDialog from '@crema/components/AppDialog';
import Tablas from '@crema/components/AppTablas/Tablas';
import jwtAxios from '@crema/services/auth/jwt-auth';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Paper,
} from '@mui/material';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import PermsForm from './components/PermsForm';
import { Edit } from '@mui/icons-material';
import AppDeleteDialog from '@crema/components/AppDeletedialog';
import { useIntl } from 'react-intl';

const Permisos = () => {
  const [perm, setPerm] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const { messages } = useIntl();

  const [pageState, setPageState] = useState({
    page: 0,
    pageSize: 10,
    data: [],
    total: 0,
    totalPages: 0,
  });

  const FetchData = async () => {
    const response = await jwtAxios.get('permissions', {
      params: {
        page: pageState.page,
        take: pageState.pageSize,
      },
    });
    setPageState({
      ...pageState,
      data: response.data.data,
      total: response.data.totalData,
      totalPages: response.data.totalPages,
    });
    return response.data;
  };

  const { isLoading } = useQuery({
    queryKey: ['permisos', pageState.page, pageState.rowsPerPage],
    queryFn: () => FetchData(),
  });

  //CREAR PERMISOS
  const { mutate: postPermissions } = useMutation({
    mutationFn: (params) => {
      return jwtAxios.post(`permissions`, params).then((res) => res.data);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['permisos'] });
      return handleClose();
    },
  });

  //ELIMINAR PERMISOS
  const { mutate: isDelete } = useMutation({
    mutationFn: (params) => {
      return jwtAxios.put(`permissions/${params.id}`).then((res) => res.data);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['permisos'] });
    },
  });

  //EDITAR PERMISOS
  const { mutate: editPermissions } = useMutation({
    mutationFn: (params) => {
      const { id, name, description } = params;
      return jwtAxios
        .patch(`permissions/${id}`, { name, description })
        .then((res) => res.data);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['permisos'] });
    },
  });

  const handleEditClick = (perm) => {
    setIsEdit(true);
    setPerm(perm);
    handleOpen();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleDelete = (permiso) => {
    setPerm(permiso);
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpen(false);
    setIsEdit(false);
    setPerm(null);
  };

  const columns = [
    {
      field: 'name',
      headerName: 'Permisos',
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
                onClick={() => handleDelete(row)}
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
    <>
      <Card>
        <CardHeader
          title='Permisos'
          action={
            <Button variant='contained' onClick={handleOpen}>
              {messages['modules.perms.create']}
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
        <AppDialog title='Permisos' open={open} onClose={handleClose}>
          <PermsForm
            perm={perm}
            isEdit={isEdit}
            postPerm={postPermissions}
            editPerm={editPermissions}
            onClose={handleClose}
          />
        </AppDialog>
        <AppDeleteDialog
          open={openDialog}
          setOpen={setOpenDialog}
          handleConfirm={() => {
            isDelete(perm);
          }}
          title='Eliminar'
          name={perm ? perm.name : 'Permiso'}
          message={messages['modules.perms.warningDelete']}
        />
      </Card>
    </>
  );
};

export default Permisos;
