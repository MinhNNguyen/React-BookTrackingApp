/**
 * Provide UI for each book in the shelf
 */
import React from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';


const Book = props => {
  
  const imageLink = props.bookInfo.imageLinks !== undefined ? props.bookInfo.imageLinks.thumbnail : 
    'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj1vLfkttzfAhVtFjQIHcJ7BOsQjRx6BAgBEAU&url=http%3A%2F%2Fwww.clker.com%2Fclipart-image-missing-1.html&psig=AOvVaw0snSgMUIG_K-8McjjHqsti&ust=1546976490702542';
  
  /**
   * Return UI for the element
   */
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, 
          backgroundImage: `url("${imageLink}")` }}></div>
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