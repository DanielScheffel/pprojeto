const express = require('express');
const exphbs = require('express-handlebars');
const con = require('./conexao/connection');
const path = require('path')

const app = new express();

const basePath = path.join(__dirname, 'layouts')

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// Página de Inicio //
app.get('/inicio', (req, res) => {
    res.render('inicio')
});

// Página de Login //
app.get('/login', (req, res) => {
    res.render('login');
});

// Página de Registro //
app.get('/register', (req, res) => {
    res.render('register');
});

// Tela Home //
app.get('/home', (req, res) => {
    res.render('home');
});

// Selecionando a tabela do banco //
app.get('/usuario', (req, res) => {
    con.query('SELECT * FROM usuario', (err, result) => {
        res.send(result);
    });
});

// Página Home //
app.get('/', (req, res) => {
    res.render('home');
});

// Novo usuário //
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/register`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)
})

//Inicializando a porta que o app irá rodar
app.listen('3000', () => {
    console.log('Aplicação rodando na porta 8080!');
})