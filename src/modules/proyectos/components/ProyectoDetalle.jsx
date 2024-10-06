import AppsHeader from '@crema/components/AppsContainer/AppsHeader';
import AppTooltip from '@crema/components/AppTooltip';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import jwtAxios from '@crema/services/auth/jwt-auth';

const ProyectoDetalle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const onClickBackButton = () => {
    navigate(-1);
  };

  const { isLoading, data } = useQuery({
    queryKey: ['proyectos-detalle', id],
    queryFn: () => FetchData(),
  });

  const FetchData = async () => {
    const response = await jwtAxios.get(`proyectos/${id}`);

    return response.data;
  };
  console.log(data);
  return (
    <>
      <AppsHeader>
        <Box
          sx={{
            cursor: 'pointer',
          }}
          component='span'
          mr={{ xs: 2, sm: 4 }}
          onClick={onClickBackButton}
        >
          <AppTooltip title={<IntlMessages id='common.back' />}>
            <ArrowBackIcon
              sx={{
                color: 'text.secondary',
              }}
            />
          </AppTooltip>
        </Box>
        {data?.nombreProyecto}
      </AppsHeader>
      <AppsContent isDetailView>
        <Box sx={{ p: 5 }}>
          <p>{data?.descripcionProyecto}</p>
        </Box>
      </AppsContent>
    </>
  );
};

ProyectoDetalle.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProyectoDetalle;
