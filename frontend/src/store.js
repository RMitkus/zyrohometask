import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllDataReducer, getDataReducer } from './reducers/dataReducers'

const reducer = combineReducers({
  getData: getDataReducer,
  getAllData: getAllDataReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,

  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
