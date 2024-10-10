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

/**
 * Componente que renderiza una tabla con paginaci n
 * Recibe como props:
 * - pageState: objeto con la informacion de la p gina actual (data, page, pageSize, total)
 * - setPageState: funci n para cambiar el estado de la p gina
 * - loading: booleano que indica si la tabla est  cargando
 * - columns: array de columnas a mostrar en la tabla
 * La tabla se renderiza con la opcion de paginacion serverSide,
 * es decir, se le pasa a la tabla la informacion de la pagina actual y
 * la cantidad total de filas, y la tabla se encarga de mostrar la p gina
 * correspondiente y los botones para cambiar de pagina.
 * Tambien se puede personalizar el tama o de la pagina y mostrar un mensaje
 * personalizado si no hay datos.
 */

const Tablas = ({
  pageState,
  setPageState,
  loading,
  columns,
  handleOnRowClick = () => null,
  getRowId = (row) => row[pageState.rowId] ?? row.id,
}) => {
  const { data, page, pageSize, total } = pageState;

  return (
    <>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={getRowId}
        loading={loading}
        onRowClick={handleOnRowClick}
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
  getRowId: PropTypes.func,
  handleOnRowClick : PropTypes.func,
};

export default Tablas;
