import { memo } from 'react';
import flyingSaucer from '../../assets/icons/flyingSaucer.png';
import { useStoreContext } from '../../context';
import { setFetchedData, fetchFailed } from '../../actions';
import axios from 'axios';
import { options } from '../../utils';

const CriticalError = () => {
  const { dispatch } = useStoreContext();
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

  return (
    <div className='critical-error'>
      <div className='critical-error__content'>
        <div className='critical-error__row'>
          <img
            src={flyingSaucer}
            alt='flying saucer icon'
            className='critical-error__icon'
          />
        </div>
        <div className='critical-error__row'>
          <p className='critical-error__reason'>
            Какой-то сверхразум все сломал
          </p>
        </div>
        <div className='critical-error__row'>
          <p className='critical-error__promise'>Постараемся быстро починить</p>
        </div>
        <div className='critical-error__row'>
          <button className='critical-error__reload' onClick={fetchData}>
            Попробовать снова
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(CriticalError);
