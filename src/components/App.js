import React, { Component } from 'react';
import '../App.css';
import { getBooksData } from '../booksData';
import BooksContainer from './BooksContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BooksContainer books={ getBooksData() } />
      </div>
    );
  }
}

export default App;
