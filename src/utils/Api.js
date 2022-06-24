class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }
  getInitialTasks() {
    return fetch(`${this._url}/tasks`, {
      method: 'GET',
      headers: this._headers,

    })
      .then(this._checkResponse)
  }
  // editUserInfo(data) {
  //   return fetch(`${this._url}/users/me`, {
  //     method: 'PATCH',
  //     headers: this._headers,
  //     credentials: 'include',
  //     body: JSON.stringify({
  //       name: data.name,
  //       about: data.about
  //     })
  //   })
  //     .then(this._checkResponse)
  // }
  // editUserAvatar(data) {
  //   return fetch(`${this._url}/users/me/avatar`, {
  //     method: 'PATCH',
  //     headers: this._headers,
  //     credentials: 'include',
  //     body: JSON.stringify({
  //       avatar: data.avatar
  //     })
  //   })
  //     .then(this._checkResponse)
  // }
  addNewTask(data) {
    return fetch(`${this._url}/tasks`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        text: data.value
      })
    })
      .then(this._checkResponse)
  }
  removeTask(taskID) {
    return fetch(`${this._url}/tasks/${taskID}`, {
      method: 'DELETE',
      headers: this._headers,

    })
      .then(this._checkResponse)
  }
}

const config = {
  url: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json',
  }
};
const api = new Api(config);
export default api;
