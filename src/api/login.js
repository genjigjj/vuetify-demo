import axios from 'axios'

// 登录
export function login(username, password) {
  return axios({
    url: 'http://127.0.0.1:8099/login',
    method: 'post',
    data: {
      username: username,
      password: password
    }
  })
}

// 登出
export function logout() {
  return axios.post('http://127.0.0.1:8099/logout')
}
