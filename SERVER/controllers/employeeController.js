const employees = require("../modles/EmployeeModel")

const getAll = async (req, res) => {
    await employees.find()
        .then((result) => res.send(result))
        .catch((err) => res.status(404).send({ massege: err }));
}

const getById = async (req, res) => {
    await employees.findById(req.params.id)
        .then((id) => { if (res.id == id) res.send(res) })
        .catch((err) => res.status(404).send({ massege: err }))
}

const addEmployee = async (req, res) => {
    await employees.create(req.body)
        .then((result) => res.send(result))
        .catch(err => res.status(404).send({ err }));
}

const update = async (req, res) => {
    const employee = employees.find(employee => employee.id === parseInt(req.params.id));
    if (!employee) {
        res.status(404).send('The employee with the given ID was not found.');
    }
    const { firstName, lastName, age } = req.body;
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.age = age;
    res.send(employee);
}

const deleteOne = async (req, res) => {
    const employee = employees.find(employee => employee.id === parseInt(req.params.id));
    if (!employee) {

        res.status(404).send('The employee with the given ID was not found.');
    }
    const index = employees.indexOf(employee);
    employees.splice(index, 1);
    res.send(employee);
}

module.exports = { getAll, getById, addEmployee, update, deleteOne }