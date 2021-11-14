import {
    FETCHSUCCESSFUL,
    FETCHERROR,
    SETDEPARTMENT,
    SETSORT,
    SETSEARCH,
    SETFILTEREDDATA,
    REFRESH
} from '../actions';

export const initialState = {
    data: [],
    filteredData: [],
    isLoading: true,
    errorOnLoading: false,
    searched: false,
    activeDepartment: 'all',
    sortBy: 'name',
    searchValue: ''
};

export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCHSUCCESSFUL:
            return ({ ...state, data: payload });
        case FETCHERROR:
            return ({ ...state, errorOnLoading: true, isLoading: false });
        case SETDEPARTMENT:
            return ({ ...state, activeDepartment: payload })
        case SETSORT:
            return ({ ...state, sortBy: payload })
        case SETSEARCH:
            return ({ ...state, searchValue: payload, searched: true });
        case SETFILTEREDDATA:
            return ({ ...state, filteredData: payload, isLoading: false });
        case REFRESH:
            return ({ ...state })
        default:
            return state;
    }
}