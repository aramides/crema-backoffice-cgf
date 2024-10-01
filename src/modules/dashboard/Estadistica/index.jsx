import ReportsFormModal from './ReportsForm';
import Analistas from './Analistas';
import Coordinadores from './Coordinadores';
import Directores from './Directores';

const Dashboard = () => {
  /*   const { isPending, data, isSuccess } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => jwtAxios.get('profiles').then((res) => res.data),
  }); */

  return (
    <>
      <ReportsFormModal />
      <p>Dashboard Analistas</p>
      <Analistas />

      <p>Dashboard Coordinadores</p>
      <Coordinadores />

      <p>Dashboard Diretores</p>
      <Directores />
    </>
  );
};

export default Dashboard;
