const employees = require("../modles/EmployeeModel")

const getAll = async (req, res) => {
    await employees.find()
        .then((result) => res.send(result))
        .catch((err) => res.status(404).send({ massege: err }));
}

const GETBYID = async (req, res) => {
    await employees.find()
        .then((id) =>{if (res.id == id) res.send(res)})
        .catch((err)=>res.status(404).send({ massege: err }))
}

const POST = async(req, res) => {
  


}
const PUT = (req, res) => {

}
const DELETE = (req, res) => {

}

module.exports = { getAll, GETBYID, POST, PUT, DELETE }