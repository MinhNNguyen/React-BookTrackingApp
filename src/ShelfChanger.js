import React from 'react';
import PropTypes from 'prop-types';

const shelfOptions = ['Currently Reading','Want to Read','Read', 'None'];


// TO DO generateOption does not work. Consider using diffrent option
const ShelfChanger = props => {
  return (<div className="book-shelf-changer">
    <select>
      <option value="move" disabled>Move to...</option>
      {shelfOptions.filter(o => o !== props.shelf).map(option => (
        <option key={option} value={option}>{option}</option> ))}
    </select>
  </div>);
}

ShelfChanger.propTypes = {
  shelf: PropTypes.string.isRequired,
};

export default ShelfChanger;
