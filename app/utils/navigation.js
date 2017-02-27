export let isActiveView = (desiredView, currentProps, nextProps) => {
  let nextView = nextProps.navigationState.routes[nextProps.navigationState.index].key
  if (nextView === desiredView && nextProps.navigationState !== currentProps.navigationState) {
    return true;
  }
  return false;
}
