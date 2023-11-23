import cors from 'cors'
import expres from 'express'
import mongoose from 'mongoose'
const app = expres()
const port = process.env.PORT || 3000
app.use(expres.json())
app.use(cors())

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
