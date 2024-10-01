import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
import { useTheme } from '@mui/material';

const data = [
  {
    days: 'Jan',
    order: 14000,
  },
  {
    days: 'Feb',
    order: 22000,
  },
  {
    days: 'Mar',
    order: 9800,
  },
  {
    days: 'Apr',
    order: 11000,
  },
  {
    days: 'May',
    order: 10000,
  },
  {
    days: 'Jun',
    order: 12780,
  },
  {
    days: 'Jul',
    order: 12000,
  },
  {
    days: 'Aug',
    order: 12000,
  },
  {
    days: 'Sep',
    order: 18000,
  },
  {
    days: 'Oct',
    order: 17000,
  },
  {
    days: 'Nov',
    order: 12780,
  },
  {
    days: 'Dec',
    order: 20900,
  },
];

const SalesChart = () => {
  const theme = useTheme();

  return (
    <ResponsiveContainer width='100%' height={250}>
      <BarChart
        data={data}
        margin={{
          top: 15,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid
          strokeDasharray='3 1'
          horizontal={true}
          vertical={false}
        />
        <XAxis dataKey='days' />
        {/*<YAxis />*/}
        <Tooltip
          labelStyle={{ color: 'black' }}
          contentStyle={{
            borderRadius: 12,
            borderColor: '#FFFFF',
            background: '#FFFFFFCA',
          }}
        />
        <Bar
          stackId='a'
          dataKey='order'
          fill={theme.palette.primary.main}
          barSize={8}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
