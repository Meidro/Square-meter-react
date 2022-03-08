import {API} from '../api/api'

const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
const SET_FAVS_OBJ = 'SET_FAVS_OBJ'

const initState = {
    favsId: JSON.parse(localStorage.getItem('favsId')) || [],
    favouritesObj: [],
}

export const favouritesReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            state.favsId.push(action.id)
            localStorage.setItem('favsId', JSON.stringify(state.favsId))
            return {
                ...state,
            }
        case REMOVE_FROM_FAVOURITES:
            state.favsId = state.favsId.filter((id) => id !== action.id)
            localStorage.setItem('favsId', JSON.stringify(state.favsId))
            return {
                ...state,
            }
        case SET_FAVS_OBJ:
            return {
                ...state,
                favouritesObj: action.obj,
            }
        default:
            return state
    }
}

export const addToFavouritesAC = (id) => ({type: ADD_TO_FAVOURITES, id})
export const removeFromFavouritesAC = (id) => ({type: REMOVE_FROM_FAVOURITES, id})
export const setFavsObjAC = (obj) => ({type: SET_FAVS_OBJ, obj})

export const setFavsObj = (ids) => async (dispatch) => {
    const obj = await API.getFavsObj(ids)
    dispatch(setFavsObjAC(obj))
}
