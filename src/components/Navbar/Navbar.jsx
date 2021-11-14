import { SearchBar } from '../SearchBar';
import { Tabs } from '../Tabs';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__title'>
        <div className='container'>
          <p>Поиск</p>
        </div>
      </div>
      <SearchBar />
      <Tabs />
    </div>
  );
};

export default Navbar;
