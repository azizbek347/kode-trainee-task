import { useState, useEffect, useCallback } from 'react';
import { FilterPopup } from '../FilterPopup';
import { setSearch } from '../../actions';
import { useStoreContext } from '../../context';
import { debounce } from '../../utils';

import filterIcon from '../../assets/icons/filterIcon.svg';
import searchIcon from '../../assets/icons/searchIcon.svg';

const SearchBar = () => {
  const [filterOpened, setFilterOpened] = useState(false);
  const toggleFilterVisibility = useCallback(
    () => setFilterOpened((prev) => !prev),
    []
  );
  useEffect(() => {
    if (filterOpened) document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = '');
  }, [filterOpened]);
  const { dispatch, store } = useStoreContext();
  const debouncedDispatch = useCallback(debounce(dispatch, 200), [dispatch]);
  const handleSearch = useCallback(
    (e) => debouncedDispatch(setSearch(e.target.value)),
    [debouncedDispatch]
  );

  const { searchValue } = store;

  return (
    <div className='search-bar'>
      <div className='container'>
        <div className='search-bar__inner'>
          <label className='search-bar__label'>
            <img
              className='search-bar__icon'
              src={searchIcon}
              alt='search icon'
            />
            <input
              type='text'
              className='search-bar__input'
              autoComplete='off'
              placeholder='Введи имя, тег, почту...'
              onChange={handleSearch}
              defaultValue={searchValue}
            />
          </label>
          <button
            className='search-bar__filter'
            aria-label='Search filter'
            onClick={toggleFilterVisibility}
          >
            <img src={filterIcon} alt='filter icon' />
          </button>
        </div>
      </div>
      {filterOpened ? (
        <FilterPopup closePopup={toggleFilterVisibility} />
      ) : null}
    </div>
  );
};

export default SearchBar;
