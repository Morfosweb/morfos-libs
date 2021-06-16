export default store => next => action => {
  const { type, loggerName } = action;
  const condActionName = loggerName ?? type;
  const Names = `---${condActionName} =>`;

  const result = next(action);

  const consoleValue = { ACTION: action, STATE: store.getState() };
  console.info(Names, consoleValue);

  return result;
};
