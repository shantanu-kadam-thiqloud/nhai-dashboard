const loggerMiddleware = (store) => (next) => (action) => {
  // Log the current state before the action is dispatched
  console.log(
    "%cCurrent state:",
    "color: #9E9E9E; font-weight: bold",
    store.getState()
  );

  // Dispatch the action
  const result = next(action);

  // Log the updated state after the action is dispatched
  console.log(
    "%cUpdated state:",
    "color: #4CAF50; font-weight: bold",
    store.getState()
  );

  // Return the result of dispatching the action
  return result;
};

export default loggerMiddleware;
