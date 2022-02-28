const router  =require("express").Router();
const requestHeandler = require("../controllers/employeeController")


router.get("/", requestHeandler.getAll)

router.get("/:id", requestHeandler.GETBYID)

router.post("/", requestHeandler.POST)

router.put("/:id",requestHeandler.PUT)

router.delete("/:id",requestHeandler.DELETE)

module.exports = router;