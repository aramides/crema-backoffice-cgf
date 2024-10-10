import { useState } from 'react';
import { Button, Card, CardContent, CardHeader, Paper } from '@mui/material';
import Tablas from '@crema/components/AppTablas/Tablas';
import AppDialog from '@crema/components/AppDialog';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import jwtAxios from '@crema/services/auth/jwt-auth';
/* import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'; */
import AppDialogModal from '@crema/components/AppDialog-modal';
/* import FormUsers from './components/FormUsers'; */

const Usuarios = () => {
  const queryClient = useQueryClient();
  const [row] = useState({});
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [pageState, setPageState] = useState({
    rowId: '_id',
    page: 1,
    pageSize: 10,
    data: [],
    total: 0,
  });

  const { isLoading } = useQuery({
    queryKey: ['proyectos', pageState.page, pageState.pageSize],
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
    const response = await jwtAxios.get('proyectos/table', {
      params: {
        page: pageState.page,
        limit: pageState.pageSize,
      },
    });
    console.log(response.data);
    setPageState({
      ...pageState,
      data: response.data.data,
      total: response.data.count,
    });
    return response.data;
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  /*  const handleOpenDialog = (row) => {
    setRow(row);
    setOpenDialog(true);
  }; */
  /* 
  console.log(pageState); */
  const columns = [
    {
      field: 'nombreProyecto',
      headerName: 'Nombre del PRoyecto',
      minWidth: 150,
      maxWidth: 350,
      flex: 1,
    },
    {
      field: 'descripcionProyecto',
      headerName: 'descripcion',
      minWidth: 150,
      maxWidth: 350,
      flex: 1,
    },

    { field: 'status', headerName: 'Estatus del proyecto', width: 130 },
    {
      field: 'montoAprobado',
      headerName: 'Monto',
      width: 200,
    },
    {
      field: 'tipoProyecto',
      headerName: 'Tipo del Proyecto',
      width: 200,
    },
    /*    {
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
    }, */
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
        {/*  <FormUsers postUser={postUser} /> */}
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
