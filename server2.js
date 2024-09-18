const express = require('express');
const cors = require('cors');
const app = express();
const port = 10000;

app.use(express.json());
app.use(cors());

function randomLetter() {
    const asciiInicioMinusculas = 65; // Código ASCII para 'a'
    const asciiFinMinusculas = 90;   // Código ASCII para 'z'

    // Generar un código ASCII aleatorio dentro del rango de letras minúsculas
    const codigoAsciiAleatorio = Math.floor(Math.random() * (asciiFinMinusculas - asciiInicioMinusculas + 1)) + asciiInicioMinusculas;

    // Convertir el código ASCII a su correspondiente letra minúscula
    return String.fromCharCode(codigoAsciiAleatorio);
}



app.get('/randomLetter', (req, res) => {
    res.send(randomLetter());
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });