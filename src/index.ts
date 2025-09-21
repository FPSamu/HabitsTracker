import express from "express";
import authRouter from './auth/routes/register';
import { connectDB } from "./services/database.service";
import dotenv from "dotenv";

dotenv.config();

const port = 3000;
const app = express();


app.use(express.json());
app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.send('api working!');
});

(async () => {
    connectDB();

    app.listen(port, () => {
        console.log(`server running in port ${port}`);
    })
})();