const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const port = 5000;
const db = {
  database:
    // "mongodb+srv://root:root@kidkod.xmqil.mongodb.net/kidkok?retryWrites=true&w=majority" ||
    "mongodb://localhost/pfeWael",
  secret: "mysecret",
};

/******************** Mongoose ********************/
mongoose.Promise = global.Promise;
mongoose
  .connect(db.database)
  .then((res) => console.log("mongoose connected !"));

/******************** Middleware ********************/
let app = express();
app.use(cors({ credentials: true, sameSite: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, sameSite: true }));

const gestionPersonnel = require("./routers/gestionPersonnel");
const gestionFournisseur = require("./routers/gestionFournisseur");
const gestionColis = require("./routers/gestionColis");
const gestionRunsheet = require("./routers/gestionRunsheet");
const gestionHub = require("./routers/gestionHub");
const usersAdmin = require("./routers/usersAdmin");
const usersFournis = require("./routers/usersFournis");

app.use("/api/gestionPersonnel", gestionPersonnel);
app.use("/api/gestionFournisseur", gestionFournisseur);
app.use("/api/gestionColis", gestionColis);
app.use("/api/gestionRunsheet", gestionRunsheet);
app.use("/api/gestionHub", gestionHub);
app.use("/api/usersAdmin", usersAdmin);
app.use("/api/usersFournis", usersFournis);

app.listen(port, () => {
  console.log(`listening on port http://127.0.0.1:${port} !`);
});
