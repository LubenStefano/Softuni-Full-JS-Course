import express from 'express';
import router from './routes.js';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import 'dotenv/config.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();

const url = 'mongodb://localhost:27017';
mongoose.connect(url, {dbName: 'tech'}) //change the db name
.then(() => {
    console.log('Connected to the database');
})
.catch((err) => {
    console.log('Failed to connect to the database', err);
});

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('views', 'src/views');
app.set('view engine', 'hbs');

app.use('/static', express.static('src/public'));
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(authMiddleware);

app.use(router)


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});