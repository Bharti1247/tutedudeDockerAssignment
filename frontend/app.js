const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/submit', async (req, res) => {
    const formData = {
        itemName: req.body.itemName,
        itemDescription: req.body.itemDescription
    };

    try {
        const response = await fetch('http://backend:5000/submittodoitem', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData)
        });

        const result = await response.text();
        res.send(result);
    } catch (err) {
        res.status(500).send('Error connecting to backend');
    }
});

app.listen(3000, () => console.log('Frontend running on http://localhost:3000'));

