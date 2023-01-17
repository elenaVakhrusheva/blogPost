const onResponce = (res) => {
  // return res.ok ? res.json() : Promise.reject('Ошибка: ${res.status}');
  return res.ok ? res.json() : res.json().then(err => Promise.reject(res));
}

class Api {
  constructor({baseUrl, headers}) {
    this._headers = headers;
    this._baseUrl = baseUrl;     
  }

  getPostList() {
    return fetch( `${this._baseUrl}/v2/group-7/posts`, {
      headers: this._headers
    }).then(onResponce)    
  }

  getUserInfo() {
    return fetch( `${this._baseUrl}/v2/group-7/users/me`, {
      headers: this._headers
    }).then(onResponce)    
  }

  changeLikePost(_id, isLike) {
    return fetch(`${this._baseUrl}/products/likes/${_id}`, {
    method: isLike ? "DELETE" : "PUT",
    headers: this._headers
    }).then(onResponce)
 }

  deletePost(_id, isDelete) {
    return fetch(`${this._baseUrl}/v2/group-7/posts/${_id}`, {
    method: isDelete ? "DELETE" : "PUT",
    headers: this._headers
    }).then(onResponce)
 }


}

const config = {
  baseUrl: 'https://api.react-learning.ru',
  headers: {
    'content-type': 'application/json',
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhNTEwNjU5Yjk4YjAzOGY3NzljZjAiLCJncm91cCI6Imdyb3VwLTciLCJpYXQiOjE2Njc5MTE5NDUsImV4cCI6MTY5OTQ0Nzk0NX0.JXsh-xedf4ObzqTiy8NSi3tkbxVhHv6x3zijJNxc5Wk'
  }
}

const api = new Api(config);
export default api
