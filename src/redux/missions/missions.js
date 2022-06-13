// Actions
const BOOKS_DEFAULT = 'bookstore/books/BOOKS_DEFAULT';
const ADDNEW = 'bookstore/books/ADDNEW';
const DELETE = 'bookstore/books/REMOVE';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case BOOKS_DEFAULT:
      return action.payload;

    case ADDNEW:
      return [
        ...state,
        action.payload,
      ];

    case DELETE:
      return [...state.filter((book) => (book.id !== action.payload))];

    default:
      return state;
  }
}

// Action Creators
export function getAllBooks() {
  return async (dispatch) => {
    const books = await getApiData();
    dispatch({ type: BOOKS_DEFAULT, payload: books });
  };
}

export function addBook(book) {
  return async (dispatch) => {
    await addApiData(book);
    dispatch({ type: ADDNEW, payload: book });
  };
}

export function deleteBook(id) {
  return async (dispatch) => {
    await deleteApiData(id);
    dispatch({ type: DELETE, payload: id });
  };
}
