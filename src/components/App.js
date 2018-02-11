import React, { Component } from 'react';
import { getBooksData } from '../booksData';
import BooksContainer from './BooksContainer';


class App extends Component {
  render() {
    return (
      <div className="Librarian">
        <BooksContainer books={ getBooksData() } />
      </div>
    );
  }
}

export default App;
