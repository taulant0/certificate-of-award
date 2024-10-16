import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const fullName = req.body["fName"] + " " + req.body["lName"];
  const reason = req.body["reason"];
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const currentDate = `${currentDay}.${currentMonth}.${currentYear}`;




  res.render("index.ejs", { fullName, reason, currentDate });



});




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

