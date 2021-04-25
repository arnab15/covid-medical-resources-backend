if (!process.env.NODE_ENV) {
   require("dotenv").config();
}
const express = require("express");
const createError = require("http-errors");
const cors = require("cors");
require("./helpers/db_connection")();
const authRouter = require("./routes/auth");
const resourceRouter = require("./routes/resource");
const requirmentRouter = require("./routes/requirment");
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;
app.get("/test", (req, res, next) => {
   res.send({
      message: "It's working",
   });
});
app.use("/", authRouter);
app.use("/", resourceRouter);
app.use("/", requirmentRouter);
app.use((req, res, next) => {
   next(createError(404, "Not found/Invalid url"));
});
app.use((err, req, res, next) => {
   res.send({
      error: {
         status: err.status || 500,
         message: err.message,
      },
   });
});
app.listen(port, () => {
   console.log(`Server is up on port ${port}`);
});
