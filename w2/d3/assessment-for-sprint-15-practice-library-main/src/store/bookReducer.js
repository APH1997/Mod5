import initialBooks from '../data/initial-books.json';


const REMOVE_BOOK = 'books/removeBook';
const CREATE_BOOK = 'books/createBook';
const UPDATE_BOOK = 'books/updateBook';
const RESET_DATA = 'books/resetData';
const CHECK_BOOK = 'books/checkBook';

export const checkBook = (book) => {
    return ({
        type: CHECK_BOOK,
        book
    })
}
export const updateBook = (book) => {
    return ({
        type: UPDATE_BOOK,
        book
    })
}

export const createBook = (book) => {
    return ({
        type: CREATE_BOOK,
        book
    })
}
export const removeBook = (bookId) => {
    return ({
        type: REMOVE_BOOK,
        bookId
    })
}

export const resetBooks = () => {
    return ({
        type: RESET_DATA
    })
}

const initialState = {};
for (let book of initialBooks){
    initialState[book.id] = book
}

const bookReducer = (state = initialState, action) => {
    switch (action.type){
        case REMOVE_BOOK: {
            const newState = {...state};
            delete newState[action.bookId]
            return newState;
        }
        case CREATE_BOOK: {
            const newState = {...state, [action.book.id]: action.book}
            return newState;
        }
        case UPDATE_BOOK: {
            const newState = {...state};
            newState[action.book.id] = action.book;
            return newState;
        }
        case RESET_DATA: {
            return initialState;
        }
        case CHECK_BOOK: {
            const newState = {...state};
            newState[action.book.id].checkedOut = !newState[action.book.id].checkedOut
            return newState;
        }

        default:
            return state;
    }
}

export default bookReducer;
