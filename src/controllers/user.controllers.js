import { getRankingDB, getUrlsByUserDB, getUserByIdDB } from "../repositories/user.repository.js"

export async function getCurrentUser(req,res){
    const {userId} = res.locals
    try{
        //const  = await... (caso queira desestruturar)
        const {rows:[user]} = await getUserByIdDB(userId)
        //abaixo, a variavel urls está trazendo um array lista com cada item encontrado em rows
        const {rows: urls} = await getUrlsByUserDB(userId)
        res.send({...user, shortenedUrls:[...urls]})
    }catch(err){
        res.status(500).send(err.message)
    }
}

export async function getUserRanking(req,res){
    try{
        const {rows:ranking}= await getRankingDB()
        res.send(ranking) 
    }catch(err){
        res.status(500).send(err.message)
    }


}
