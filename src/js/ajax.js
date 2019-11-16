function ajax(url, settings) {
  let config = {
    async: true,
    method: 'GET',
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  };
  settings = settings || {};

  Object.assign(config, settings);

  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest(),
      headers = config.headers || {};

    request.open(config.method, url, config.async);

    for (let header in headers) {
      if (!headers.hasOwnProperty(header)) continue;
      request.setRequestHeader(header, headers[header]);
    }
    request.onload = () => {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error('Error:' + request.statusText));
      }
    };
    request.onerror = () => {
      reject(Error('There was a network error.'));
    };
    request.send();
  });
}
function getJSON(url) {
  return ajax(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  });
}

export { ajax, getJSON };