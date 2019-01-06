/**
 * Provide UI and handle event for user to move books to different shelf
 */
import React from 'react';
import PropTypes from 'prop-types';

const ShelfChanger = props => {
  
  /**
   * Calling the updateShelf event being passed from parent class when people select
   * shelf to move the book to
   */
  const updateShelf = event => {
    props.updateShelf(props.bookInfo, event.target.value); 
  };
  
  /**
   * Return UI for the element
   */
  return (<div className="book-shelf-changer">
    <select value={props.bookInfo.shelf} onChange={updateShelf}>
	  <option value="move" disabled>Move to...</option>
	  <option value="currentlyReading">Currently Reading</option>
	  <option value="wantToRead">Want to Read</option>
	  <option value="read">Read</option>
	  <option value="none">None</option>
	</select>
  </div>);
}

/**
 * Define properties type
 */
ShelfChanger.propTypes = {
  bookInfo: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default ShelfChanger;