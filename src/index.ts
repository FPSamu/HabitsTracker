import express from "express";
import registerRouter from './auth/routes/register';
import loginRouter from './auth/routes/login';
import { connectDB } from "./services/database.service";
import dotenv from "dotenv";

dotenv.config();

const port = 3000;
const app = express();


app.use(express.json());
app.use('/auth', registerRouter);
app.use('/auth', loginRouter);

app.get('/', (req, res) => {
    res.send('api working!');
});

(async () => {
    connectDB();

    app.listen(port, () => {
        console.log(`server running in port ${port}`);
    })
})();