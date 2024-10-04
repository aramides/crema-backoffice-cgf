import { DataGrid, esES } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

const NoRowData = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <span>No hay datos</span>
    </div>
  );
};

const Tablas = ({ pageState, setPageState, loading, columns }) => {
  const { data, page, pageSize, total } = pageState;

  return (
    <>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row[pageState.rowId] ?? row.id}
        loading={loading}
        rowCount={total}
        paginationMode='server'
        paginationModel={{ page, pageSize }}
        sx={{ '& .MuiDataGrid-virtualScroller': { minHeight: '70px' } }}
        slots={{
          noRowsOverlay: NoRowData,
        }}
        pageSizeOptions={[1, 10, 25, 50, 100]}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        onPaginationModelChange={(newModel) => {
          console.log(newModel, 'newModel');
          setPageState({
            ...pageState,
            page: newModel.page,
            pageSize: newModel.pageSize,
          });
        }}
      />
    </>
  );
};

Tablas.propTypes = {
  pageState: PropTypes.object,
  setPageState: PropTypes.func,
  loading: PropTypes.bool,
  columns: PropTypes.array,
};

export default Tablas;
