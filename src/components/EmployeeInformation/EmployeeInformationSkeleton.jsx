import { memo } from 'react';

const EmployeeInformationSkeleton = () => {
  return (
    <div className='employee-information'>
      <div className='employee-information__inner'>
        <div className='employee-information__content employee-information__content_left'>
          <div className='employee-information__avatar'>
            <div className='skeleton'></div>
          </div>
          <div className='employee-information__main'>
            <p className='employee-information__title skeleton'></p>
            <p className='employee-information__subtitle skeleton'></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(EmployeeInformationSkeleton);
