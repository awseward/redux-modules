const createAction = (transform, defaultMiddleware = []) => {
  const { formattedConstant, middleware = [] } = transform;
  const actionMiddleware = middleware.concat(defaultMiddleware);
  return (payload, meta) => ({
    type: formattedConstant,
    ...actionMiddleware.reduce((acc, func) => func(transform, acc), { payload, meta }),
  });
};

export default createAction;
