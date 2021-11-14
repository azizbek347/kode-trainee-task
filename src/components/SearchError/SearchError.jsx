import { memo } from 'react';
import magnifyingGlassIcon from '../../assets/icons/leftPointingMagnifyingGlass.png';

const SearchError = (props) => {
  return (
    <div className='search-error'>
      <div className='search-error__inner'>
        <img
          src={magnifyingGlassIcon}
          alt='magnifying glass icon'
          className='search-error__icon'
        />
        <p className='search-error__response'>Мы никого не нашли</p>
        <p className='search-error__advice'>Попробуй скорректировать запрос</p>
      </div>
    </div>
  );
};

export default memo(SearchError);
