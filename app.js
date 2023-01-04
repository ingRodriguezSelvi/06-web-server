import express from 'express';
import hbs from 'hbs';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



// server content static files from the public folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        title: 'Home Page',
        name: 'Andres Rodriguez'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        title: 'Generic Page',
        name: 'Andres Rodriguez'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        title: 'Elements Page',
        name: 'Andres Rodriguez'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port || 8080, () => {
    console.log(`Server running on port ${port}`);
});