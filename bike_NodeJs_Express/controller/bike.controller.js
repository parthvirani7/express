const { bikeService } = require("../services");

const getbike = async (req, res) => {
  //   const body = req.body;
  const bike = await bikeService.getbike();

  res.status(200).json({
    success: true,
    message: "data get successfully",
    data: bike,
  });
  console.log(bike);
};



module.exports = { getbike };