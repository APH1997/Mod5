import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { checkBook } from '../store/bookReducer';
const BookShow = () => {
  const dispatch = useDispatch()
  const { bookId } = useParams();
  const state = useSelector(state => state.books);

  const book = {...state[bookId]};

  const changeCheckOut = (e) => {
    e.preventDefault();
    dispatch(checkBook(book));
  };

  return (
    <section>
      ID: {book.id}
      <br/>
      Title: {book.title}
      <br/>
      Author: {book.author}
      <br/>
      <button onClick={changeCheckOut}>
        {book.checkedOut === true && "Return"}
        {book.checkedOut === false && "Check Out"}
      </button>
      <br/>
      <Link to="/">Back to Books List</Link>
    </section>
  );
}

export default BookShow;
