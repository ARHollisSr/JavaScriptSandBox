function performAction(ninja, action) {
  action = typeof action === 'undefined' ? 'skulking' : action;
  return ninja + ' ' + action;
}