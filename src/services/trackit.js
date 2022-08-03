import axios from "axios"

const baseURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/';


function createHeaders() {
    const auth = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    };
    return config;
}

function makeRegister(body) {
    const promise = axios.post(`${baseURL}auth/sign-up`, body)
    return promise
}

function makeLogin(body) {
    const promise = axios.post(`${baseURL}auth/login`, body)
    return promise
}

function getHabits(body) {
    const config = createHeaders();
    const promise = axios.post(`${baseURL}/habits`, body, config);
    return promise
}

export { makeLogin, makeRegister, getHabits };