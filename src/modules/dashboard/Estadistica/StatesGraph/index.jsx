import AppCard from '@crema/components/AppCard';
import SalesChart from './SalesChart';
import PropTypes from 'prop-types';

const StatesGraph = ({ title }) => {
  return (
    <AppCard sxStyle={{ position: 'relative' }} title={title}>
      <SalesChart />
    </AppCard>
  );
};

export default StatesGraph;

StatesGraph.propTypes = {
  title: PropTypes.string,
};
