import express from "express"

const app = express();

app.use(express.json())
app.use(require("./router/router.js"))


app.listen(4000,()=>{
    console.log('Servidor andando en el puerto 4000')
})

