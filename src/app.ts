import express from 'express';
import * as bodyParser from 'body-parser'
import * as bookController from './controllers/boockController'


const app: express.Application = express();

app.set('port', 3000);
app.use(bodyParser.json())

app.get('/books', bookController.allBooks)
app.get('/book/:id', bookController.getBookId)
app.post('/book', bookController.addBook)
app.delete('/book/:id', bookController.deleteBook)
app.patch('/book/:id', bookController.updateBook)


app.listen(app.get("port"), () => {
    console.log(`Server running in http://localhost:%d`, app.get('port'));
});

