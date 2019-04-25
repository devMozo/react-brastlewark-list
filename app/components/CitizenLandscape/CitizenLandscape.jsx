import { VillageContext } from 'context/Village';
import React from 'react';

export class CitizenLandscape extends React.PureComponent {
  static contextType = VillageContext;

  render() {
    const { citizen } = this.props;
    const { onClickCitizen } = this.context;

    return (
      <li className="CitizenLandscape margin-1-bottom padding-1-bottom">
        <section className="CitizenLandscape-avatar">
          <img src={citizen.thumbnail} />
        </section>
        <section className="CitizenLandscape-name padding-2-x">
          <h3> {citizen.name} </h3>
        </section>
        <section className="CitizenLandscape-features">
          <div className="CitizenLandscape-feature">
            <h4 className="font-color-whiteOrange"> Age </h4>
            <p> {citizen.age} </p>
          </div>
          <div className="CitizenLandscape-feature">
            <h4 className="font-color-whiteOrange"> Weight </h4>
            <p> {Math.round(citizen.weight)}kg. </p>
          </div>
          <div className="CitizenLandscape-feature">
            <h4 className="font-color-whiteOrange"> Height </h4>
            <p> {Math.round(citizen.height)}cm. </p>
          </div>
          <div className="CitizenLandscape-feature">
            <h4 className="font-color-whiteOrange"> Hair Color </h4>
            <p> {citizen.hair_color} </p>
          </div>
        </section>
        <section className="CitizenLandscape-details">
          <button className="font-medium font-color-blue" onClick={() => onClickCitizen(citizen)}>
            {' '}
            Details{' '}
          </button>
        </section>
      </li>
    );
  }
}
