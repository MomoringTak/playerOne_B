import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
app.use((req, res, next) => {
  console.log("middleware");
  next();
});

app.get("/users", (_, res) => res.send("routeHandler"));

app.listen(8008, () => console.log("✅ good"));
