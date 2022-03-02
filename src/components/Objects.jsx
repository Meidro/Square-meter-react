export const Objects = ({objects, splitByThree}) => {
    console.log('render Objects')
    return (
        <div className='cards-wrapper'>
            <div className='container p-0'>
                <div className='row'>
                    {objects.map((object) => (
                        <article key={object.id} className='col-md-4'>
                            <a href='object.html' className='card'>
                                <div className='card__header'>
                                    <div className='card__title'>ЖК {object.complex_name}</div>
                                    <div className='card__like'>
                                        <i className='fas fa-heart'></i>
                                    </div>
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
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
