export const handlerProxy = (handler) => {
  return (e) => {
    const { target } = e.detail;
    handler({ target });
  };
};
