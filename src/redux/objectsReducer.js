const SET_OBJECTS = 'SET_OBJECTS'
const CHANGE_ISLIST = 'CHANGE_ISLIST'
const OBJECTS_SORT = 'OBJECTS_SORT'

const initState = {
    objects: [],
    isList: false,
}

export const objectsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_OBJECTS:
            return {
                ...state,
                objects: action.objects,
            }
        case CHANGE_ISLIST:
            return {
                ...state,
                isList: action.value,
            }
        case OBJECTS_SORT:
            return {
                ...state,
                objects: [
                    ...state.objects.sort((a, b) => {
                        if (isNaN(+a[action.propName])) {
                            if (a[action.propName][0] < b[action.propName][0]) return -1
                            if (a[action.propName][0] > b[action.propName][0]) return 1
                            if (a[action.propName][0] === b[action.propName][0]) return 0
                        } else {
                            return b[action.propName] - a[action.propName]
                        }
                    }),
                ],
            }
        default:
            return state
    }
}

export const setObjects = (objects) => ({type: SET_OBJECTS, objects})
export const changeIsList = (value) => ({type: CHANGE_ISLIST, value})
export const objectsSort = (propName, order) => ({type: OBJECTS_SORT, propName})
