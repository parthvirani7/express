const { bookService } = require("../services");

const getbook = async (req, res) => {
  //   const body = req.body;
  const book = await bookService.getbook();

  res.status(200).json({
    success: true,
    message: "data get successfully",
    data: book,
  });
  console.log(book);
};



module.exports = { getbook };