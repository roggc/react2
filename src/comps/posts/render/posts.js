__devMode__&& console.log('src/comps/posts/render/posts')

import React from 'react'
import {connect} from 'react-redux'
import style from '../style/posts.css'

const comp= (props)=>
(
  props.posts.show&&
  <div className={style.card}>
    {props.posts.pending|| (()=>
      (
        props.posts.data.name
      ))()} <br/>
    posts <br/>
    {props.posts.pending|| (()=>
    (
      <ul>
      {props.posts.data.posts.map((post, key)=>
        (
          <li key={key}>{post}</li>
        ))}
      </ul>
    ))()}
  </div>
)

const mapStateToProps=(state)=>
(
  {
    posts: state.comps.posts
  }
)

export default connect(mapStateToProps)(comp)
