import React, { Component } from 'react';
import Book from './Book';
import { removeBook } from '../booksData';


class BooksContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { books: this.props.books };

    this.handleAddBook = this.handleAddBook.bind(this);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleAddBook(e) {
    this.setState(prevState => {
      prevState.books.push({
        editMode: true,
        book: {}
      });
    });

  }

  handleRemoveBook(bookData) {
    const booksData = removeBook(bookData);
    this.setState({
      books: booksData
    });
  }

  render() {
    return (
      <div className="BooksContainer">
        { this.state.books.map( (bookData, i) => { return (<Book {...bookData} key={i.toString()} handleRemoveBook={ this.handleRemoveBook } />) }, this)}
        <article className="addBook" onClick={ this.handleAddBook } >+</article>
      </div>
    );
  }
}

export default BooksContainer;
