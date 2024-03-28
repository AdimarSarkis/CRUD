import express from "express";
import connectDatabase from "./src/database/db.js";

import dotenv from "dotenv";
dotenv.config();

import useRoute from "./src/routes/user.route.js";

const app = express();
const port = process.env.PORT || 3000;

connectDatabase();
app.use(express.json());
app.use("/user", useRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));