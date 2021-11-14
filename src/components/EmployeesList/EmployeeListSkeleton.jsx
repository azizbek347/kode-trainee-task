import { memo } from 'react';
import { EmployeeInformationSkeleton } from '../EmployeeInformation';

const EmployeeListSkeleton = () => {
  return (
    <div className='employees-list'>
      <div className='container'>
        <EmployeeInformationSkeleton />
        <EmployeeInformationSkeleton />
        <EmployeeInformationSkeleton />
        <EmployeeInformationSkeleton />
        <EmployeeInformationSkeleton />
      </div>
    </div>
  );
};

export default memo(EmployeeListSkeleton);
