import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../store/bookReducer';
const BookIndexItem = ({ book }) => {
  const state = useSelector(state => state.books);
  const dispatch = useDispatch()
  const deleteBook = (e) => {
    e.preventDefault();
    dispatch(removeBook(book.id))
  };

  return (
    <li>
      <Link to={`/books/${book.id}`}>Book #{book.id}</Link>
      <Link to={`/books/${book.id}/edit`}>Edit</Link>
      <button onClick={deleteBook}>Delete</button>
    </li>
  );
};

export default BookIndexItem;
