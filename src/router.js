import { Router }  from "express"
import { editar, eliminar, enviar, obtener, obtenerId } from "./controllers"


const router = Router()

router.get("/books",obtener)
router.get("/books/:id",obtenerId)
router.post("/books",enviar)
router.put("/book/:id",editar)
router.delete("/books/:id", eliminar)

export default router

