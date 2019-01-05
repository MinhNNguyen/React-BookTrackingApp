import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Book from './Book';

class SearchBook extends Component {
  state = {
    searchResult: [],
    query: '',
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ query: event.target.value});
    BooksAPI.search(this.state.query).then(result => {
      if (!result || result.error) {
        this.setState({ searchResult: [],
        });
      }
      this.setState({ searchResult: result});
    })
  }
  
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
          <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.searchResult.map( (book, index) => (
            <Book key={index} bookInfo={book} shelf='None' move={this.props.move}/> 
  		  ))}
        </ol>
      </div>
    </div>);
  };
}

SearchBook.propTypes = {
  move: PropTypes.func.isRequired,
};

export default SearchBook;
