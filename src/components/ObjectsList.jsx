import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {addToFavouritesAC, removeFromFavouritesAC} from '../redux/favouritesReducer'
import {objectsSort} from '../redux/objectsReducer'

export const ObjectsList = ({isList, splitByThree, objects}) => {
    const favourites = useSelector((state) => state.favourites)
    const dispatch = useDispatch()

    const removeFromFavs = (id, e) => {
        e.preventDefault()
        dispatch(removeFromFavouritesAC(id))
    }
    const addToFavs = (id, e) => {
        e.preventDefault()
        dispatch(addToFavouritesAC(id))
    }

    if (!isList) return null

    return (
        <div className='panels-wrapper'>
            <div className='container p-0'>
                <div className='panels-filter'>
                    <div className='panels-filter__element' style={{width: '120px'}}>
                        <div className='panels-filter__name no-filter'>Артикул</div>
                    </div>
                    <div className='panels-filter__element' style={{width: '160px'}}>
                        <div onClick={() => dispatch(objectsSort('complex_name'))} className='panels-filter__name'>
                            ЖК
                        </div>
                    </div>
                    <div className='panels-filter__element' style={{width: '70px'}}>
                        <div className='panels-filter__name no-filter'>Корпус</div>
                    </div>
                    <div className='panels-filter__element' style={{width: '70px'}}>
                        <div className='panels-filter__name no-filter'>Этаж</div>
                    </div>
                    <div className='panels-filter__element' style={{width: '70px'}}>
                        <div onClick={() => dispatch(objectsSort('rooms'))} className='panels-filter__name'>
                            Комнат
                        </div>
                    </div>
                    <div className='panels-filter__element' style={{width: '80px'}}>
                        <div onClick={() => dispatch(objectsSort('square'))} className='panels-filter__name'>
                            Площадь
                        </div>
                    </div>
                    <div className='panels-filter__element' style={{width: '100px'}}>
                        <div onClick={() => dispatch(objectsSort('price_sq_m'))} className='panels-filter__name'>
                            м2
                        </div>
                    </div>
                    <div className='panels-filter__element' style={{width: '100px'}}>
                        <div onClick={() => dispatch(objectsSort('price_total'))} className='panels-filter__name'>
                            Стоимость
                        </div>
                    </div>

                    <div className='panels-filter__element' style={{width: '100px'}}>
                        <div className='panels-filter__name no-filter'>Избранное</div>
                    </div>
                </div>

                {objects.map((object) => (
                    <NavLink key={object.id} to={`object/${object.id}`} className='panel'>
                        <div className='panel__artikul'>{object.scu}</div>
                        <div className='panel__name'>
                            <div>ЖК {object.complex_name}</div>
                        </div>
                        <div className='panel__block'>{object.building}</div>
                        <div className='panel__floor'>{object.floor}</div>
                        <div className='panel__rooms'>{object.rooms}</div>
                        <div className='panel__sq'>{object.square} м2</div>
                        <div className='panel__price-per-m'>{splitByThree(object.price_sq_m)} ₽</div>
                        <div className='panel__price'>{splitByThree(object.price_total)} ₽</div>
                        <div className='panel__favourite'>
                            {favourites.favsId.includes(object.id) ? (
                                <div
                                    onClick={(e) => removeFromFavs(object.id, e)}
                                    className='panel__favourite-btn panel__favourite-btn--active'
                                >
                                    <i className='fas fa-heart'></i>
                                </div>
                            ) : (
                                <div onClick={(e) => addToFavs(object.id, e)} className='panel__favourite-btn'>
                                    <i className='fas fa-heart'></i>
                                </div>
                            )}
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
