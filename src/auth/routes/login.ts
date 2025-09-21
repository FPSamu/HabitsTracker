import { Router } from "express";
import { getDB } from "../../services/database.service";
import bcrypt from 'bcrypt';
import validEmail from "../utils/validEmail";

const router = Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try{
        if (!email || !password) {
            return res.status(400).json({error:'Some fields missing'});
        }

        if (!validEmail(email)) return res.status(400).json({ error: "Email not valid" });


        const db = getDB();
        const usersCollection = db.collection(process.env.USERS_COLLECTION_NAME || 'users');

        const user = await usersCollection.findOne({email});

        if (user) {
            const correctPassword = await bcrypt.compare(password, user.passwordHash);
            
            if (correctPassword) {
                res.status(200).json({
                    message:'User logged in',
                    user: {
                        _id:user._id,
                        email:user.email,
                        name:user.name
                    }
                });
            } else {
                res.status(401).json({message:'Incorrect email or password'});
            }
        } else {
            res.status(401).json({message:'Incorrect email or password'});
        }
    } catch (error) {
        res.status(500).json({error: (error as Error).message, message: 'Server error'});
    }
    
});

export default router;