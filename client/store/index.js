import { NativeModules } from 'react-native'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunk))

export default store