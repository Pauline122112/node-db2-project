const router = require("express").Router();
const Cars = require("./cars-model");

router.get("/", async (req, res, next) => {
	try {
		const allCars = await Cars.getAll();
		res.json(allCars);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
