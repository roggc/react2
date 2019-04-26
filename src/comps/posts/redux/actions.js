__devMode__&& console.log('src/comps/posts/redux/actions')

import * as types from './types'

const postsSet= (data)=>
(
  {
    type: types.POSTS_SET,
    val: data
  }
)

export const postsReset= ()=>
(
  {
    type: types.POSTS_RESET
  }
)

export const postsFetch= ()=>(dispatch)=>
{
  const data=
  {
    name: 'john',
    posts:
    [
      'hey, how are you',
      'this is another post'
    ]
  }
  setTimeout(()=>dispatch(postsSet(data)), 3000)
}
