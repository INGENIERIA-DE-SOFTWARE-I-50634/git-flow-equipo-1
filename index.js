const express = require('express');
const app = express();

app.use(express.json())

app.post('/eco', (req, res) => {
  var echo = req.body.mensaje;
  res.status(200).send({
      status: true,
      mensaje: `escribiste: ${echo}`
  });
  console.log(`===> endpoint /eco con ${echo}`);
});

app.get('/fecha', (req, res) => {
  console.log('La fecha actual es');
  var today = new Date();
  res.send('La fecha actual es: '+ today);

});

app.get('/aleatorio', function(req, res) {
    var num = Math.random(1000) * 100;
    res.send("Su número aleatorio es "+num);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('simple API escuchando en el puerto: ', port);
});
