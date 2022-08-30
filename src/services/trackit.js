import axios from "axios";
const baseURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";
const days = ["D", "S", "T", "Q", "Q", "S", "S"];

function createHeaders() {
    const auth = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${auth}`,
        },
    };
    return config;
}

function getHabits() {
    const config = createHeaders();
    const promise = axios.get(`${baseURL}/habits`, config);
    return promise;
}

function makeRegister(body) {
    const promise = axios.post(`${baseURL}/auth/sign-up`, body);
    return promise;
}

function makeLogin(body) {
    const promise = axios.post(`${baseURL}/auth/login`, body);
    return promise;
}

function createHabit(body) {
    const config = createHeaders();
    const promise = axios.post(`${baseURL}/habits`, body, config);
    return promise;
}

function DeleteHabit(habitId) {
    const config = createHeaders();
    const promise = axios.delete(`${baseURL}/habits/${habitId}`, config);
    return promise;
}

function todayHabits() {
    const config = createHeaders();
    const promise = axios.get(`${baseURL}/habits/today`, config);
    return promise;
}

function markAsDone(Id) {
    const config = createHeaders();
    const promise = axios.post(`${baseURL}/habits/${Id}/check`, {}, config);
    return promise;
}
function markAsUndone(Id) {
    const config = createHeaders();
    const promise = axios.post(`${baseURL}/habits/${Id}/uncheck`, {}, config);
    return promise;
}

export {
    makeLogin,
    makeRegister,
    getHabits,
    createHabit,
    DeleteHabit,
    todayHabits,
    markAsDone,
    markAsUndone,
    days,
};
