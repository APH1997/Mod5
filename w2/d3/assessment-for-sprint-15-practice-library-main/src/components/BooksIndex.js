import { Link } from 'react-router-dom';
import BookIndexItem from './BookIndexItem';
import { useSelector } from 'react-redux';
import { resetBooks } from '../store/bookReducer';
import { useDispatch } from 'react-redux';
const BooksIndex = () => {
  const dispatch = useDispatch()

  const resetBookData = (e) => {
    e.preventDefault();
    dispatch(resetBooks());
  };

  const state = useSelector(state => state.books)
  const books = Object.values(state);

  return (
    <section>
      <ul>
        {
          books.map(book => (
            <BookIndexItem
              book={book}
              key={book.id}
            />
          ))
        }
      </ul>
      <Link to="/books/new">Add New Book</Link>
      <button onClick={resetBookData}>Reset Book Data</button>
    </section>
  );
}

export default BooksIndex;
