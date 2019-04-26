__devMode__&& console.log('src/redux/reducer')

import {combineReducers} from 'redux'
import posts from '../comps/posts/redux/reducer'
import app from '../comps/app/redux/reducer'
import header from '../comps/header/redux/reducer'
import content from '../comps/content/redux/reducer'

export default combineReducers({
    comps: combineReducers({
      posts: posts,
      app: app,
      header: header,
      content: content
    })
})
