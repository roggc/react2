__devMode__&& console.log('src/comps/app/redux/reducer')

export default (val=
  {
    show: true,
    pending: false
  }, act)=>
{
  switch (act.type) {
    default:
      return val
  }
}
