import { Link, useParams, Navigate } from 'react-router-dom';
import { useStoreContext } from '../../context';
import {
  formatDateNumericInRussian,
  calculateAgeInRussian,
  findByIdInArray,
} from '../../utils';
import chevronRight from '../../assets/icons/chevronRight.svg';
import starIcon from '../../assets/icons/starIcon.svg';
import callIcon from '../../assets/icons/callIcon.svg';

const Profile = (props) => {
  const { profileId: id } = useParams();
  const { store } = useStoreContext();
  const { data } = store;
  let profile = findByIdInArray(data, id);
  if (profile === undefined) return <Navigate replace to='/' />;
  const {
    avatarUrl,
    firstName,
    lastName,
    userTag,
    department,
    birthday,
    phone,
  } = profile;
  return (
    <div className='profile'>
      <nav className='profile__nav-bar'>
        <div className='container'>
          <Link className='profile__nav-bar-link' to='/'>
            <img src={chevronRight} alt='chevron right' />
          </Link>
        </div>
      </nav>
      <header className='profile__header'>
        <div className='container container_column-centerer'>
          <img
            src={avatarUrl}
            alt={`${firstName} ${lastName}`}
            className='profile__header-img'
          />
          <div className='profile__header-info'>
            <p className='profile__header-info-name'>
              <strong>{`${firstName} ${lastName}`}</strong>
              <span>{userTag}</span>
            </p>
            <p className='profile__header-info-department'>{department}</p>
          </div>
        </div>
      </header>
      <div className='profile__details'>
        <div className='container'>
          <div className='profile__details-card'>
            <div className='profile__details-card-title'>
              <img src={starIcon} alt='start icon' />
              <span>{formatDateNumericInRussian(birthday)}</span>
            </div>
            <div className='profile__main-card-age'>
              {calculateAgeInRussian(birthday)}
            </div>
          </div>
          <div className='profile__details-card'>
            <a className='profile__details-card-title' href={`tel:${phone}`}>
              <img src={callIcon} alt='call icon' />
              <span>{phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
