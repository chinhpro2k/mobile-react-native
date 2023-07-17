import AsyncStorage from '@react-native-async-storage/async-storage'
import { Middleware, applyMiddleware, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
// import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import createSagaMiddleware from 'redux-saga'

// redux
import reducers from '@/Redux/Reducers'
import rootSaga from '@/Redux/Sagas'

let sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

function configureStore(_reactotron: any, sagaMiddleware: Middleware) {
  return createStore(persistedReducer, applyMiddleware(sagaMiddleware))
}

const store = configureStore(undefined, sagaMiddleware)

const persistor = persistStore(store)
setupListeners(store.dispatch)
sagaMiddleware.run(rootSaga)

export { store, persistor }
