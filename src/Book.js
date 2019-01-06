/**
 * Provide UI for each book in the shelf
 */
import React from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';


const Book = props => {
  
  /**
   * Return UI for the element
   */
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, 
          backgroundImage: `url("${props.bookInfo.imageLinks.thumbnail}")` }}></div>
        <ShelfChanger bookInfo={props.bookInfo} updateShelf={props.updateShelf}/>
      </div>
      <div className="book-title">{props.bookInfo.title}</div>
      <div className="book-authors">
		{ Array.isArray(props.bookInfo.authors) ? props.bookInfo.authors.join(', '): '' }
	  </div>
    </div>  
  );
};

/**
 * Define properties type
 */
Book.propTypes = {
  bookInfo: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default Book;