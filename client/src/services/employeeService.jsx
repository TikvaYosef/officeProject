
const BASE_URL = process.env.NODE_ENV === "production" ? -
    "https://officemernapp.herokuapp.com/employees":
    "http://localhost:5050/employees";

export const getAllEmployees = () => {
    return fetch(BASE_URL)
        .then((res) => res.json())
        .catch((err) => console.log(err))
}
