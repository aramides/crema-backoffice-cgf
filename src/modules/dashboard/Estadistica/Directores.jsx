import { Grid } from '@mui/material';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppAnimate from '@crema/components/AppAnimate';
import QuantitysCard from './QuantitysCard';
import { useIntl } from 'react-intl';
import ComparativeGraph from './ComparativeGraph';
import ReportGraph from './ReportGraph';
import AnalistsTable from './AnalistsTable';
import StatesGraph from './StatesGraph';
import ReportsFormModal from './ReportsForm';

const Directores = () => {
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

            <Grid item xs={12} lg={12}>
              <StatesGraph
                title={messages['dashboard.analytics.solicitudesEstado']}
              />
            </Grid>

            <Grid item xs={12} lg={12}>
              <ComparativeGraph
                title={messages['dashboard.analytics.salesState']}
                salesState={analyticsData.salesState}
                chartData={analyticsData.salesChartData}
              />
            </Grid>
            <Grid item xs={12} lg={12}>
              <ComparativeGraph
                title={messages['dashboard.analytics.state']}
                salesState={analyticsData.state}
                chartData={analyticsData.stateChart}
              />
            </Grid>

            <Grid item xs={12} lg={12}>
              <AnalistsTable
                title={messages['dashboard.analytics.personalCoordinadores']}
                newCustomers={analyticsData.newCustomers}
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
      type: 'Pendientes',
      counts: 42,
    },
    {
      id: 2,
      type: 'Recibidas',
      counts: 144,
      icon: 'BiMessageDetail',
    },
    {
      id: 3,
      type: 'Procesadas',
      counts: 12,
      icon: 'CgFileDocument',
    },
    {
      id: 4,
      type: 'Reasignadas',
      counts: 144,
      icon: 'BiMessageDetail',
    },
    {
      id: 5,
      type: 'Rechazadas',
      counts: 12,
      icon: 'CgFileDocument',
    },
  ],

  salesChartData: [
    {
      name: 'Jan',
      AS: 8000,
      Rev: 2000,
    },
    {
      name: 'Feb',
      AS: 6500,
      Rev: 1398,
    },
    {
      name: 'Mar',
      AS: 9800,
      Rev: 2000,
    },
    {
      name: 'Apr',
      AS: 7000,
      Rev: 3000,
    },
    {
      name: 'May',
      AS: 2390,
      Rev: 3800,
    },
    {
      name: 'Jun',
      AS: 8000,
      Rev: 3600,
    },
    {
      name: 'Jul',
      AS: 8000,
      Rev: 2000,
    },
    {
      name: 'Aug',
      AS: 6500,
      Rev: 1398,
    },
    {
      name: 'Sep',
      AS: 9800,
      Rev: 2000,
    },
    {
      name: 'Oct',
      AS: 3908,
      Rev: 1500,
    },
    {
      name: 'Nov',
      AS: 7000,
      Rev: 3000,
    },
    {
      name: 'Dec',
      AS: 2390,
      Rev: 3800,
    },
  ],

  salesState: [
    {
      id: 1,
      amount: '365',
      type: 'Recibidas',
      icon: '/assets/images/dashboard/all_time_sales.svg',
    },
    {
      id: 2,
      amount: '390',
      type: 'Procesadas',
      icon: '/assets/images/dashboard/commission_sale.svg',
    },
    // {
    //   id: 5,
    //   amount: '3510',
    //   type: 'Invoices',
    //   icon: '/assets/images/dashboard/icon_revenue.svg',
    // },
  ],

  state: [
    {
      id: 1,
      amount: '365',
      type: 'Recibidas',
      icon: '/assets/images/dashboard/all_time_sales.svg',
    },
    {
      id: 2,
      amount: '390',
      type: 'Procesadas',
      icon: '/assets/images/dashboard/commission_sale.svg',
    },
    // {
    //   id: 5,
    //   amount: '3510',
    //   type: 'Invoices',
    //   icon: '/assets/images/dashboard/icon_revenue.svg',
    // },
  ],

  stateChart: [
    {
      name: 'Distrito Capital',
      AS: 8000,
      Rev: 2000,
    },
    {
      name: 'Vargas',
      AS: 6500,
      Rev: 1398,
    },
  ],

  newCustomers: [
    {
      id: 1,
      image: '/assets/images/avatar/A1.jpg',
      name: 'Angelina Joew',
      orders: 0,
      processed: 16,
      color: '',
    },
    {
      id: 2,
      image: '/assets/images/avatar/A2.jpg',
      name: 'John Mathew',
      orders: 3,
      processed: 16,

      color: '',
    },
    {
      id: 3,
      image: '/assets/images/avatar/A3.jpg',
      name: 'George Bailey',
      orders: 3,
      processed: 16,

      color: '',
    },
    {
      id: 4,
      image: '/assets/images/avatar/A4.jpg',
      name: 'Maria Lee',
      orders: 0,
      processed: 16,

      color: '',
    },
    {
      id: 5,
      image: '/assets/images/avatar/A1.jpg',
      name: 'Angelina Joew',
      orders: 4,
      processed: 16,

      color: '',
    },
    {
      id: 6,
      image: '/assets/images/avatar/A4.jpg',
      name: 'Maria Lee',
      orders: 0,
      processed: 16,
      color: '',
    },
    {
      id: 7,
      image: '/assets/images/avatar/A1.jpg',
      name: 'Angelina Joew',
      orders: 4,
      processed: 16,
      color: '',
    },
  ],
};

export default Directores;
