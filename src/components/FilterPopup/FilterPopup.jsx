import { useCallback, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CustomRadio } from '../CustomRadio';
import { setSort } from '../../actions';
import { useStoreContext } from '../../context';
import { trapFocus } from '../../utils';

const FilterPopup = ({ closePopup }) => {
  const { dispatch } = useStoreContext();
  const setSortBy = useCallback(
    (e) => {
      const { target } = e;
      const sortBy = target.getAttribute('data-sort-by');
      closePopup();
      dispatch(setSort(sortBy));
    },
    [dispatch, closePopup]
  );
  const overlayRef = useRef();
  const focusedElement = useRef();
  useEffect(() => {
    focusedElement.current = document.activeElement;
    const clearEffect = trapFocus(overlayRef.current);
    return () => {
      clearEffect();
      focusedElement.current.focus();
    };
  }, []);
  const markup = (
    <div className='overlay' ref={overlayRef}>
      <div className='popup'>
        <div className='popup__title'>Сортировка</div>
        <button className='popup__close' onClick={closePopup}>
          <span>&times;</span>
        </button>
        <div className='popup__option'>
          <CustomRadio data-sort-by='name' handler={setSortBy}>
            По алфавиту
          </CustomRadio>
        </div>
        <div className='popup__option'>
          <CustomRadio data-sort-by='birthday' handler={setSortBy}>
            По дню рождения
          </CustomRadio>
        </div>
      </div>
    </div>
  );
  return createPortal(markup, document.getElementById('filterPopup'));
};

export default FilterPopup;
