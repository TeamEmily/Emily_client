const RESTManager = {
  sendMessage: (msg) => {
    const address = `http://125.132.213.135:8080/search/?str=${msg}`;
    return HTTPUtil.get(address);
  }
};

export const HTTPUtil = {
  get: (address) => {
    return fetch(address).then(response => {
      if (response.error) {
        throw Error(response.json().error);
      }
      return response.json();
    });
  }
};

export default RESTManager;
