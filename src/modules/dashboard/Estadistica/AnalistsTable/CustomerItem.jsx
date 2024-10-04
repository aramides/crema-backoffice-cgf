//import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { Fonts } from '@crema/constants/AppEnums';
import { Button } from '@mui/material';

const CustomerItem = ({ item }) => {
  const { messages } = useIntl();

  const getStatusColor = () => {
    if (item.orders >= 0) {
      return '#43C888';
    }
  };

  const rol = 'director';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: { xs: 'flex-start', sm: 'center' },
        padding: '8px 20px',
      }}
      className='item-hover'
    >
      <Avatar
        sx={{
          mr: 4,
          width: 42,
          height: 42,
        }}
        src={item.image}
      />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: { sm: 'center' },
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          sx={{
            fontSize: 14,
            flex: 1,
            mr: 2,
          }}
        >
          <Box
            sx={{
              mb: 0.5,
              fontWeight: Fonts.MEDIUM,
            }}
          >
            {item.name}
          </Box>
          <Box
            sx={{
              fontSize: 14,
              color: 'text.secondary',
            }}
          >
            {item.message}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 2,
          }}
        >
          {rol === 'director' ? (
            <Button variant='contained' sx={{ mr: 5 }}>
              Analistas
            </Button>
          ) : null}

          <Box
            sx={{
              color: '#00e8ff',
              backgroundColor: getStatusColor() + '44',
              padding: '3px 10px',
              borderRadius: '15px',
              marginRight: 2,
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            {item.orders} {messages['dashboard.analytics.recibidas']}
          </Box>

          <Box
            sx={{
              color: getStatusColor(),
              backgroundColor: '#3498DB' + '44',
              padding: '3px 10px',
              borderRadius: '15px',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            {item.processed} {messages['dashboard.analytics.procesadas']}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerItem;

CustomerItem.propTypes = {
  item: PropTypes.object.isRequired,
};
