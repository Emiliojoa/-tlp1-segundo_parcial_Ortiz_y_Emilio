const express = require('express');
const books = require('./bd');
const { title } = require('process');

const app = express();

app.use(express.json());

//primera vista del servidor
app.get('/', (req,res)=>{
    res.json("MUCHOS LIBROS FANTANTICOS")
});

//get rutas donde se ven los libros
app.get('/books', (req,res) => {
    res.json(books);
});

//get por id, rutas donde se ven los libros segun el id solicitado
app.get('/books/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if(!book) res.status(404).json({message: 'Libro no encontrado'})
        res.json(book);
});

//post creacion de libros 
app.post('/books', (req,res) =>{
    const newBook = {...req.body, id: books.length + 1};
    books.push(newBook);

    res.json({msg:"usuario creado correctamente"})
});


//put actualizar libros por id
// app.put('/books/:id', (req,res) => {
//     const id = parseInt(req.params.id);
//     const newBook = books.findIndex((book) => book.id === id);
//     newBook.tittle =title;
//     newBook.author = req.body.author;
//     newBook.year = req.body.year;
//     if(index === -1) return res.status(404).json({message: 'Libro no encontrado'});
// });

app.put('/books/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);

    if(!book) return res.status(404).json({message: 'Libro no encontrado'});

    book.title = req.body.title;
    book.author = req.body.author;
    book.year = req.body.year;
    
    res.json(book);
});

//delete borrar libros por id
app.delete('/books/:id', (req,res) =>{
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);
    if(index === -1) return res.status(404).json({message: 'Libro no encontrado'});
    books.splice(index, 1);
    res.json(books);
})




app.listen(4000,()=>{
    console.log('Servidor andando en el puerto 4000')
})

