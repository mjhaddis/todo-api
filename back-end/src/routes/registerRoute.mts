import express from 'express';

export const registerRouter = express.Router();

registerRouter.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).send("Email and/or password is missing");
        } else {
            const newUser = await createUser ({ email, password });
            res.status(200).json(newUser);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }

});