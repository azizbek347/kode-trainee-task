import { useMemo, useCallback } from 'react';
import { setDepartment } from '../../actions';
import { useStoreContext } from '../../context';
import { normalizeAndLocalizeDepartments } from '../../utils';

const Tabs = () => {
  const { store, dispatch } = useStoreContext();
  const { activeDepartment, data, isLoading } = store;
  const departments = useMemo(() => normalizeAndLocalizeDepartments(data), [
    data,
  ]);
  const clickHandler = useCallback(
    (e) => {
      const { target } = e;
      const department = target.getAttribute('data-department');
      dispatch(setDepartment(department));
    },
    [dispatch]
  );

  return (
    <nav className='tabs'>
      <div className='container'>
        <ul className='tabs__list'>
          <li
            className={`tabs__list-el ${
              activeDepartment === 'all' ? 'tabs__list-el_active' : ''
            }`}
          >
            <button
              onClick={clickHandler}
              className='tabs__tab'
              data-department='all'
            >
              Все
            </button>
          </li>
          {isLoading ? (
            <li className='tabs__skeleton skeleton' />
          ) : (
            departments.map(([departmentLocale, departmentSignature]) => (
              <li
                className={`tabs__list-el ${
                  activeDepartment === departmentSignature
                    ? 'tabs__list-el_active'
                    : ''
                }`}
                key={departmentSignature}
              >
                <button
                  onClick={clickHandler}
                  className='tabs__tab'
                  data-department={departmentSignature}
                >
                  {departmentLocale}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Tabs;
