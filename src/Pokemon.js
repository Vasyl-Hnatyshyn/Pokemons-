import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { pokemonId } = this.props;

    return (
      <div className="individualCard ">
        <img src={`img/${pokemonId.id}.jpg`} alt={pokemonId.name} />

        <p>
          {pokemonId.name} #00{pokemonId.id}
        </p>

        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>{pokemonId.type}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Attack</td>
              <td>{pokemonId.attack}</td>
            </tr>
            <tr>
              <td>Defense</td>
              <td>{pokemonId.defense}</td>
            </tr>

            <tr>
              <td>HP</td>
              <td>{pokemonId.HP}</td>
            </tr>
            <tr>
              <td>SP Attack</td>
              <td>{pokemonId.SP_Attack}</td>
            </tr>
            <tr>
              <td>SP Defense</td>
              <td>{pokemonId.SP_Defense}</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>{pokemonId.Speed}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{pokemonId.Weight}</td>
            </tr>
            <tr>
              <td>totalMoves</td>
              <td>{pokemonId.totalMoves}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Pokemon;
