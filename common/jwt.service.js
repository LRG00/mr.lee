const ID_TOKEN_KEY = 'id_token'
export const getToken = () => {
  return document.localStorage.getItem(ID_TOKEN_KEY)
}

export const saveToken = (token) => {
  document.localStorage.setItem(ID_TOKEN_KEY, token)
}

export const destroyToken = () => {
  document.localStorage.removeItem(ID_TOKEN_KEY)
}

export default { getToken, saveToken, destroyToken }
