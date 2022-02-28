const router  =require("express").Router();
const requestHeandler = require("../controllers/employeeController")


router.get("/", requestHeandler.getAll)

router.get("/:id", requestHeandler.getById)

router.post("/", requestHeandler.addEmployee)

router.put("/:id",requestHeandler.update)

router.delete("/:id",requestHeandler.deleteOne)

module.exports = router;