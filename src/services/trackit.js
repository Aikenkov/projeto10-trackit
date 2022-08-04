import axios from "axios"

const baseURL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S',]


function createHeaders() {
    const auth = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${auth}`
        }
    };
    return config;
}

function getHabits() {
    const config = createHeaders();
    const promise = axios.get(`${baseURL}/habits`, config);
    return promise
}

function makeRegister(body) {
    const promise = axios.post(`${baseURL}/auth/sign-up`, body)
    return promise
}

function makeLogin(body) {
    const promise = axios.post(`${baseURL}/auth/login`, body)
    return promise
}

function createHabit(body) {
    const config = createHeaders();
    const promise = axios.post(`${baseURL}/habits`, body, config)
    return promise
}

export { makeLogin, makeRegister, getHabits, createHabit, days };