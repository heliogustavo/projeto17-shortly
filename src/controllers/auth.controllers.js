import { db } from "../database/db.connection.js"
import bcrypt from "bcrypt"

export async function signUp(req, res) {
    const { name, email, password } = req.body

    try {
        const user = await db.query(`SELECT * FROM users WHERE email=$1;`, [email])
        //status 409 é de conflito
        if (user.rowCount !== 0) return res.status(409).send({ message: "Este email já foi cadastrado!" })

        const hash = bcrypt.hashSync(password, 10)

        await db.query(`INSERT INTO users (name, email, password) VALUES ($1,$2,$3);`,
            [name, email, hash]
        )

        res.sendStatus(201)

    } catch (err) {
        res.status(500).send(err.message)
    }

    res.sendStatus(201)
}

export async function signIn(req, res) {
    res.send("signin")
}