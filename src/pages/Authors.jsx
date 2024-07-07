import React, { useEffect, useState } from 'react';
import './Authors.css';
import AuthorForm from '../components/AuthorForm';
import { getAuthors, addAuthor, updateAuthor, deleteAuthor } from '../services/api';
import AuthorList from '../components/AuthorList';

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    loadAuthors();
  }, []);

  const loadAuthors = async () => {
    const result = await getAuthors();
    setAuthors(result);
  };

  const handleAddAuthor = async (author) => {
    await addAuthor(author);
    loadAuthors();
  };

  const handleUpdateAuthor = async (id, author) => {
    await updateAuthor(id, author);
    loadAuthors();
  };

  const handleDeleteAuthor = async (id) => {
    await deleteAuthor(id);
    loadAuthors();
  };

  return (
    <div>
      <h1>Authors</h1>
      <AuthorForm initialValues={{ name: '', birthDate: '', biography: '',}} onSubmit={handleAddAuthor} />
      <AuthorList authors={authors} onUpdate={handleUpdateAuthor} onDelete={handleDeleteAuthor} />
    </div>
  );
};

export default Authors;
