import React from 'react'
import MainScreen from './src/screens/MainScreen';
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import  createSagaMiddleware from 'redux-saga'
import rootReducer from './src/reducers/rootReducer'
import rootSaga from './src/sagas/rootSaga'
const sagaMiddleWare = createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(rootSaga)
export default function App(){
    return(
        <Provider store={store}>
            <MainScreen />
        </Provider>
    )
}