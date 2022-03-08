import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {bidsReducer} from './bidsReducer'
import {favouritesReducer} from './favouritesReducer'
import {filterReducer} from './filterReducer'
import {objectsReducer} from './objectsReducer'
import {singleObjReducer} from './singleObjReducer'

const rootReducer = combineReducers({
    filter: filterReducer,
    list: objectsReducer,
    singleObj: singleObjReducer,
    bidsPage: bidsReducer,
    favourites: favouritesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store
