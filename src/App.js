/**
 * Main application file
 */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf.js';
import SearchBook from './SearchBook.js';

class BooksApp extends React.Component {
  
  /**
   * State that stored all the books on the shelves
   */
  state = {
    books: []
  };

  /**
   * Update data when all components are mounted
   */
  componentDidMount() {
    this.updateData();
  };

  /**
   * Update book to new shelf
   */
  updateShelf = (book, targetShelf) => {
    BooksAPI.update(book, targetShelf).then(response => {
      this.updateData();
    });
  };

  /**
   * Update the state based on the output from BooksAPI
   */
  updateData = () => {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  };

  /**
   * Generate UI based on respective router
   */
  render() {
    return (
      <div className="app"> 
        <Route path='/search' render={() => (
    	  <SearchBook  updateShelf={this.updateShelf} shelvedBooks={this.state.books} />
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>Book Tracking Applicaton</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf title='Currently Reading' 
          			   books={this.state.books.filter(book => book.shelf === 'currentlyReading')} 
					   updateShelf={this.updateShelf}/>
          		<Shelf title='Want to Read'
					   books={this.state.books.filter(book => book.shelf === 'wantToRead')}
					   updateShelf={this.updateShelf}/>
          		<Shelf title='Read'
					   books={this.state.books.filter(book => book.shelf === 'read')}
					   updateShelf={this.updateShelf}/>
              </div>
            </div>
			<div className="open-search">
              <Link 
                to='/search'>
                Add a book
              </Link>	
			</div>
            
          </div>
        )} />
      </div>
    )
  };
}

export default BooksApp;
