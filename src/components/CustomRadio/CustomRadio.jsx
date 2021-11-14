import { useStoreContext } from '../../context';

const CustomRadio = ({ children, handler, ...restProps }) => {
  const { store } = useStoreContext();
  const { sortBy } = store;
  const state = restProps['data-sort-by'];
  return (
    <button
      className={`custom-radio ${
        state === sortBy ? 'custom-radio_active' : ''
      }`}
      onClick={handler}
      {...restProps}
    >
      <div className='custom-radio__circle'>
        <div className='custom-radio__circle-inner'></div>
      </div>
      {children}
    </button>
  );
};

export default CustomRadio;
