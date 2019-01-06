/**
 * SearchBook Component
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Book from './Book';

class SearchBook extends Component {
  /**
   * Keeping local variable for booksBeingSearched and query
   */
  state = {
    searchedBooks: [],
    query: ''
  };

  /**
   * Update book based on the query being typed
   */
  searchBook = event => {
    this.setState({ query: event.target.value});
    if (this.state.query) {
      BooksAPI.search(this.state.query).then(result => {
        if (result.error) {
          this.setState({searchedBooks: [] });
        } else if (result) {
          this.updateBooks(result);
        }
      });
    } else {
      this.setState({searchedBooks: [] });
    }
  };

  /**
   * Update books and their shelves to display upon search
   */
  updateBooks = result => {
    const res = result;
    for (const book of res) {
      book.shelf = 'None';
      for (const shelvedBook of this.props.shelvedBooks) {
        if (shelvedBook.id === book.id) {
          book.shelf = shelvedBook.shelf;
        }
      }
    }  
    this.setState({ searchedBooks: res});
  };

  /**
   * Trigger the parent updateShelf when user select a shelf for a book
   */
  changeShelf = (book, targetShelf) => {
    this.props.updateShelf(book, targetShelf);
  };
  
  /**
   * Generate UI for SearchBook component
   */
  render() {
    return(<div className="search-books">
      <div className="search-books-bar">
        <div>
          <Link
            className="close-search"
            to='/'>
            Close
          </Link>	
        </div>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={this.searchBook}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.searchedBooks.map( (book, index) => (
            <Book key={index} bookInfo={book} updateShelf={this.changeShelf}/> 
  		  ))}
        </ol>
      </div>
    </div>);
  };
}

/**
 * Define properties type
 */
SearchBook.propTypes = {
  updateShelf: PropTypes.func.isRequired,
  shelvedBooks: PropTypes.array.isRequired
};

export default SearchBook;
