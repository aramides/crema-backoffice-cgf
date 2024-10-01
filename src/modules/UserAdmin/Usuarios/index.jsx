import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Paper,
} from '@mui/material';
import Tablas from '@crema/components/AppTablas/Tablas';
import AppDialog from '@crema/components/AppDialog';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import jwtAxios from '@crema/services/auth/jwt-auth';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AppDialogModal from '@crema/components/AppDialog-modal';
import FormUsers from './components/FormUsers';

const Usuarios = () => {
  const queryClient = useQueryClient();
  const [row, setRow] = useState({});
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [pageState, setPageState] = useState({
    page: 0,
    pageSize: 10,
    data: [],
    total: 0,
    totalPages: 0,
  });

  const { isLoading } = useQuery({
    queryKey: ['users', pageState.page, pageState.rowsPerPage],
    queryFn: () => FetchData(),
  });

  const { mutate: EditStatus } = useMutation({
    mutationFn: (params) => {
      return jwtAxios
        .put(`users/isActive/${params.id}`)
        .then((res) => res.data);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
  const { mutate: postUser } = useMutation({
    mutationFn: (params) => {
      return jwtAxios.post(`users`, { ...params }).then((res) => res.data);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const FetchData = async () => {
    const response = await jwtAxios.get('users/table', {
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

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleOpenDialog = (row) => {
    setRow(row);
    setOpenDialog(true);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    {
      field: 'email',
      headerName: 'Correo',
      minWidth: 150,
      flex: 1,
    },
    {
      field: 'ci',
      headerName: 'Cedula',
      renderCell: ({ row: { ci, nationality } }) => {
        return `${nationality}-${ci}`;
      },
      width: 80,
    },
    { field: 'birthdate', headerName: 'Fecha Nacimiento', width: 130 },
    { field: 'phone', headerName: 'Telefono', width: 100 },
    {
      field: 'isActive',
      headerName: 'Estatus',
      width: 120,
      renderCell: ({ row: { isActive, id, email } }) => {
        return isActive ? (
          <Chip
            deleteIcon={<DoneOutlineRoundedIcon />}
            label='Activo'
            variant='outlined'
            color='success'
            onDelete={() => {
              handleOpenDialog({ id, email });
            }}
          />
        ) : (
          <Chip
            deleteIcon={<CloseRoundedIcon />}
            label='Inactivo'
            variant='outlined'
            color='error'
            onDelete={() => {
              handleOpenDialog({ id, email });
            }}
          />
        );
      },
    },
  ];

  return (
    <Card>
      <CardHeader
        title='Usuarios'
        action={
          <Button variant='contained' onClick={handleOpen}>
            Añadir Usuarios
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

      <AppDialog title='Crear Modulo' open={open} onClose={handleClose}>
        <FormUsers postUser={postUser} />
      </AppDialog>

      <AppDialogModal
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        handleConfirm={() => {
          EditStatus(row);
        }}
        title='Cambio de Estatus'
        parrafo={`¿Está seguro de que deseas cambiar el estatus del usuario ${row.email}?`}
      />
    </Card>
  );
};

export default Usuarios;
