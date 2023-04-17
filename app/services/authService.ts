import axios from "axios";
import { BASE_URL } from '@constants'

export const login = async (user: any) => {
    return await axios.post(`${BASE_URL}/auth/signin`, {
        'email': user.email,
        'password': user.password
    }).then(res => res.data);
}

export const signUp = async (user: any) => {
    return await axios.post(`${BASE_URL}/auth/signup`, {
        'username': user.username,
        'email': user.email,
        'password': user.password
    }).then(res => res.data);
}