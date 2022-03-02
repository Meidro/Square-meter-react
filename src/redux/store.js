import {combineReducers, createStore} from 'redux'
import {filterReducer} from './filterReducer'
import {objectsReducer} from './objectsReducer'

const rootReducer = combineReducers({
    filter: filterReducer,
    list: objectsReducer,
})

export const store = createStore(rootReducer)

window.store = store
