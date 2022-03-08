const SET_FILTER_PARAMS = 'SET_FILTER_PARAMS'
const SET_FILTER_OBJECTS = 'SET_FILTER_OBJECTS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

const initState = {
    params: null,
    filterObjects: null,
    isFetching: false,
}

export const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_FILTER_PARAMS:
            return {
                ...state,
                params: action.params,
            }
        case SET_FILTER_OBJECTS:
            return {
                ...state,
                filterObjects: action.objects,
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.flag,
            }
        default:
            return state
    }
}

export const setFilterParams = (params) => ({type: SET_FILTER_PARAMS, params})
export const setFilterObjects = (objects) => ({type: SET_FILTER_OBJECTS, objects})
const setIsFetchingAC = (flag) => ({type: SET_IS_FETCHING, flag})

export const setIsFetching = (flag) => (dispatch) => {
    dispatch(setIsFetchingAC(flag))
}
