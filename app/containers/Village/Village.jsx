import React from 'react';
import { ListFeaturesVillage } from 'components/ListFeaturesVillage/ListFeaturesVillage';

const Background = require('assets/background.jpg');

const VillageHeader = ({ title = '' }) => {
  const features = [
    {
      title: 'Population',
      value: 20,
      color: 'orange',
    },
    {
      title: 'Best Work',
      value: 20,
      color: 'blue',
    },
    {
      title: 'Average Year',
      value: 40,
      color: 'green',
    },
  ];

  return (
    <header className="VillageHeader">
      <div className="background">
        <img src={String(Background)} />
      </div>
      <header>
        <h1 className="village__header-title padding-2-left padding-1-top font-super-cell font-color-orange">
          {' '}
          {title}'s Village{' '}
        </h1>
      </header>
      <section>
        <ListFeaturesVillage items={features} />
      </section>
    </header>
  );
};

export class Village extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <section className="Village">
        <VillageHeader title={match.params.name} />
      </section>
    );
  }
}
