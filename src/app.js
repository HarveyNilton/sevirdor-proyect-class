
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./utils/db')
const initModels = require('./models/initModels')
const userRoute = require('./routes/user.routes')
const postRoute = require('./routes/post.routes')
const answerRoute = require('./routes/answer.routes')

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(userRoute)
app.use(postRoute)
app.use(answerRoute)

app.use((err,req,res,next) =>{
    res.status(400).json(err)
})

const PORT = 8000

initModels()

db.authenticate()
    .then(() => {
        console.log("Base de datos conectado");
    })
    .catch((error) => console.log(error));

/*{force:true}*/
db.sync({ alter: true })
    .then(() => {
        console.log("Base de datos sincronizada");
    })
    .catch((error) => console.log(error))

    
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el ${PORT
        }`);
})