const express = require('express');
const prueba = require("./prueba");

var fs=require('fs');
var data=fs.readFileSync('contacto.json', 'utf8');
var words=JSON.parse(data);

const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const port = 3000;

var now;
var d = new Date();
myFunction();

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre",
 "octubre", "noviembre", "diciembre"]

// url: http://localhost:3000/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));/*prueba.addOne*/
app.post('/', (request, response) => response.send(words.tel_registro));

app.get('/lmgtfy/search:', (request, response) => response.send(lmgtfy(request.param("search"))));


function lmgtfy(question){
	question = question.replace(/\s/g, "+");
	question="http://lmgtfy.com/?q="+question;
	return question;
}


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