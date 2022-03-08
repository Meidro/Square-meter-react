import {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setBidResultAC} from '../redux/bidsReducer'
import {setModalFlag} from '../redux/singleObjReducer'

export const BidResult = () => {
    const dispatch = useDispatch()
    const bidResultText = useSelector((state) => state.bidsPage.bidResultText)
    const modal = useRef(null)

    const closeModal = (e) => {
        if (!modal.current.contains(e.target)) {
            dispatch(setBidResultAC(false))
            dispatch(setModalFlag(false))
        }
    }

    return (
        <div onClick={closeModal} className='modal-wrapper'>
            <div className='modal' ref={modal}>
                <div style={{padding: '100px 0', textAlign: 'center'}} className='modal__title'>
                    {bidResultText}
                </div>

                <button
                    onClick={() => {
                        dispatch(setBidResultAC(false))
                        dispatch(setModalFlag(false))
                    }}
                    className='modal__close'
                >
                    Закрыть
                </button>
            </div>
        </div>
    )
}
