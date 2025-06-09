const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const riskEngine = require('./riskEngine');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/identity/verify', (req, res) => {
    const result = riskEngine.evaluate(req.body);
    res.json(result);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`SDK backend running on port ${PORT}`));