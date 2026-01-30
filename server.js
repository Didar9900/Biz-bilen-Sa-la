const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public')); // HTML/CSS faýllarynyň duran ýeri

// Sargyt kabul ediş bölümi
app.post('/sargyt-et', (req, res) => {
    const sargyt = req.body;
    console.log("Täze sargyt geldi:", sargyt);
    res.json({ message: "Sargydyňyz kabul edildi!" });
});

app.listen(PORT, () => {
    console.log(`Serwer şu salgyda işleýär: http://localhost:${PORT}`);
});