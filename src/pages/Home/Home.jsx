import { CriticalError } from '../../components/CriticalError';
import { SearchError } from '../../components/SearchError';
import {
  EmployeesList,
  EmployeesListSkeleton,
} from '../../components/EmployeesList';
import { Navbar } from '../../components/Navbar';
import { useStoreContext } from '../../context';

const Markup = (stacked, children) => (
  <div className={`home ${stacked ? 'home_stacked-column' : ''}`}>
    <Navbar />
    {children}
  </div>
);

const Home = () => {
  const { store } = useStoreContext();
  const { isLoading, errorOnLoading, filteredData, searched } = store;
  const stackedColumnLayout = filteredData.length === 0 || errorOnLoading;
  if (isLoading) return Markup(stackedColumnLayout, <EmployeesListSkeleton />);
  else if (errorOnLoading)
    return Markup(stackedColumnLayout, <CriticalError />);
  else if (searched && filteredData.length === 0)
    return Markup(stackedColumnLayout, <SearchError />);
  return Markup(stackedColumnLayout, <EmployeesList />);
};

export default Home;
