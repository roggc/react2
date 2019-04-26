__devMode__&& console.log('src/redux/store')

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import fetch from './middleware/fetch'

export default ()=>
{
  const middlewares = [thunk, fetch]
  return applyMiddleware(...middlewares)(createStore)(reducer)
}
