import { VillageContext } from 'context/Village';
import React from 'react';

const CitizenLandscapeFeatures = ({ items }) => {
  return (
    <section className="CitizenLandscapeFeatures">
      {items &&
        items.map(item => (
          <div className="CitizenLandscapeFeatures__item">
            <h4 className="font-color-whiteOrange"> {item.title} </h4>
            <p> {item.value} </p>
          </div>
        ))}
    </section>
  );
};

export class CitizenLandscape extends React.PureComponent {
  static contextType = VillageContext;

  render() {
    const { citizen } = this.props;
    const { onClickCitizen } = this.context;
    const features = [
      {
        title: 'Age',
        value: `${citizen.age}`,
      },
      {
        title: 'Weight',
        value: `${Math.round(citizen.weight)}kg.`,
      },
      {
        title: 'Height',
        value: `${Math.round(citizen.height)}cm.`,
      },
      {
        title: 'Hair Color',
        value: `${citizen.hair_color}`,
      },
    ];

    return (
      <li className="CitizenLandscape margin-1-bottom padding-1-bottom">
        <section className="CitizenLandscape-avatar">
          <img src={citizen.thumbnail} />
        </section>
        <section className="CitizenLandscape-name padding-2-x">
          <h3> {citizen.name} </h3>
        </section>
        <CitizenLandscapeFeatures items={features} />
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
