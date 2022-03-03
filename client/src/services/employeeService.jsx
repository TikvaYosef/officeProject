
const baseUrl = "http://localhost:5050/employees"

export const getAllEmployees = () => {
    return fetch(baseUrl)
        .then((res)=>res.json())
        .catch((err)=>console.log(err))
}
