const SET_FILTER_PARAMS = 'SET_FILTER_PARAMS'
const SET_FILTER_OBJECTS = 'SET_FILTER_OBJECTS'

const initState = {
    params: null,
    filterObjects: null,
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
        default:
            return state
    }
}

export const setFilterParams = (params) => ({type: SET_FILTER_PARAMS, params})
export const setFilterObjects = (objects) => ({type: SET_FILTER_OBJECTS, objects})
