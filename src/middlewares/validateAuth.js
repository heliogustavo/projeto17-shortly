import { findSessionDB } from "../repositories/auth.repository.js"

export async function validateAuth(req,res, next){
    //no header da requisição tem um elemento chamado authorization, dentro dele se armazena o token
    const {authorization} = req.headers
    //a "?" serve pra executar o sódigo a seguir somente se a variável que a precede existir.
    const token= authorization?.replace("Bearer ", "")
    if(!token) return res.sendStatus(401)

    try{
        const session = await findSessionDB(token)
        if (session.rowCount === 0) return res.sendStatus(401)

        res.locals.userId = session.rows[0].userId
        next()
}catch(err){
    res.status(500).send(err)
}

}