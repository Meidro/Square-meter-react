import {Route, Routes} from 'react-router-dom'
import './App.css'
import {Footer} from './components/Footer'
import {Header} from './components/Header'
import {Logo} from './components/Logo'
import {Bids} from './pages/Bids'
import {Favourites} from './pages/Favourites'
import {Main} from './pages/Main'
import {NotFound} from './pages/NotFound'
import {SingleObject} from './pages/SingleObject'

const App = () => {
    return (
        <div className='sticky-footer'>
            <div className='content-wrapper'>
                <Header />
                <Logo />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/object/:objId' element={<SingleObject />} />
                    <Route path='/bids' element={<Bids />} />
                    <Route path='/favourites' element={<Favourites />} />
                    <Route path='/favourites/object/:objId' element={<SingleObject />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App
