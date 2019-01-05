import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf.js';
import SearchBook from './SearchBook.js';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.updateData()
  }

  updateShelf = (book, targetShelf) => {
    console.log(book);
    console.log(targetShelf);
    BooksAPI.update(book, targetShelf).then(response => {
      this.updateData()
    })
  }

  updateData = () => {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      })
    })  
  }

  render() {
    return (
      <div className="app"> 
        <Route path='/search' render={() => (
    	  <SearchBook  move={this.updateShelf} />
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf title='Currently Reading' 
          			   books={this.state.books.filter(book => book.shelf === 'Currently Reading')} 
					   move={this.updateShelf}/>
          		<Shelf title='Want to Read'
					   books={this.state.books.filter(book => book.shelf === 'Want to Read')}
					   move={this.updateShelf}/>
          		<Shelf title='Read'
					   books={this.state.books.filter(book => book.shelf === 'Read')}
					   move={this.updateShelf}/>
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
  }
}

export default BooksApp
