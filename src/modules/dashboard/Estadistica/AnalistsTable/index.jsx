import AppCard from '@crema/components/AppCard';
import CustomerItem from './CustomerItem';
import AppList from '@crema/components/AppList';
import AppScrollbar from '@crema/components/AppScrollbar';
import PropTypes from 'prop-types';

const AnalistsTable = ({ newCustomers, title }) => {
  return (
    <AppCard title={title} contentStyle={{ px: 0 }}>
      <AppScrollbar sx={{ maxHeight: 300 }}>
        <AppList
          data={newCustomers}
          renderRow={(item) => (
            <>
              <CustomerItem listStyle='paddingX' key={item.id} item={item} />
            </>
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default AnalistsTable;

AnalistsTable.propTypes = {
  newCustomers: PropTypes.array,
  title: PropTypes.string,
};
