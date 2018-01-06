import React, { Component } from 'react';
import Book from './Book';


class BooksContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { books: this.props.books };

    this.handleAddBook = this.handleAddBook.bind(this)
  }

  handleAddBook(e) {
    this.setState(prevState => {
      prevState.books.push({
        editMode: true,
        book: {}
      });
    });

  }

  render() {
    return (
      <div>
        {this.state.books.map(function(bookData, i) {
            return (<Book {...bookData} key={i} />)
        })}
        <button onClick={ this.handleAddBook } >Dodaj ksiażkę</button>
      </div>
    );
  }
}

export default BooksContainer;
