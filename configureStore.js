// configureStore.js

import { createStore } from 'redux'
import rootReducer from './shared/reducers'

export default function configureStore() {
  let store = createStore(rootReducer)
  return store
}
