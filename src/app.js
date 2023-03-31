
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./utils/db')
const initModels = require('./models/initModels')
const userRoute = require('./routes/user.routes')
const postRoute = require('./routes/post.routes')
const answerRoute = require('./routes/answer.routes')
const categoryRouter = require('./routes/category.routes')
const authRouter = require('./routes/auth.routes')
const errorHandlerRouter = require('./routes/errorHandle.routes')

const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('./swagger.json')



const app = express()

const PORT = process.env.PORT


initModels()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

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

app.use('/api/v1/doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use(userRoute)
app.use(postRoute)
app.use(answerRoute)
app.use(categoryRouter)
app.use(authRouter)

errorHandlerRouter(app)


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el ${PORT
        }`);
})