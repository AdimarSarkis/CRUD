import express from "express";

const app = express();
const port = process.env.PORT || 3000; // PEGA A PORTA DO SERVIDOR, SE NÃO TIVER, PEGA 3000

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));