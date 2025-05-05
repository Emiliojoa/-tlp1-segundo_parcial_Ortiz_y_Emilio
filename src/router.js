import { Router }  from "express"
import { editar, enviar, obtener, obtenerId } from "./controllers"


const router = Router()

router.get("/books",obtener)
router.get("/books/:id",obtenerId)
router.post("/books",enviar)
router.put("/book/:id",editar)

