var express = require("express")
var app = express();
console.log("Servidor web escuchando en puerto 8000");
app.get('/',function(req,res){res.send("Hola Mundo!");});
app.listen(8000);
