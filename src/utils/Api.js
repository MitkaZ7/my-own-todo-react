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

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: "GET",
            headers: this._headers,
        })
            .then(this._checkResponse)
    }

    postCards(item) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: item.name,
                link: item.link,
            })
        })
            .then(this._checkResponse)
    }

    handlerDeleteCards(item) {
        return fetch(`${this._url}/cards/${item}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._checkResponse)
    }

    changeLikeCardStatus(item, like) {
        return fetch(`${this._url}/cards/${item}/likes`, {
            method: like ? 'DELETE' : 'PUT',
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
    url: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`
    }
};

const api = new Api(config);

export default api;