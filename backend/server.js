import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = 5001;

dotenv.config();
app.use("/api/auth", authRoutes); //to parse the upcoming payloads(frm req.bod)


// app.get("/", (req, res) => {
//   res.send("Hello World");
// });


app.listen(PORT, () => 
{
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)

});
