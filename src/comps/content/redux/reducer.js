__devMode__&& console.log('src/comps/content/redux/reducer')

import React from 'react'

export default (val=
  {
    show: true,
    pending: false,
    children: <div>hello ...</div>
  }, act)=>
{
  switch (act.type) {
    default:
      return val
  }
}
