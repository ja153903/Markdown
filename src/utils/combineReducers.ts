const combineReducers = (reducers: any) => {
  return (state: any, action: any) => {
    return Object.keys(reducers).reduce(
      (acc, prop) => ({
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      }),
      state
    );
  };
};

export default combineReducers;
