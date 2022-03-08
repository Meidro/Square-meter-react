import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {NavLink, useParams} from 'react-router-dom'
import {API} from '../api/api'
import {BidResult} from '../components/BidResult'
import {Modal} from '../components/Modal'
import {Preloader} from '../components/Preloader'
import {addToFavouritesAC, removeFromFavouritesAC} from '../redux/favouritesReducer'
import {setModalFlag, setSingleObject} from '../redux/singleObjReducer'
import {splitByThree} from '../utils/splitByThree'

export const SingleObject = () => {
    const param = useParams()
    const dispatch = useDispatch()
    const singleObj = useSelector((state) => state.singleObj)
    const isBidResult = useSelector((state) => state.bidsPage.isBidResult)
    const favourites = useSelector((state) => state.favourites)

    const openModal = () => dispatch(setModalFlag(true))

    const removeFromFavs = (id) => {
        dispatch(removeFromFavouritesAC(id))
    }
    const addToFavs = (id) => {
        dispatch(addToFavouritesAC(id))
    }

    useEffect(() => {
        API.getObjects(`/${param.objId}`).then((object) => {
            dispatch(setSingleObject(object))
        })
        return () => {
            dispatch(setSingleObject(null))
        }
    }, [])

    if (!singleObj.object) return <Preloader />

    const {id, title, square, price_total, image, complex_name, scu, building, floor, flat_number, rooms, price_sq_m} =
        singleObj.object

    return (
        <>
            <div className='container p-0'>
                <div className='heading-1'>
                    {title}, {square} м2 за {splitByThree(price_total)} ₽
                </div>

                <div className='object'>
                    <div className='object__photo'>
                        <div className='object__photo-wrapper'>
                            <img src={image} alt='' />
                        </div>
                    </div>

                    <div className='object__desc'>
                        <div className='object__desc-sector'>ЖК {complex_name}</div>

                        <div className='object__desc-name'>
                            <div className='object__desc-title'>
                                {title}, {square} м2
                            </div>
                            <div className='object__desc-art'>{scu}</div>

                            {favourites.favsId.includes(id) ? (
                                <button
                                    onClick={() => removeFromFavs(id)}
                                    className='button-favourite button-favourite--active'
                                >
                                    <i className='fas fa-heart'></i> <span>В избранном</span>
                                </button>
                            ) : (
                                <button onClick={() => addToFavs(id)} className='button-favourite'>
                                    <i className='fas fa-heart'></i> <span>В избранное</span>
                                </button>
                            )}
                        </div>

                        <div className='object__desc-details'>
                            <div className='params'>
                                <div className='params__item'>
                                    <div className='params__definition'>Корпус</div>
                                    <div className='params__value'>{building}</div>
                                </div>
                                <div className='params__item'>
                                    <div className='params__definition'>Этаж</div>
                                    <div className='params__value'>{floor}</div>
                                </div>
                                <div className='params__item'>
                                    <div className='params__definition'>Номер</div>
                                    <div className='params__value'>{flat_number}</div>
                                </div>
                                <div className='params__item'>
                                    <div className='params__definition'>Комнат</div>
                                    <div className='params__value'>{rooms}</div>
                                </div>
                            </div>
                        </div>

                        <div className='details'>
                            <div className='details__row'>
                                <div className='details__name'>Стоимость</div>
                                <div className='details__value details__value--price'>
                                    {splitByThree(price_total)} ₽
                                </div>
                            </div>
                            <div className='details__row'>
                                <div className='details__name'>Цена за м2</div>
                                <div className='details__value'>{splitByThree(price_sq_m)} ₽/м2</div>
                            </div>
                            <div className='details__row'>
                                <div className='details__name'>Площадь</div>
                                <div className='details__value'>{square} м2</div>
                            </div>
                        </div>

                        <button onClick={openModal} className='button-order'>
                            Забронировать
                        </button>
                        {/* <button className="button-preview">Записаться на просмотр</button>  */}
                    </div>
                </div>
            </div>

            <div className='container'>
                <NavLink to='/' className='back-to-results'>
                    ← Вернуться к результатам поиска
                </NavLink>
            </div>

            {isBidResult ? <BidResult /> : <Modal isModal={singleObj.isModal} flat_number={flat_number} scu={scu} />}
        </>
    )
}
