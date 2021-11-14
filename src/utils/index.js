export { options } from './constants';
export { sort } from './sort';
export { normalizeAndLocalizeDepartments, findByIdInArray, filterByDepartment, search } from './dataManipulation';
export { calculateAgeInRussian, formatDateNumericInRussian, getBirthdayMonthDate } from './timeManipulation';
export { trapFocus } from './trapFcous';

export const debounce = (func, delay) => {
    let timeoutId
    return (...args) => {
        if (timeoutId) clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            timeoutId = null
            func(...args)
        }, delay)
    }
};