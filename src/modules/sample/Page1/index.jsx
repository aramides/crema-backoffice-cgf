// import AppDialog from '@crema/components/AppDialog';
import AppDialog from '@crema/components/AppDialog';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Paper,
} from '@mui/material';
import { useState } from 'react';
/*import Tablas from './Tablas';*/
import Tablas from '@crema/components/AppTablas/Tablas';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';

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
  {
    field: 'age',
    headerName: 'Age',
    minWidth: 150,
    flex: 1,
  },
  {
    field: 'Editar',
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => (
      <strong>
        {params.value}
        <IconButton
          color='primary'
          id='edit'
          variant='contained'
          size='small'
          style={{ marginLeft: 16 }}
          tabIndex={params.hasFocus ? 0 : -1}
        >
          <Edit />
        </IconButton>
      </strong>
    ),
  },
  {
    field: 'Eliminar',
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => (
      <strong>
        {params.value}
        <IconButton
          color='secondary'
          id='delete'
          variant='contained'
          size='small'
          style={{ marginLeft: 16 }}
          tabIndex={params.hasFocus ? 0 : -1}
        >
          <DeleteIcon />
        </IconButton>
      </strong>
    ),
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 69 },
  { id: 6, lastName: 'Melisandre', firstName: 'dsasa', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'sadsa', firstName: 'sadassad', age: 68 },
];

const Page1 = () => {
  localStorage.setItem('myArray', JSON.stringify(rows));

  const myArray = JSON.parse(localStorage.getItem('myArray'));
  console.log(myArray);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card>
        <CardHeader
          title='Crud'
          action={
            <Button variant='contained' onClick={handleOpen}>
              AÑADIR
            </Button>
          }
        />
        <CardContent>
          <Paper elevation={3}>
            <Tablas rows={rows} columns={columns} />
          </Paper>
        </CardContent>

        <AppDialog title='Sample Dialog' open={open} onClose={handleClose} />
      </Card>
    </>
  );
};

export default Page1;
