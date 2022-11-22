
import { Buffer } from 'buffer'

// save token (to localStorage)
export const setToken = (token) => {
  localStorage.setItem('ai-artist-token', token)
}

// get back the token from localStorage
export const getToken = () => {
  return localStorage.getItem('ai-artist-token')
}


export const getPayload = () => {
  const token = getToken()
  if (!token) return false
  const splitToken = token.split('.')
  if (splitToken.length !== 3) return false
  // buffer - second part of the token
  return JSON.parse(Buffer.from(splitToken[1], 'base64'))
}


// check if the token hasn't expired

export const isAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  const { exp } = payload
  const now = Date.now() / 1000
  return exp > now
} 