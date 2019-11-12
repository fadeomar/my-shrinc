const clientError = (req, res) => {
  console.log('sssssssssssssss');
  res.status(404).send({
    message: 'page not found',
    statusCode: 404,
  });
};

module.exports = { clientError };
