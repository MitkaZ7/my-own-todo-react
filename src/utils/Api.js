class Api {
    constructor({url, headers}) {
        this._url = url;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialTasks() {
        return fetch(`${this._url}/tasks`, {
            method: "GET",
            headers: this._headers,
        })
            .then(this._checkResponse)
    }

    postTask(item) {
        return fetch(`${this._url}/tasks`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                text: item.text,
                isCompleted: item.isCompleted,
            })
        })
            .then(this._checkResponse)
    }

    handlerDeleteTask(item) {
        return fetch(`${this._url}/tasks/${item}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._checkResponse)
    }

    getUserInfoFromServer() {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers,
        })
            .then(this._checkResponse)
    }

    updateUserData(item) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: item.name,
                about: item.about
            })
        })
            .then(this._checkResponse)
    }

}

const config = {
    url: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
};

const api = new Api(config);

export default api;
