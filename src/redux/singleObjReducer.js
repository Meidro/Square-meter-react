const SET_SINGLE_OBJ = 'SET_SINGLE_OBJ'
const SET_MODAL_FLAG = 'SET_MODAL_FLAG'

const initState = {
    object: null,
    isModal: false,
}

export const singleObjReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_SINGLE_OBJ:
            return {
                ...state,
                object: action.object,
            }
        case SET_MODAL_FLAG:
            return {
                ...state,
                isModal: action.flag,
            }
        default:
            return state
    }
}

export const setSingleObject = (object) => ({type: SET_SINGLE_OBJ, object})
export const setModalFlag = (flag) => ({type: SET_MODAL_FLAG, flag})
