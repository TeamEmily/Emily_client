const RESTManager = {
  sendMessage: (msg) => {
    const address = `http://192.168.0.7:8080/search/?str=${msg}`;
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
