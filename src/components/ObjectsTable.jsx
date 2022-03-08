import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {addToFavouritesAC, removeFromFavouritesAC} from '../redux/favouritesReducer'

export const ObjectsTable = ({objects, splitByThree, isList}) => {
    const dispatch = useDispatch()
    const favourites = useSelector((state) => state.favourites)

    const addToFavs = (id, e) => {
        e.preventDefault()
        dispatch(addToFavouritesAC(id))
    }

    const removeFromFavs = (id, e) => {
        e.preventDefault()
        dispatch(removeFromFavouritesAC(id))
    }

    if (isList) return null
    return (
        <div className='cards-wrapper'>
            <div className='container p-0'>
                <div className='row'>
                    {objects.map((object) => (
                        <article key={object.id} className='col-md-4'>
                            <NavLink to={`object/${object.id}`} className='card'>
                                <div className='card__header'>
                                    <div className='card__title'>ЖК {object.complex_name}</div>
                                    {favourites.favsId.includes(object.id) ? (
                                        <div
                                            onClick={(e) => removeFromFavs(object.id, e)}
                                            className='card__like card__like--active'
                                        >
                                            <i className='fas fa-heart'></i>
                                        </div>
                                    ) : (
                                        <div onClick={(e) => addToFavs(object.id, e)} className='card__like'>
                                            <i className='fas fa-heart'></i>
                                        </div>
                                    )}
                                </div>
                                <div className='card__img'>
                                    <img src={object.image} alt='План квартиры' />
                                </div>
                                <div className='card__desc'>
                                    <div className='card__price'>
                                        <div className='card__price-total'>{splitByThree(object.price_total)} ₽</div>
                                        <div className='card__price-per-meter'>
                                            {splitByThree(object.price_sq_m)} ₽/м2
                                        </div>
                                    </div>

                                    <div className='card__params params'>
                                        <div className='params__item'>
                                            <div className='params__definition'>Комнат</div>
                                            <div className='params__value'>{object.rooms}</div>
                                        </div>
                                        <div className='params__item'>
                                            <div className='params__definition'>Площадь</div>
                                            <div className='params__value'>{object.square}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card__footer'>
                                    <div className='card__art'>{object.scu}</div>
                                    <div className='card__floor'>
                                        Этаж {object.floor} из {object.floors_total}
                                    </div>
                                </div>
                            </NavLink>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
