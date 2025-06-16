import books from "../db/bd.js"


const obtener =  (req,res)=>{
    res.json(books)
}//hola//kslajdla///
//me acorde de como hacer un crud xd
const obtenerId= (req,res)=>{
    const id = parseInt(req.params.id)
    const book = books.find(book=> book.id===id)
    if (!book) res.json({msg: "libro no encontrado"})
}//hola
const enviar=(req,res)=>{
    const newBook={
        id: new Date().getTime(),
        title:req.body.title,
        author:req.body.author,
        year:req.body.year
    }
    if (books.some((titulo)=>titulo.title === newBook.title)){
        res.json({msg:"Este libro ya esta cargado en la base de datos"})
    }
    else{
        res.json({msg:"Libro cargado correctamente"})
        newBook.push(books)
    }

}

const editar= (req,res) => {
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

}

const eliminar = (req,res)=>{
    const id = parseInt(req.params.id)
    const eliminarId= books.findIndex((eliminarId)=>eliminarId.id===id)
    if(eliminarId ===-1){
        res.json({msg:"Libro no encontrado"})
    }else{
        res.json({msg:"libro eliminado correctamente"})
    }
}


export {
    obtener,
    obtenerId,
    enviar,
    editar,
    eliminar
}