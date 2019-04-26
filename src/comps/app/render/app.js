__devMode__&& console.log('src/comps/app/render/app')

import React from 'react'
import {connect} from 'react-redux'
import Posts from '../../posts/render/posts'
import Header from '../../header/render/header'
import Content from '../../content/render/content'

const comp= (props)=>
(
  props.app.show&&
  <div>
    <Header/>
    <Content/>
    <Posts/>
  </div>
)

const mapStateToProps= (state)=>
(
  {
    app: state.comps.app
  }
)

export default connect(mapStateToProps)(comp)
