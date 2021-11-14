import { EmployeeListSeparator } from './EmployeeListSeparator';
import { EmployeeInformation } from '../EmployeeInformation';
import { useStoreContext } from '../../context';

const EmployeesList = () => {
  const { store } = useStoreContext();
  const { filteredData } = store;
  const employeesList = [...filteredData];
  const sortedByBirthday = filteredData
    .map((item) => item.birthdayDate)
    .filter(Boolean);
  if (sortedByBirthday.length > 0) {
    const currentYear = new Date().getFullYear();
    const index = sortedByBirthday.findIndex(
      (item, index, array) =>
        item.getFullYear() === currentYear &&
        array[index + 1]?.getFullYear() - 1 === currentYear
    );
    employeesList.splice(index + 1, 0, null);
  }
  return (
    <div className='employees-list'>
      <div className='container'>
        {employeesList.map((item) =>
          item !== null ? (
            <EmployeeInformation key={item.id} {...item} />
          ) : (
            <EmployeeListSeparator key={new Date().getFullYear() + 1}>
              {new Date().getFullYear() + 1}
            </EmployeeListSeparator>
          )
        )}
      </div>
    </div>
  );
};

export default EmployeesList;
