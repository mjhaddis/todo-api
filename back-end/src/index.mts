import express, { json } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


dotenv.config()

const app = express()

app.use(json())

const PORT = process.env.PORT || 3000
const dbURL = process.env.MONGO_URL 

app.get("/ping", (_, res) => {
    res.status(200).json({ message: "Server is runnin" })
})


app.listen(PORT, async () => {
    console.log(`Server is running @ http://localhost:${PORT}`);
})