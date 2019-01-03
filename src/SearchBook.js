import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import Book from './Book';

class SearchBook extends Component {
  state = {
    searchResult: [],
  };

  handleChange = event => {
    event.preventDefault();
    const query = event.target.value;
    BooksAPI.search(query).then(result => {
      if (!result || result.error) {
        this.setState({ searchResult: [],
        });
        return
      }
      this.setState({ searchResult: result});
    })
  }
  
  render() {
    return(<div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick=''>Close</a>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.searchResult.map( (book, index) => (
            <Book key={index} bookInfo={book} shelf='None'/> 
  		  ))}
        </ol>
      </div>
    </div>);
  };
}

SearchBook.propTypes = {
};

export default SearchBook;
