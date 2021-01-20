import express from 'express';
import handlebars from 'express-handlebars';
import bodyParser from 'body-parser';
import adminRouter from './routes/admin.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/admin', adminRouter);

app.listen(port, () => console.log(`server running`));
