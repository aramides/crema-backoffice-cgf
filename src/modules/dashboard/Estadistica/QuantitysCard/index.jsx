import { alpha, Box } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';
import PropTypes from 'prop-types';
import AppScrollbar from '@crema/components/AppScrollbar';

const QuantitysCard = ({ data }) => {
  return (
    <AppCard
      sxStyle={{
        mb: { xs: 1, md: 1 },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          sx={{
            mr: { xs: 2, xl: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              mx: -3,
            }}
          >
            <AppScrollbar
              sx={{
                maxWidth: 960,
                py: 2,
                px: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  //justifyContent: 'space-between',
                  mx: -3,
                }}
              >
                {data.map((item, index) => (
                  <Box
                    key={'box-' + index}
                    sx={{
                      px: 3,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        mr: 4,
                        backgroundColor: (theme) =>
                          alpha(theme.palette.primary.main, 0.1),
                        width: { xs: 46, md: 60 },
                        height: { xs: 46, md: 60 },
                        minWidth: { xs: 46, md: 60 },
                        fontSize: { xs: 24, md: 26 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 1.25,
                        borderRadius: '50%',
                      }}
                    ></Box>
                    <Box
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      <Box
                        sx={{
                          color: 'text.primary',
                          fontWeight: Fonts.MEDIUM,
                          fontSize: 18,
                          position: 'relative',
                          lineHeight: 1,
                          marginBottom: 0.5,
                        }}
                        component='h5'
                      >
                        {item.counts}
                      </Box>

                      <Box component='p'>{item.type}</Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </AppScrollbar>
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default QuantitysCard;

QuantitysCard.propTypes = {
  data: PropTypes.array,
};
