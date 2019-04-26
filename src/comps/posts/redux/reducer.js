__devMode__&& console.log('src/comps/posts/redux/reducer')

import * as types from './types'
import {postsFetch, postsReset} from './actions'

export default (val=
  {
    show: true,
    pending: true,
    data: {},
    fetch: postsFetch,
    reset: postsReset
  }, act) =>
{
  switch(act.type)
  {
    case types.POSTS_SET:
      val=
      {
        ...val,
        pending: false,
        data: act.val
      }
      return val
    case types.POSTS_RESET:
      val=
      {
        ...val,
        pending: true,
        data: {}
      }
      return val
    default:
      return val
  }
}
