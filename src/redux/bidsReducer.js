import {API} from '../api/api'

const SET_BIDS = 'SET_BIDS'
const SET_BID_RESULT = 'SET_BID_RESULT'

const initState = {
    bids: null,
    isBidResult: false,
    bidResultText: '',
}

export const bidsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_BIDS:
            return {
                ...state,
                bids: action.bids,
            }
        case SET_BID_RESULT:
            return {
                ...state,
                isBidResult: action.flag,
                bidResultText: action.text,
            }
        default:
            return state
    }
}

const setBidsAC = (bids) => ({type: SET_BIDS, bids})
export const setBidResultAC = (flag, text) => ({type: SET_BID_RESULT, flag, text})

export const getBids = () => async (dispatch) => {
    const bids = await API.getBids()
    dispatch(setBidsAC(bids))
}

export const addBids = (newBids) => async (dispatch) => {
    const data = await API.addBids(newBids)
    if (data.message === 'Bid Created') {
        dispatch(setBidResultAC(true, 'Заявка добавлена успешно!'))
    } else if (data.message === 'Bid Not Created' && !data.errors) {
        dispatch(setBidResultAC(true, 'Что-то пошло не так. Ошибка сервера'))
    }
}
