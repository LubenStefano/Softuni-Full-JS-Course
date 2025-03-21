import express from 'express';
import handlebars from 'express-handlebars';
import router from './routes.js';

const port = 5000

const app = express()

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    }))
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.use(router)

app.listen(port, ()=>{console.log("Server is listening on port: " + port)})