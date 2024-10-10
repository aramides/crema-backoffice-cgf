import Tablas from '@crema/components/AppTablas/Tablas';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { voceroColumns } from './voceroColumns';
import { GetVoceros } from '@crema/helpers/VoceroHelper';
import { useQuery } from '@tanstack/react-query';

const VoceroTable = () => {
  const [pageState, setPageState] = useState({
    rowId: '_id',
    page: 0,
    pageSize: 10,
    data: [],
    total: 0,
  });

  const { isLoading } = useQuery({
    queryKey: ['voceros'],
    queryFn: () => fetchData(),
  });

  async function fetchData() {
    const response = await GetVoceros();
    const data = response.data;
    setPageState((prev) => ({
      ...prev,
      total: data.length,
      data: data,
    }));
    return data;
  }

  return (
    <>
      <Paper sx={{ height: 400, width: '100%', marginTop: 5 }}>
        <Tablas
          pageState={pageState}
          setPageState={setPageState}
          columns={voceroColumns}
          getRowId={(row) => row._id}
          loading={isLoading}
        />
      </Paper>
    </>
  );
};

export default VoceroTable;
