const { productService } = require("../services");

const getproduct = async (req, res) => {
  //   const body = req.body;
  const product = await productService.getproduct();

  res.status(200).json({
    success: true,
    message: "data get successfully",
    data: product,
  });
  console.log(product);
};



module.exports = { getproduct };