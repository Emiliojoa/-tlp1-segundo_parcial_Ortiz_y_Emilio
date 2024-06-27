const express = require('express');
const books = require('./bd')

const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.json("MUCHOS LIBROS FANTANTICOS")
});

app.get('/books', (req,res) => {
    res.json(books);
});





app.listen(4000,()=>{
    console.log('Servidor andando en el puerto 4000')
})

