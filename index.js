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

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('simple API escuchando en el puerto: ', port);
});
