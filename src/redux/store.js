import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/auth.reducer'

// const initialState = { userName: 'Sumit', userId: 'abc' }
// const reducer = initialState => initialState

// const store = createStore(
//    reducer,
//    initialState,
//    composeWithDevTools(applyMiddleware(thunk))
// )

const rootReducer = combineReducers({
   auth: authReducer,
})

const store = createStore(
   rootReducer,
   {},
   composeWithDevTools(applyMiddleware(thunk))
)

export default store
