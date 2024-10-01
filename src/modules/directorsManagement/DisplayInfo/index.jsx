import AppCard from '@crema/components/AppCard';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

const DisplayInfo = ({ nombre, nacimiento, ingreso, cargo }) => {
  return (
    <AppCard sxStyle={{ my: 5 }}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <p>
            <b>Nombre</b>: {nombre}
          </p>
          <p>
            <b>Fecha Nacimiento</b>: {nacimiento}
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <p>
            <b>Fecha Ingreso</b>: {ingreso}
          </p>
          <p>
            <b>Cargo</b>: {cargo}
          </p>
        </Grid>
      </Grid>
    </AppCard>
  );
};

export default DisplayInfo;

DisplayInfo.propTypes = {
  nombre: PropTypes.string,
  nacimiento: PropTypes.string,
  ingreso: PropTypes.string,
  cargo: PropTypes.string,
};
