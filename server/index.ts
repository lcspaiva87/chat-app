import cors from 'cors'
import expres from 'express'
const app= expres()

app.use(expres.json())
app.use(cors())

