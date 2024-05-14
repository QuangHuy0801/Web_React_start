import axios from "axios";
const BASE_URL = "http://localhost:8080";
const SignIn = "/login";
export const signIn = (username, password) => {
    return axios.get(`${BASE_URL}${SignIn}`, {
        params: { id: username, password: password }
    });
};
const ForgotPassword = "/forgot";
export const forgotPassword = (username) => {
    const params = new URLSearchParams();
    params.append('id', username);

    return axios.post(`${BASE_URL}${ForgotPassword}`, params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
};

const ResetPassword = "/forgot";
export const resetPassword = (username) => {
    const params = new URLSearchParams();
    params.append('id', username);

    return axios.post(`${BASE_URL}${ResetPassword}`, params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
};

const SignUp = "/signup";
export const signUp = (username, fullname, email, password) => {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('fullname', fullname);
    params.append('email', email);
    params.append('password', password);

    return axios.post(`${BASE_URL}${SignUp}`, params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
};
