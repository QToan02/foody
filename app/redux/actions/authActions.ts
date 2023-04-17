export enum AuthActionTypes {
    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILURE = 'LOGIN_FAILURE',
    LOGOUT_REQUEST = 'LOGOUT_REQUEST',
}

export const loginRequest = () => ({
    type: AuthActionTypes.LOGIN_REQUEST
})

export const loginSuccess = () => ({
    type: AuthActionTypes.LOGIN_SUCCESS
})

export const loginFailure = () => ({
    type: AuthActionTypes.LOGIN_FAILURE
})

export const logoutRequest = () => ({
    type: AuthActionTypes.LOGOUT_REQUEST
})