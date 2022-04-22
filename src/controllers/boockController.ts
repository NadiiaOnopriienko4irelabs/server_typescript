import {  Request, Response } from 'express';
import Book from './../mongoose'

//- GET - /books # return all book
export let allBooks = (req: Request, res: Response) => {
     Book.find((err: any, books: any) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send(books)
        }
    })
}

// -GET - /book/{1} # return a book with id 1
export let getBookId = (req: Request, res: Response) => {
     Book.findById(req.params.id, (err: any, books: any) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).send(books)
        }
    })
}

// -POST- /book # inserts a new book into the table
export let addBook = (req: Request, res: Response) => {
    let newBook = new Book(req.body)

    newBook.save((err: any) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(201).send( newBook)
        }
    })
}

// - DELETE - /book/{1} # deletes a book with id of 1
export let deleteBook = (req: Request, res: Response) => {
    Book.deleteOne({_id: req.params.id}, (err:any) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send("Successfully Deleted the Book")
        }
    })
}

// - PATCH - /book/{1}  # updates a book with id of 1
export let updateBook =  (req: Request, res: Response) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err: any, book: any) => {
        if (err) {
            res.status(404).send("Could not update book")
        } else {
            res.status(200).send('Book updated')
        }
    })
}
