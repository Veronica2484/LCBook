//Funtions to post and get data
import axios from 'axios'

//register function
export const register = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/register`, user)

//login function to send a post request to the login end point
export const login = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/login`, user)

//update the storage
export const updateLocalStorage = (user, next) => {
  if (window.localStorage.getItem('auth')) {
    let auth = JSON.parse(localStorage.getItem('auth'))
    auth.user = user
    localStorage.setItem('auth', JSON.stringify(auth))
    next()
  }
}
