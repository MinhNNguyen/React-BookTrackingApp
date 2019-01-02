import React from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

const Book = props => {
  return(
    <li id={props.index}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: props.bookInfo.backgroundImage }}></div>
          <ShelfChanger shelf={props.shelf}/>
        </div>
    	<div className="book-title">{props.bookInfo.title}</div>
        <div className="book-authors">{props.bookInfo.author}</div>
      </div>  
    </li>
  );
};

Book.propTypes = {
  index : PropTypes.number.isRequired,
  bookInfo: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
}

export default Book;
