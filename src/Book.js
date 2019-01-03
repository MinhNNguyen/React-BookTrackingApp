import React from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

const Book = props => {
  
  const move = targetShelf => {
  	props.move(props.bookInfo, targetShelf);
  };
  
  return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.bookInfo.imageLinks.thumbnail}")` }}></div>
          <ShelfChanger move={move} shelf={props.shelf}/>
        </div>
    	<div className="book-title">{props.bookInfo.title}</div>
        <div className="book-authors">
		  { 
            props.bookInfo.authors.map(author => (<p>{author}</p>))
          }
		</div>
      </div>  
  );
};

Book.propTypes = {
  bookInfo: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  move: PropTypes.func.isRequired,
}

export default Book;