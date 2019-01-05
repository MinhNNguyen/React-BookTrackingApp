import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = props => { 
  return(<div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        { props.books.map( (book, index) => (
          <li key={index}><Book bookInfo={book} shelf={props.title} move={props.move}/></li>
        ))}
      </ol>
    </div>
  </div>);
}

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  move: PropTypes.func.isRequired,
};

export default Shelf;