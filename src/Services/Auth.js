import axios from './axios';
// import Cookies from 'js-cookie';
import Cookies from 'js-cookie';

export function registerRequest(user) {

    const response = axios.post('/sessions/registrar', user)

        .then(res => {
            console.log('Registro ok');
            return res.data;
        })

        .catch(error => { console.log(error); })

    return response;


}
export function loginRequest(user) {

    const response = axios.post('/sessions/login', user)

        .then(res => {
            // genera la token
            const token = res.data.token;

            document.cookie = `coderCookieToken=${token}; path=/; secure; SameSite=Lax`;

            return res.data;
        })

        .catch(error => { console.log(error); })

    return response;


}

export function cookieUserRequest() {
    const token = Cookies.get('coderCookieToken');

    const response = axios.get('/sessions/current', {
        headers: {
            Authorization: `coderCookieToken=${token}`
        }

    }).then(res => {
        console.log('Inicio ok',res.data.payload.user);
        return res.data.payload.user;
    })
        .catch(error => { console.log(error); })

    return response
}
