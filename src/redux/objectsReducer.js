const SET_OBJECTS = 'SET_OBJECTS'

const initState = {
    objects: [],
}

export const objectsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_OBJECTS:
            return {
                ...state,
                objects: action.objects,
            }
        default:
            return state
    }
}

export const setObjects = (objects) => ({type: SET_OBJECTS, objects})
