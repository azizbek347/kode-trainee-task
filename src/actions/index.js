export const FETCHSUCCESSFUL = 'fetch/successful';
export const FETCHERROR = 'fetch/error';
export const SETDEPARTMENT = 'set/department';
export const SETSORT = 'set/sort';
export const SETSEARCH = 'set/search';
export const SETFILTEREDDATA = 'set/filteredData';
export const REFRESH = 'refresh';

export const setFetchedData = (payload) => ({ type: FETCHSUCCESSFUL, payload });
export const fetchFailed = () => ({ type: FETCHERROR });
export const setDepartment = (payload) => ({ type: SETDEPARTMENT, payload });
export const setSort = (payload) => ({ type: SETSORT, payload });
export const setSearch = (payload) => ({ type: SETSEARCH, payload });
export const setFilteredData = (payload) => ({ type: SETFILTEREDDATA, payload });
export const refresh = () => ({ type: REFRESH });