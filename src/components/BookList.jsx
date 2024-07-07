import React from 'react';
import './BookList.css'; // Import BookList.css for styling

const BookList = ({ books, onUpdate, onDelete }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id}>
            <div className="book-info">
              <span className="book-title">{book.title}</span> - <span className="book-author">{book.author}</span>
            </div>
            <div className="book-actions">
              {/* Edit Button */}
              <button className="edit-button" onClick={() => onUpdate(book.id, book)}>Edit</button>
              
              {/* Delete Button */}
              <button className="delete-button" onClick={() => onDelete(book.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
