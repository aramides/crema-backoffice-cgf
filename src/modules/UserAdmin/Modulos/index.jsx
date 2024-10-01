import AppDialog from '@crema/components/AppDialog';
import { Button, Card, CardContent, Paper, CardHeader } from '@mui/material';
import React, { useState } from 'react';
import Tablas from '@crema/components/AppTablas/Tablas';
import Formulario from './components/Formulario';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'firstName',
    headerName: 'First name',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    minWidth: 150,
    flex: 1,
  },
];

const rows = [{ id: 1, lastName: 'Snow', firstName: 'Jon' }];

const Modulos = () => {
  localStorage.setItem('myArray', JSON.stringify(rows));

  const myArray = JSON.parse(localStorage.getItem('myArray'));

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card>
        <CardHeader
          title='Modulos'
          action={
            <Button variant='contained' onClick={handleOpen}>
              Añadir Modulos
            </Button>
          }
        />
        <CardContent>
          <Paper elevation={3}>
            <Tablas rows={rows} columns={columns} />
          </Paper>
        </CardContent>

        <AppDialog title='Crear Modulo' open={open} onClose={handleClose}>
          <Formulario />
        </AppDialog>
      </Card>
    </>
  );
};

export default Modulos;
