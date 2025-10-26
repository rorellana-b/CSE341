const routes = require("express").Router();
const lesson1 = require("../controllers/lesson1");

routes.get("/", lesson1.worldRouter);
routes.get("/ronal", lesson1.ronalRouter);

module.exports = routes;
