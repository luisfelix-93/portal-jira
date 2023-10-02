import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5001',
});
// Chamada da API para criar sessão, e logar no sistema

export const createSession = async (email, password) => {
 return api.post("/sessions", { email, password })

}

export const getUsers = async () => {
    return api.get("/users")
}

export const createUsers = async (user, email, password) => {
    return api.post("/users", { user, email, password })
}


export const GetRepositories = async(userId, query) => {
    let url = `/users/${userId}/repositories`
    if (query !== '') {
        url += `?q=${query}`;
    }
    return api.get(url);
};

export const CreateTask = async(userId, taskCode, date,timeSpent,notes,tag,) => {

    let url = `/users/${userId}/tasks`

     let task = {
        taskCode,
        date,
        timeSpent,
        notes,
        tag,
        userId : userId
    }

    return await api.post(url, task)
}

export const GetTaskByDate = async(userId, date) => {
    let url=`/users/${userId}/tasks`;
    return  await api.get(`${url}?date=${date}`)
}

export const GetTaskByUser = async(userId) => {
    let url= `/users/${userId}/tasks`;
    return await api.get(url)
}