import { customAlphabet } from 'nanoid'
import { createShortUrlDB } from '../repositories/url.repository.js'
const nanoid = customAlphabet('1234567890abcdef', 8)

export async function shortenUrl(req,res){
    const { url } = req.body;
    const {userId} = res.locals
    const shortUrl= nanoid()
    
    try{
        const result = await createShortUrlDB(url, shortUrl, userId)
        res.status(201).send(result.rows[0])

}catch(err){
    res.status(500).send(err.message)
}

}

export async function getUrl(req,res){
    res.send("getUrl")
}

export async function openUrl(req,res){
    res.send("openUrl")
}

export async function deleteUrl(req,res){
    res.send("deleteUrl")
}