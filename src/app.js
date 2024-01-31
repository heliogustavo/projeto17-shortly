import express  from "express";
import dotenv from "dotenv"
import cors from "cors"


dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())


app.get("/test", (req, res) =>{

    res.send("Funcionaa")
})

const PORT = 5000 || ProcessingInstruction.ENV.PORT
app.listen(5000, ()=> console.log(`Servidor rodando na porta ${PORT}`))