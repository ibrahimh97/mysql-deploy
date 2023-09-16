const express=require("express");
const mysql=require("mysql2");
var cors = require('cors')

const app=express();
app.use(cors())

let db = [
  {
    Id: 50,
    Ad: "ibrahim",
    Soyad: "hasanov",
    Sifre: "salam123",
    Adres: "sumgayit"
  },
  
];
let connection = mysql.createConnection({
  host: "bjp3zeuadoa52cdloynb-mysql.services.clever-cloud.com",
  user: "ulsfdrlpkyx3byn6",
  password: "LrfUcNWkmZixJR0lr5DZ",
  database: "bjp3zeuadoa52cdloynb",
});

connection.query("select * from Persons", function (err, result, fields) {
    console.log(err);
    console.log(result);
    console.log(fields);
  app.get("/Persons", function (req, res) {
      res.send(result);
    });
  }
  );
  
  

  app.get ("/Persons", (req,res)=>{
    res.send("result");


});

//  app.listen(3000);

 app.post("/Persons/", (req, res) => {
  let obj = req.body;
  connection.query(
    `INSERT INTO Persons (Id, )
    VALUES ("${obj.Id}", "${obj.Ad}", "${obj.Soyad}", "${obj.Sifre}", "${obj.Adres}")`,
    function (err, result, fields) {
      //   console.log(result);
      //   app.get("/student", function (req, res) {
      //     res.send(result);
      //   });
    }
  );
  connection.query("select * from users", function (err, result, fields) {
    //   console.log(err);
    console.log(result);
    res.send(result);
  });
});

app.listen(process.env.PORT || 3000);