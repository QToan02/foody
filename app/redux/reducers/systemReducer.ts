import { SystemActionTypes } from "@redux/actions/systemActions";

export type SystemStateType = {
    isSplashShow: boolean
}

export const systemState: SystemStateType = {
    isSplashShow: true
}

export const systemReducer = (state: SystemStateType = systemState, action: any) => {
    switch (action.type) {
        case SystemActionTypes.HIDE_SPLASH:
            return {
                ...state,
                isSplashShow: false,
            }
        default:
            return state;
    }
};