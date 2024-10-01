import { Grid } from '@mui/material';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppAnimate from '@crema/components/AppAnimate';
import QuantitysCard from './QuantitysCard';
import { useIntl } from 'react-intl';
import ReportGraph from './ReportGraph';
import ReportsFormModal from './ReportsForm';

const Analistas = () => {
  const { messages } = useIntl();

  return (
    <>
      <ReportsFormModal />
      {
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <AppGridContainer>
            <Grid item xs={12} lg={12}>
              <QuantitysCard data={analyticsData.welcomeCard} />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <ReportGraph
                color='#FFFFFF'
                title={
                  messages['dashboard.analytics.solicitudesRecibidasChart']
                }
              />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <ReportGraph
                color='#FF0000'
                title={
                  messages['dashboard.analytics.solicitudesProcesadasChart']
                }
              />
            </Grid>
          </AppGridContainer>
        </AppAnimate>
      }
    </>
  );
};

const analyticsData = {
  welcomeCard: [
    {
      id: 1,
      type: 'Asignadas',
      counts: 42,
    },
  ],
};

export default Analistas;
