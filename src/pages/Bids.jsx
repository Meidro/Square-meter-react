import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Preloader} from '../components/Preloader'
import {getBids} from '../redux/bidsReducer'

export const Bids = () => {
    const bids = useSelector((state) => state.bidsPage.bids)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBids())
    }, [])

    if (!bids) return <Preloader />

    return (
        <>
            <div className='container p-0 mb-5'>
                <div className='heading-1'>Все заявки</div>
            </div>

            {bids.map(({id, name, phone}) => (
                <div key={id} className='panels-wrapper'>
                    <div className='container p-0'>
                        <div className='panel panel--no-hover'>
                            <div className='panel__bid-id'>{id}</div>
                            <div className='panel__bidname'>{name}</div>
                            <div className='panel__bidphone'>{phone}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
