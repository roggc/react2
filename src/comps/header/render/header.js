__devMode__&& console.log('src/comps/header/render/header')

import React from 'react'
import {connect} from 'react-redux'
import style from '../style/header.css'

const comp= (props)=>
(
  props.header.show&&
  <div className={`${style.placeholder} ${style.content}`}>
    Wellcome
  </div>
)

const mapStateToProps= (state)=>
(
  {
    header: state.comps.header
  }
)

export default connect(mapStateToProps)(comp)
