import { LOGIN } from './constants'

const initialState = {
    username: ''
}

export const login = (state = initialState, action = {}) => {
    switch(action.type) {
        case LOGIN:
            return Object.assign({}, state, { username: action.username })
        default:
            return state
    }
}