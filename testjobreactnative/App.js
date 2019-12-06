import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import MainScreen from './src/screens/MainScreen';
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import  createSagaMiddleware from 'redux-saga'
import rootReducer from './src/reducers/rootReducer'
import rootSaga from './src/sagas/rootSaga'

import StargazerScreen from './src/screens/StargazerScreen'

const stackView = createStackNavigator({
    Main : MainScreen,
    Stargazer : StargazerScreen
},{
    initialRouteName: 'Main'
})
const Navigation = createAppContainer(stackView)
const sagaMiddleWare = createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(rootSaga)
export default function App(){
    return(
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}