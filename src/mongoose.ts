import mongoose from 'mongoose';

const uri: string = "mongodb+srv://Nadiia:Nadin1992!@newcluster.lskum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log('db error: ' + err.message);
    } else {
        console.log('Successfully connected to MongoDb');
    }
})

export const BookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true}
});

 const Book = mongoose.model('Book', BookSchema);

export default Book;

