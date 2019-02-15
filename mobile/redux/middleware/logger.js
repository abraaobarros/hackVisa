export default store => next => action => {
  console.group(action.type)
  console.log(action);
  console.info('dispatching', action.type);
  let result = next(action);
  console.log('next state', store.getState())
  console.groupEnd();
  return result;
}
