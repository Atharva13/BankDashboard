const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

let accountsJSON = require("./accounts.json");

app.use(cors());

const path = "C:\\Users\\u723354\\Desktop\\Bank Dashboard\\Backend\\resources\\";
app.get("/", (req, res) => {
    let accounts = JSON.stringify(accountsJSON);
    res.send(accounts);
});

app.use("/images", express.static(path));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});