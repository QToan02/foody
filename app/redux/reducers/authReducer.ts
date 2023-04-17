import { AuthActionTypes } from '@redux/actions/authActions';

export type AuthStateType = {
    isLoading: boolean;
    isAuthenticated: boolean;
}

export const authState: AuthStateType = {
    isLoading: true,
    isAuthenticated: false,
}

export const authReducer = (state: AuthStateType = authState, action: any) => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_REQUEST: 
            return {
                ...state,
                isLoading: true,
            }
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
            };
        case AuthActionTypes.LOGIN_FAILURE:
            return {...state, isLoading: false};
        case AuthActionTypes.LOGOUT_REQUEST:
            return {
                ...state, 
                isLoading: false,
                isAuthenticated: false
            };
        default:
            return state;
    }
};