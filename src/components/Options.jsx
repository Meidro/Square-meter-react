import {useDispatch, useSelector} from 'react-redux'
import {changeIsList, objectsSort} from '../redux/objectsReducer'

export const Options = () => {
    const isList = useSelector((state) => state.list.isList)
    const dispatch = useDispatch()

    const onChangeIsList = (flag) => {
        dispatch(changeIsList(flag))
    }

    return (
        <div className='view-options-wrapper'>
            <div className='container'>
                <div className='view-options'>
                    <div
                        className='view-options__sort'
                        style={isList ? {visibility: 'hidden'} : {visibility: 'visible'}}
                    >
                        <label htmlFor='sort-cards-by' className='view-options__label'>
                            Сортировать
                        </label>
                        <select
                            onChange={(e) => {
                                dispatch(objectsSort(e.target.value))
                            }}
                            disabled={isList}
                            id='sort-cards-by'
                            name='sortby'
                            className='view-options__select'
                        >
                            <option value='price_total'>по цене ↑</option>
                            <option value='price_total'>по цене ↓</option>
                            <option value='square'>по площади ↑</option>
                            <option value='square'>по площади ↓</option>
                        </select>
                    </div>
                    <div className='view-options__type'>
                        <input
                            type='radio'
                            className='view-options__radio'
                            name='displayType'
                            id='displayCards'
                            value='cards'
                            checked={!isList}
                            onChange={() => onChangeIsList(false)}
                        />
                        <label htmlFor='displayCards' className='view-options__type-item'>
                            <i className='fas fa-th-large'></i>
                        </label>
                        <input
                            type='radio'
                            className='view-options__radio'
                            name='displayType'
                            id='displayList'
                            value='list'
                            checked={isList}
                            onChange={() => onChangeIsList(true)}
                        />
                        <label htmlFor='displayList' className='view-options__type-item'>
                            <i className='fas fa-bars'></i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
