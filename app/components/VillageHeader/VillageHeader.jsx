import { ListFeaturesVillage } from 'components/ListFeaturesVillage/ListFeaturesVillage';
import { VillageContext } from 'context/Village';
import React from 'react';
import { getAverageAge, getBestWork } from 'utils/citizens';

const Background = require('assets/background.jpg');

export class VillageHeader extends React.PureComponent {
  static contextType = VillageContext;

  render() {
    const { title = '' } = this.props;
    const { citizens = [], loading, error } = this.context;
    const bestWork = getBestWork(citizens);
    const features = [
      {
        title: 'Total Citizens',
        value: citizens.length,
        color: 'orange',
      },
      {
        title: bestWork && bestWork.value,
        value: bestWork && bestWork.total,
        color: 'blue',
      },
      {
        title: 'Average Year',
        value: getAverageAge(citizens),
        color: 'green',
      },
    ];

    return (
      <header className="VillageHeader">
        <div className="background">
          <img src={String(Background)} />
        </div>
        <header>
          <h1 className="VillageHeader__title padding-2-left padding-1-top font-super-cell font-color-orange">
            {' '}
            {title}'s Village{' '}
          </h1>
        </header>
        <section>
          <ListFeaturesVillage items={features} loading={loading} error={error} />
        </section>
      </header>
    );
  }
}
