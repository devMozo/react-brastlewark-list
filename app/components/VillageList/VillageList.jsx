import { CitizenLandscape } from 'components/CitizenLandscape/CitizenLandscape';
import { Loading } from 'components/Loading/Loading';
import { VillageContext } from 'context/Village';
import React from 'react';
import ReactProgressiveList from 'react-progressive-list';

export class VillageList extends React.PureComponent {
  static contextType = VillageContext;

  rowRenderer = index => {
    const { citizens } = this.context;

    return <CitizenLandscape key={index} citizen={citizens[index]} />;
  };

  render() {
    const { loading, citizens = [] } = this.context;

    return (
      <section className="VillageList padding-2-left padding-3-right">
        {loading ? (
          <Loading />
        ) : (
          citizens.length > 0 && (
            <ReactProgressiveList
              initialAmount={40}
              progressiveAmount={20}
              renderItem={this.rowRenderer}
              renderLoader={() => <Loading />}
              rowCount={citizens.length}
              useWindowScroll
            />
          )
        )}
      </section>
    );
  }
}
