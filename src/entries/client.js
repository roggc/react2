__devMode__&& console.log('src/entryPoints/client')

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import getStore from '../redux/store'
import App from '../comps/app/render/app'
import {start} from '../redux/extra/start/actions'

const store= getStore()

render
(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
 
store.dispatch(start())
