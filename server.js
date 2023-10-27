const express = require('express');
const cors = require('cors');
const DataModel = require('./db');

const app = express();

app.use(cors());

// Increase the payload size limit (e.g., 10MB)
app.use(express.json({ limit: '300mb' }));

app.post("/add", async (req, res) => {
    const data = req.body;
    console.log(data);
    await DataModel.create(data);
    return res.json({ message: "Successfully Done!" });
});

app.get("/link", async (req, res) => {
    const data = await DataModel.findOne({ id: 1 });
    res.json(data.data);
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
