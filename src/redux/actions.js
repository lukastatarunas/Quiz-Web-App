import { LOGIN } from './constants'

export const setLogin = username => ({
    type: LOGIN,
    username: username
})