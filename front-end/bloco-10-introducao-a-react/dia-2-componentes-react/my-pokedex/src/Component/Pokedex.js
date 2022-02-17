import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        { pokemon.map((especie) => <Pokemon pokemon = { especie } />) }
      </div>
    );
  }
}

export default  Pokedex;