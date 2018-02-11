import React, { Component } from 'react';
import { setBookData } from '../booksData';
import EditionButtons from './EditionButtons';
import Row from './Row';


class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        editMode: this.props.editMode,
        book: {
          title: this.props.title,
          author: this.props.author,
          ISBN: this.props.ISBN,
          id: this.props.id
        }
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveBook = this.saveBook.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.cancelEdition = this.cancelEdition.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ book: {
        title: nextProps.title,
        author: nextProps.author,
        ISBN: nextProps.ISBN,
        id: nextProps.id
      }
    });
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState(function(prevState) {
      let book = prevState.book;
      book[name] = value;
      
      return { book: book };
    });
  }

  saveBook(e) {
    // TODO make propTypes ISBN a number; make it required; notify if it already exists
    this.toggleEditMode();
    const book = this.state.book;
    const savedBook = setBookData(book);

    this.setState({ book: savedBook });
  }

  removeBook (e) {
    this.props.handleRemoveBook(this.state.book);
  }

  toggleEditMode() {
    this.setState(prevState => ({
      editMode: ! prevState.editMode
    }));
  }

  cancelEdition() {
    this.setState( {
      book: {
        title: this.props.title,
        author: this.props.author,
        ISBN: this.props.ISBN,
      },
      editMode: false
    });
  }

  render() {
    return (
      <article>
        <button className="delete" onClick={ this.removeBook } ></button>
        <dl>
          <input type="hidden" name="id" data={ this.state.book.id } />
          <Row title="Tytuł" name="title" data={ this.state.book.title } editMode={ this.state.editMode } handleChange={ this.handleChange } />
          <Row title="Autor" name="author" data={ this.state.book.author } editMode={ this.state.editMode } handleChange={ this.handleChange } />
          <Row title="ISBN" name="ISBN" data={ this.state.book.ISBN } editMode={ this.state.editMode } handleChange={ this.handleChange } />
        </dl>
        { this.state.editMode ? <EditionButtons saveAction={ this.saveBook } cancelAction={ this.cancelEdition } />
           : <button onClick={ this.toggleEditMode } >Edytuj</button> }
      </article>
    );
  }
}

export default Book;
