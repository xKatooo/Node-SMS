const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const path = require('path');

//  settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname+'/views'));
app.engine(".hbs", exphbs({
    layoutsDir:path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: require('./libs/helper')
}));
app.set('view engine', '.hbs');
//  middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// routes
app.use(require('./routes/index.routes'));

//  static files  
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res)=>{
    res.send("hola mundo");
})

module.exports = app;