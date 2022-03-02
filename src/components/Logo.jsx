import {NavLink} from 'react-router-dom'

export const Logo = () => {
    return (
        <div className='logo-wrapper'>
            <NavLink to='/' className='logo'>
                <div className='logo__title'>КВАДРАТНЫЙ МЕТР</div>
                <div className='logo__subtitle'>купить квартиру в один клик</div>
            </NavLink>
        </div>
    )
}
