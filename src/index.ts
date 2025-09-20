import express from "express";

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('api working!');
});

app.listen(port, () => {
    console.log(`server running in port ${port}`);
})