/**
 * Provide UI for shelf element
 */
import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = props => {
  
  /**
   * Return UI for the element
   */  
  return(<div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        { props.books.map( (book, index) => (
          <li key={index}><Book bookInfo={book} updateShelf={props.updateShelf}/></li>
        ))}
      </ol>
    </div>
  </div>);
}

/**
 * Define properties type
 */
Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default Shelf;