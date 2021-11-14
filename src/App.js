import axios from 'axios';
import { useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { setFetchedData, fetchFailed, setFilteredData } from './actions';
import { useStoreContext } from './context';
import { options, filterByDepartment, search, sort } from './utils';
import { Profile } from './pages/Profile';
import { Home } from './pages/Home';

const App = () => {
  const { dispatch, store } = useStoreContext();
  const { data, activeDepartment, sortBy, searchValue } = store;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        const { data, status } = response;
        if (status === 200) {
          dispatch(setFetchedData(data.items));
        }
      } catch (error) {
        dispatch(fetchFailed());
      }
    };
    fetchData();
  }, [dispatch]);

  const byActiveDepartment = useMemo(
    () =>
      data.length === 0 ? data : filterByDepartment(data, activeDepartment),
    [activeDepartment, data]
  );
  const bySearchValue = useMemo(
    () =>
      byActiveDepartment.length === 0
        ? byActiveDepartment
        : search(byActiveDepartment, searchValue),
    [byActiveDepartment, searchValue]
  );
  const result = useMemo(
    () =>
      bySearchValue.length === 0 ? bySearchValue : sort[sortBy](bySearchValue),
    [bySearchValue, sortBy]
  );
  useEffect(() => {
    if (data.length !== 0) {
      dispatch(setFilteredData(result));
    }
  }, [result, dispatch, data]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/:profileId' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
