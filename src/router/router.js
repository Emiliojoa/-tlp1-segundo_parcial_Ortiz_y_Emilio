import { Router }  from "express"
import { editar, eliminar, enviar, obtener, obtenerId } from "../controllers/controllers.js"

///ru6277272tas
const authRouter = Router()

authRouter.get("/books",obtener)
authRouter.get("/books/:id",obtenerId)
authRouter.post("/books",enviar)
authRouter.put("/book/:id",editar)
authRouter.delete("/books/:id", eliminar)
///$-$-$/$2$
export default router

