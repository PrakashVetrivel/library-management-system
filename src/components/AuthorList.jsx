import React from 'react';
import './AuthorList.css'; // Import AuthorList.css for styling

const AuthorList = ({ authors, onUpdate, onDelete }) => {
  return (
    <div>
      <h2>Author List</h2>
      <ul className="author-list">
        {authors.map((author) => (
          <li key={author.id}>
            <div className="author-name">{author.name}</div>
            <div className="author-actions">
              {/* Edit Button */}
              <button className="edit-button" onClick={() => onUpdate(author.id, author)}>Edit</button>
              
              {/* Delete Button */}
              <button className="delete-button" onClick={() => onDelete(author.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
