import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createBook } from '../store/bookReducer';
import { useSelector, useDispatch } from 'react-redux';
import { updateBook } from '../store/bookReducer';

const BookForm = ({ book, formType }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector(state => state.books);

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);


  const handleSubmit = (e) => {
    e.preventDefault();
    book = { ...book, title, author };

    formType === "Create Book" ? dispatch(createBook(book)) : dispatch(updateBook(book))

    history.push(`/books/${book.id}`);
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2>{formType}</h2>
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <label>
        Author
        <textarea
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
      </label>
      <input type="submit" value={formType} />
    </form>
  );
}

export default BookForm;
