import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Shelf from './Shelf.js';
import SearchBook from './SearchBook.js';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [
      {
        title: 'To Kill a Mockingbird',
        authors: ['Harper Lee',],
        imageLinks: {thumbnail: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'},
        shelf: 'Currently Reading'
      },
      {
        title: '1776',
        authors: ['David McCullough'],
        imageLinks: {thumbnail: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api' },
        shelf: 'Want to Read',
      },
    ],
  }

  move = args => {
    const { bookInfo, targetShelf} = args;
    const adjustedBooks = this.state.books.map(book => {
      if (book === bookInfo)
        book.shelf = targetShelf
    })
    this.setState({ books: adjustedBooks});
  }

  render() {
    return (
      <div className="app"> 
        <Route path='/search' render={({ history }) => (
    	  <SearchBook />
          
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf title='Currently Reading' books={this.state.books} move={this.move}/>
          		<Shelf title='Want to Read' books={this.state.books}  move={this.move}/>
          		<Shelf title='Read' books={this.state.books}  move={this.move}/>
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
