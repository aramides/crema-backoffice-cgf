import Tablas from '@crema/components/AppTablas/Tablas';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { voceroColumns } from './voceroColumns';
import { GetVoceros } from '@crema/helpers/VoceroHelper';

const VoceroTable = (open) => {
  const [pageState, setPageState] = useState({
    isLoading: false,
    data: [],
    total: 0,
    page: 1,
    pageSize: 10,
  });

  async function fetchData() {
    setPageState((prev) => {
      return { ...prev, isLoading: true };
    });
    try {
      const response = await GetVoceros();
      const data = response.data;
      setPageState((prev) => ({
        ...prev,
        total: data.length,
        data: data,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      setPageState((prev) => {
        return { ...prev, isLoading: false };
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, [open]);

  return (
    <>
      <Paper sx={{ height: 400, width: '100%', marginTop: 5 }}>
        <Tablas
          pageState={pageState}
          setPageState={setPageState}
          columns={voceroColumns}
          getRowId={(row) => row._id}
        />
      </Paper>
    </>
  );
};

export default VoceroTable;
