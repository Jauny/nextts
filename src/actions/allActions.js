export const actionTypes = {
  SET_NAVIGATION: 'SET_NAVIGATION'
}

export const setNavigation = (navItemIndex) => dispatch => {
  console.log('action');
  return dispatch({
    type: actionTypes.SET_NAVIGATION,
    navItemIndex
  })
}
