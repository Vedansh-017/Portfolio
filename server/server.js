import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import feedbackRoutes from "./routes/feedbackRoutes.js";
import bodyParser from "body-parser";

const PORT= process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(bodyParser.json());
// await connectDB()
const allowedOrigins = [
    'http://localhost:5173', // React app

];
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.get('/',(req,res)=>  res.send("DDSTHA"));
app.use("/api/feedback", feedbackRoutes);


app.listen(PORT, ()=> console.log('Server Running on PORT ' + PORT));
