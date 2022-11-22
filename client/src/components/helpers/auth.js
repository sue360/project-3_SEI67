


// save token (to localStorage)
export const setToken = (token) => {
  localStorage.setItem('ai-artist-token', token)
}

// get back the token from localStorage
export const getToken = () => {
  return localStorage.getItem('ai-artist-token')
}

// check if the token hasn't expired

export const isAithenticated = () => {

}
