import cors from 'cors'
import 'dotenv/config'
import expres from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/userRoutes'
const app = expres()
const port = process.env.PORT || 3000

app.use(expres.json())
app.use(cors())
app.use('/api/user', userRoutes)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
mongoose
  .connect(String(process.env.DATABASE_URL))
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso!')
    app.listen(
      {
        port,
      },
      () => {
        console.log(`HTTP server running on http://localhost:${port} 🚀`)
      },
    )
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err)
    process.exit(1)
  })
