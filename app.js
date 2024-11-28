const express = require('express');
const app = express();


const PORT = 3000;


app.get('/', (req, res) => {
    const aktuelleZeit = new Date().toLocaleTimeString();
    res.send(`Die aktuelle Uhrzeit ist: ${aktuelleZeit}`);
});


app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
