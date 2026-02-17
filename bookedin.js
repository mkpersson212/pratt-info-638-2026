const express = require('express');

//framework setup
const app = express();
const port = 3000;

//framework imports
const handlebars = require('express-handlebars').create();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//application imports
const indexRouter = require('./routes/index');
const authorsRouter = require('./routes/authors');

//custom 404 page

app.use('/', indexRouter);
app.use('/authors', authorsRouter);

/*app.use('/', (req, res) => {
	res.send('<h1>Hello and welcome to BookedIn</h1>');
});*/

app.use((req, res) => {
	res.status(404);
	res.send('<h1> 404 - Not Found in the System </h1>');
});
//custom 500 page
app.use((err, req, res, next) => {
	console.error(err.message);
	res.status(500);
	res.send('<h1>500 - Server Error</h1>');
});
app.listen(port, () => console.log(`Express started on http://localhost:${port}, press Ctrl+C to terminate.`));