export const Filter = ({params, register, handleSubmit, onSubmit, objectsCount, reset, getTextBtnCorrect}) => {
    console.log('render Filter')

    return (
        <form method='GET' onSubmit={handleSubmit(onSubmit)} className='container p-0'>
            <div className='heading-1'>Выбор квартир:</div>
            <div className='filter'>
                <div className='filter__col'>
                    <div className='filter__label'>Выбор проекта:</div>
                    <select {...register('complex')} className='filter__dropdown'>
                        <option value='all'>Все проекты</option>
                        {params.complexNames.map((name) => (
                            <option key={name} value={name}>
                                ЖК {name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='filter__col rooms'>
                    <div className='filter__label'>Комнат:</div>
                    <div className='rooms__wrapper'>
                        {params.roomValues.map((value) => (
                            <span key={value} className='rooms__btn'>
                                <input
                                    {...register('rooms')}
                                    type='checkbox'
                                    id={`rooms_${value}`}
                                    className='rooms__checkbox'
                                    value={value}
                                />
                                <label key={value} htmlFor={`rooms_${value}`} className='rooms__btn'>
                                    {value}
                                </label>
                            </span>
                        ))}
                    </div>
                </div>
                <div className='filter__col'>
                    <div className='filter__label'>Площадь:</div>
                    <div className='range__wrapper'>
                        <label className='range'>
                            <div htmlFor='' className='range__label'>
                                от
                            </div>
                            <input
                                {...register('sqmin')}
                                min='0'
                                type='number'
                                className='range__input'
                                defaultValue={params.squareMin}
                            />
                            <div className='range__value'>м2</div>
                        </label>
                        <label className='range'>
                            <div htmlFor='' className='range__label'>
                                до
                            </div>
                            <input
                                {...register('sqmax')}
                                min='0'
                                type='number'
                                className='range__input'
                                defaultValue={params.squareMax}
                            />
                            <div className='range__value'>м2</div>
                        </label>
                    </div>
                </div>
                <div className='filter__col'>
                    <div className='filter__label'>Стоимость:</div>
                    <div className='range__wrapper'>
                        <div className='range'>
                            <label htmlFor='' className='range__label'>
                                от
                            </label>
                            <input
                                {...register('pricemin')}
                                type='number'
                                min='0'
                                className='range__input range__input--price'
                                defaultValue={params.priceMin}
                            />
                            <div className='range__value'>₽</div>
                        </div>
                        <div className='range'>
                            <label htmlFor='' className='range__label'>
                                до
                            </label>
                            <input
                                {...register('pricemax')}
                                type='number'
                                min='0'
                                className='range__input range__input--price'
                                defaultValue={params.priceMax}
                            />
                            <div className='range__value'>₽</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='filter__buttons'>
                <button disabled={!objectsCount} className='filter__show'>
                    {getTextBtnCorrect(objectsCount)}
                </button>
                <button
                    className='filter__reset'
                    onClick={(e) => {
                        e.preventDefault()
                        reset()
                    }}
                >
                    Сбросить фильтр
                </button>
            </div>
        </form>
    )
}
