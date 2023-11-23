import cors from 'cors'
import expres from 'express'
const app = expres()
const port = process.env.PORT || 3000
app.use(expres.json())
app.use(cors())

app.listen(port,()=>{
    console.log(`Server running on port: ${port} 🚀`)
})
