const { carService } = require("../services");

const getcar = async (req, res) => {
  //   const body = req.body;
  const car = await carService.getcar();

  res.status(200).json({
    success: true,
    message: "data get successfully",
    data: car,
  });
  console.log(car);
};



module.exports = { getcar };