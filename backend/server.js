import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = 5001;

dotenv.config();
app.use(express.json());//to parse the upcoming payloads(frm req.bod)
app.use("/api/auth", authRoutes); 
app.use("/api/messages", messageRoutes);
app.use(cookieParser());
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });


app.listen(PORT, () => 
{
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)

});
