import express from 'express';
import dotenv from ("dotenv");

import authRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();

const PORT = 5001;

app.get("/", (req,res) => {
    res.send("Hello World");
})

app.use("/api/auth",authRoutes)

app.listen(PORT, () => console.log(`Server Running on port 5001 ${PORT}`));

// app.get("/api/auth/signup", (req, res) => {
//     console.log("Signup route");
// })
// app.get("/api/auth/signup", (req, res) => {
//     console.log("login route");
// })
// app.get("/api/auth/signup", (req, res) => {
//     console.log("logout route");
// })
// app.get("/api/auth/signup", (req, res) => {
//     console.log("Signup route");
// })
// app.get("/api/auth/signup", (req, res) => {
//     console.log("login route");
// })
// app.get("/api/auth/signup", (req, res) => {
//     console.log("logout route");
// })


