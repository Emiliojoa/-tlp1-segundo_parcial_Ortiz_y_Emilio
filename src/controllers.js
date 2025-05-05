import books from "./bd.js"


app.get("books/", (req,res)=>{
    res.json(books)
})

app.get("/books/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const book = books.find(book=> book.id===id)
    if (!book) res.json({msg: "libro no encontrado"})
})

app.push("/books", (req,res)=>{
    const newBook={
        id: new Date().getTime(),
        title:req.params.title,
        author:req.params.author,
        year:req.params.year
    }
    if (books.some((titulo)=>titulo.title === newBook.title)){
        res.json({msg:"Este libro ya esta cargado en la base de datos"})
    }
    else{
        res.json({msg:"Libro cargado correctamente"})
        newBook.push(books)
    }

})