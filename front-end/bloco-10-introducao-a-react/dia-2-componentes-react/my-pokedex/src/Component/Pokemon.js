import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { 
      id,
      name,
      type,
      averageWeight: {
          value,
          measurementUnit,
      },
      image,
      moreInfo,
     } } = this.props;

     return (
       <li>
         <img src = { image } alt = { name }/>
         <p>
           <strong>{ name }</strong>
         </p>
         <p>{ id }</p>
         <p> { type } </p>
         <p> { value } { measurementUnit } </p>
         <p> { moreInfo } </p>
       </li>
     )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired,
};

export default Pokemon;