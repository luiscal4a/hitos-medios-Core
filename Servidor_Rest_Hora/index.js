const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

var now;
var d = new Date();
myFunction();

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre",
 "octubre", "noviembre", "diciembre"]

// url: http://localhost:3000/
app.get('/', (request, response) => response.send("Son las " + now + " del " + d.getDate() + " de " +
 meses[d.getMonth()] + " de " + d.getFullYear()));


function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function myFunction() {
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    now = h + ":" + m + ":" + s;
}

// set the server to listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));