import React, { Component } from 'react';
import './App.css';
import { getBooksData, setBookData } from './booksData';

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
    this.cancelEdition = this.cancelEdition.bind(this);
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
    setBookData(book);
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
        <dl>
          <input type="hidden" name="id" data={ this.props.id } />
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

class EditionButtons extends Component {
  render() {
    return (
      <div>
        <button onClick={ this.props.saveAction } >Zapisz</button>
        <button onClick={ this.props.cancelAction } >Anuluj</button>
      </div>
    )
  }
}

class Row extends Component {
  render() {
    return (
      <div>
        <dt>{ this.props.title }</dt>
        { this.props.editMode ? (<EditableCell name={ this.props.name } value={ this.props.data } handleChange={ this.props.handleChange } />) 
          : (<Cell value={ this.props.data } />) }
      </div>
    );
  }
}

class Cell extends Component {
  render() {
    return (
      <dd>{ this.props.value }</dd>
    );
  } 
}

class EditableCell extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value || ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });

    this.props.handleChange(e);
  }

  render() {
    return (
      <dd>
        <input type="text" name={ this.props.name } value={ this.state.value } onChange={ this.handleChange } />
      </dd>
    );
  }
}

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
