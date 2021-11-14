import { Link } from 'react-router-dom';
import { getBirthdayMonthDate } from '../../utils';

const EmployeeInformation = (props) => {
  const {
    id,
    avatarUrl,
    firstName,
    lastName,
    userTag,
    department,
    birthdayDate,
  } = props;
  return (
    <Link to={`/${id}`} className='employee-information'>
      <div className='employee-information__inner'>
        <div className='employee-information__content employee-information__content_left'>
          <div className='employee-information__avatar'>
            <img src={avatarUrl} alt={`${firstName} ${lastName}`} />
          </div>
          <div className='employee-information__main'>
            <p className='employee-information__title'>
              {`${firstName} ${lastName}`}
              <span>{userTag}</span>
            </p>
            <p className='employee-information__subtitle'>{department}</p>
          </div>
        </div>
        <div className='employee-information__content employee-information__content_right'>
          {birthdayDate !== undefined ? (
            <p className='employee-information__age'>
              {getBirthdayMonthDate(birthdayDate)}
            </p>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default EmployeeInformation;
