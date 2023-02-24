import { Express } from "express";
import Gun from "gun";
import cors from "cors"

const app = Express()
const port = process.env.PORT || 9000

app.use(cors())

app.use(Gun.server)

app.get('/', (_, res) => {
    res.status(200).send('> DEBUG: Discord Nord is Live')
})

const server = app.listen(port, () =>{
    console.log('> DEBUG : Discord Nord Is Listening at http://localhost:${port}')
})

Gun({ web: server })