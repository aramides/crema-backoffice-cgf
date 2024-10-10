export const voceroColumns = [
  {
    headerName: 'Cuentadante',
    field: 'isAccountant',
    valueGetter: (value) => (value ? 'Si' : 'No'),
  },
  {
    headerName: 'Cédula',
    field: 'dni',
    valueGetter: ({ row }) => `${row.origin}-${row.dni}`,
  },
  {
    headerName: 'Nombre',
    field: 'firstName',
    valueGetter: ({ row }) => `${row.firstName} ${row.middleName || ''}`,
    width: 160,
  },
  {
    headerName: 'Apellido',
    field: 'lastName',
    valueGetter: ({ row }) => `${row.lastName} ${row.secondLastName || ''}`,
    width: 160,
  },
  {
    headerName: 'Email',
    field: 'email',
    width: 200,
  },
  {
    headerName: 'Teléfono',
    field: 'cellphone',
    width: 140,
  },
  {
    headerName: 'Fecha de Nacimiento',
    field: 'dateBirth',
    width: 150,
  },
];
