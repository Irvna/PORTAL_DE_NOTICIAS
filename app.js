const express = require ('express');
const app = express();
app.set('view-engine', 'ejs');
app.set('views', './app/views');

app.get('/', function(req,res){
	res.render('home/index.ejs');
});

app.get('/noticia', function(req,res){
	res.render('noticias/noticia.ejs');
});

app.get('/formulario_inclusao_noticia', function(req,res){
	res.render('admin/form_add_noticia.ejs');
});

app.listen('3000', function(){
	console.log('Servidor rodando na porta 3000');
});