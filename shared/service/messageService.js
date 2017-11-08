const RESTManager = {
  get: (msg) => {
    const address = `125.132.213.135:8080/search/?${msg}`;
    return HTTPUtil.get(address);
  }
};
export default RESTManager;
