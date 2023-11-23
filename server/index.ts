import cors from 'cors'
import expres from 'express'
const app= expres()

app.use(expres.json())
app.use(cors())

app.listen(3000,()=>{
    console.log('Server running on port 3000 🚀')
})
