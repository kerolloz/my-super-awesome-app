export const handlerProxy = (handler) => (e) => {
  const { target } = e.detail;
  handler({ target });
};
