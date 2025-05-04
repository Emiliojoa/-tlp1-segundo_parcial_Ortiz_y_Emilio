import express from "express"
import books from "./bd.js"

const app = express();

app.use(express.json());

//get rutas donde se ven los libros
app.get('/books', (req,res) => {
    res.json(books);
});

//get por id, rutas donde se ven los libros segun el id solicitado
app.get('/books/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if(!book) res.json({message: 'Libro no encontrado'})
        res.json(book);
});

//post creacion de libros 
app.post('/books', (req,res) =>{
    const newBook = {
        id: new Date().getTime(),
        title: req.body.title,
        author: req.body.author,
        year: parseInt(req.body.year)
    }
    if(books.some((titulo)=> titulo.title === newBook.title )){
        res.json({message: 'El libro ya existe'});
    }else{
        books.push(newBook);
        res.json({msg: "nuevo libro subido"});
    }
})

app.put('/books/:id', (req,res) => {
    const id = +(req.params.id);
    const editar =books.find((editar) => editar.id == id )
    if(editar){
        editar.title = req.body.title;
        editar.author = req.body.author;
        editar.year = parseInt(req.body.year);
        res.json({msg: 'libro editado correctamente'});
    }else{
        res.json({message: 'Libro no encontrado'});
    }

});

//delete borrar libros por id
app.delete('/books/:id', (req,res) =>{
    const id = +(req.params.id);
    const eliminar = books.findIndex((eliminar) => eliminar.id === id);
    if(eliminar === -1){ 
        res.json({message: 'Libro no encontrado'});
    }else{
     books.splice(eliminar, 1)   
    res.json({msg: 'libro eliminado correctamente'});
    }
})




app.listen(4000,()=>{
    console.log('Servidor andando en el puerto 4000')
})

