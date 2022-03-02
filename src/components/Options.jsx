export const Options = () => {
    return (
        <div className='view-options-wrapper'>
            <div className='container'>
                <div className='view-options'>
                    <div className='view-options__sort'>
                        <label htmlFor='sort-cards-by' className='view-options__label'>
                            Сортировать
                        </label>
                        <select id='sort-cards-by' name='sortby' className='view-options__select'>
                            <option value='priceASC'>по цене ↑</option>
                            <option value='priceDESC'>по цене ↓</option>
                            <option value='squareASC'>по площади ↑</option>
                            <option value='squareDESC'>по площади ↓</option>
                        </select>
                    </div>
                    <div className='view-options__type'>
                        <input
                            type='radio'
                            className='view-options__radio'
                            name='displayType'
                            id='displayCards'
                            value='cards'
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
