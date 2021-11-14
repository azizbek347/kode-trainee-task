import { departmentsMap } from './constants';

const formDepartments = (data) => data.reduce(
    (acc, cur) =>
    acc.includes(cur.department) ? acc : [...acc, cur.department], []);

const localizeDepartments = (departments) =>
    departments.reduce((result, department) => [...result, [departmentsMap.get(department), department]], []);

export const normalizeAndLocalizeDepartments = (data) => {
    const departments = formDepartments(data);
    const localizedDepartments = localizeDepartments(departments);
    const result = localizedDepartments.sort((a, b) => a[0].localeCompare(b[0]));
    return [...result];
}

export const findByIdInArray = (array, id) => array.find(item => id === item.id);

export const search = (data, searchTerm) => searchTerm === '' ? data :
    data.filter((item) => {
        searchTerm = searchTerm.toLowerCase();
        const firstNameIncludes = item.firstName.toLowerCase().includes(searchTerm);
        const lastNameIncludes = item.lastName.toLowerCase().includes(searchTerm);
        const userTagIncludes = item.userTag.toLowerCase().includes(searchTerm);
        return firstNameIncludes || lastNameIncludes || userTagIncludes;
    });

export const filterByDepartment = (store, departmentName) => departmentName === 'all' ? store :
    store.reduce((acc, cur) => cur.department === departmentName ? [...acc, cur] : acc, []);