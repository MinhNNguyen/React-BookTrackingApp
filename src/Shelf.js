import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = props => { 
  return(<div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        { props.books.filter(book => book.shelf === props.title).map( (book, index) => (
          <Book key={index} index={index} bookInfo={book} shelf={props.title}/>
        ))}
      </ol>
    </div>
  </div>);
}

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};

export default Shelf;