import {useRef, useState} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {addBids} from '../redux/bidsReducer'
import {setModalFlag} from '../redux/singleObjReducer'

export const Modal = ({isModal, flat_number, scu}) => {
    const [disabled, setDisabled] = useState(false)
    const modal = useRef(null)
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()
    const onSubmit = (value) => {
        setDisabled(true)
        dispatch(addBids(value))
    }

    const closeModal = (e) => {
        if (!modal.current.contains(e.target)) {
            dispatch(setModalFlag(false))
        }
    }

    if (!isModal) return null

    return (
        <div onClick={closeModal} className='modal-wrapper'>
            <div className='modal' ref={modal}>
                <div className='modal__header'>
                    <div className='modal__title'>Заявка на бронирование</div>
                    <div className='modal__details'>
                        Квартира <span>{flat_number}</span> в Первом квартале Дом 5
                        <div className='modal__details-art'>{scu}</div>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='modal__form'>
                    <div className='modal__form-content'>
                        <div className='formgroup'>
                            <label className='modal__form-input-label' htmlFor='form-name'>
                                Имя
                            </label>
                            <input
                                {...register('name', {required: true})}
                                type='text'
                                id='form-name'
                                className='modal__form-input'
                                placeholder='Введите имя'
                            />
                            <div style={{color: 'red'}}>{errors?.name && 'Поле обязательно к заполнению!'}</div>
                        </div>

                        <div className='formgroup'>
                            <label className='modal__form-input-label' htmlFor='form-phone'>
                                Телефон
                            </label>
                            <input
                                {...register('phone', {required: true})}
                                type='text'
                                id='form-phone'
                                className='modal__form-input'
                                placeholder='+7 (XXX) XXX-XX-XX'
                            />
                            <div style={{color: 'red'}}>{errors?.phone && 'Поле обязательно к заполнению!'}</div>
                        </div>

                        <div className='formgroup formgroup--checkbox'>
                            <input {...register('policy', {required: true})} type='checkbox' id='policy' />
                            <label className='policy-text' htmlFor='policy'>
                                Я согласен на обработку моих персональных данных. С Политикой в отношении обработки
                                персональных данных ознакомлен и согласен.
                            </label>
                            <div style={{color: 'red'}}>
                                {errors?.policy && 'Согласитесь с политикой конфиденциальности!'}
                            </div>
                        </div>
                    </div>
                    <input disabled={disabled} className='modal__submit' type='submit' value='Отправить заявку' />
                </form>
                <button onClick={() => dispatch(setModalFlag(false))} className='modal__close'>
                    Закрыть
                </button>
            </div>
        </div>
    )
}
