const worldRouter = (req, res) => {
  res.send("Hello World!");
};

const ronalRouter = (req, res) => {
  res.send("Hello ROnal!");
};

module.exports = { worldRouter, ronalRouter };
