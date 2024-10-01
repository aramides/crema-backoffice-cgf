import AppCard from '@crema/components/AppCard';
import SalesChart from './SalesChart';
import AppSelect from '@crema/components/AppSelect';
import { useIntl } from 'react-intl';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const ReportGraph = ({ title }) => {
  const { messages } = useIntl();

  const handleSelectionType = () => {
    // blank function
  };

  return (
    <AppCard
      sxStyle={{ position: 'relative' }}
      title={title}
      action={
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              flexWrap: 'wrap',
              mr: 2,
            }}
          >
            <AppSelect
              menus={[
                messages['dashboard.thisWeek'],
                messages['dashboard.thisMonth'],
              ]}
              defaultValue={messages['dashboard.thisWeek']}
              onChange={handleSelectionType}
            />
          </Box>
        </Box>
      }
    >
      <SalesChart />
    </AppCard>
  );
};

export default ReportGraph;

ReportGraph.propTypes = {
  title: PropTypes.string,
};
