// Books.jsx

import React, { useEffect, useState } from 'react';
import './Books.css'; // Import Books.css for styling
import BookForm from '../components/BookForm';
import { getBooks, addBook, updateBook, deleteBook } from '../services/api';
import BookList from '../components/BookList';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        const result = await getBooks();
        setBooks(result);
    };

    const handleAddBook = async (book) => {
        await addBook(book);
        loadBooks();
    };

    const handleUpdateBook = async (id, book) => {
        await updateBook(id, book);
        loadBooks();
    };

    const handleDeleteBook = async (id) => {
        await deleteBook(id);
        loadBooks();
    };

    return (
        <div>
            <h1>Books</h1>
            <BookForm initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }} onSubmit={handleAddBook} />
            <div className="books-container">
                <BookList books={books} onUpdate={handleUpdateBook} onDelete={handleDeleteBook} />
            </div>
        </div>
    );
};

export default Books;
