import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shrtUrl";
dotenv.config();
connectDb();

const port = process.env.PORT || 10000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://link-shortener-frontend.onrender.com"],
    credentials: true,
  })
);

app.use("/api/", shortUrl);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
