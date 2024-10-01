import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
const Tablas = ({ pageState, setPageState, loading, columns }) => {
  const { data, page, pageSize, totalPages } = pageState;
  return (
    <>
      <DataGrid
        rows={data}
        columns={columns}
        loading={loading}
        rowCount={totalPages}
        paginationMode='server'
        paginationModel={{ page, pageSize }}
        pageSizeOptions={[1, 10, 25, 50, 100]}
        onPaginationModelChange={(newModel) => {
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
