import React from 'react';
import { ListFeaturesVillage } from 'components/ListFeaturesVillage/ListFeaturesVillage';
import { getCitizens } from 'network/citizens';
import { CitizenLandscape } from 'components/CitizenLandscape/CitizenLandscape';
import { Loading } from 'components/Loading/Loading';
import { HandlerError } from 'components/HandlerError/HandlerError';
import { getBestWork, getAverageAge } from 'utils/citizens';

const Background = require('assets/background.jpg');

const VillageHeader = ({ title = '', citizens = [], loading, error }) => {
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
        <h1 className="village__header-title padding-2-left padding-1-top font-super-cell font-color-orange">
          {' '}
          {title}'s Village{' '}
        </h1>
      </header>
      <section>
        <ListFeaturesVillage items={features} loading={loading} error={error} />
      </section>
    </header>
  );
};

const VillageCenterColumn = ({ items, loading }) => {
  return (
    <section className="VillageCenterColumn padding-2-left padding-3-right">
      {loading ? (
        <Loading />
      ) : (
        <ul>{items && items.map((item, key) => <CitizenLandscape key={key} {...item} />)}</ul>
      )}
    </section>
  );
};

const VillageRightColumn = () => {
  return (
    <section className="VillageRightColumn">
      <header>
        <img src="" />
      </header>
    </section>
  );
};

const VillageFooter = () => {
  return (
    <footer className="VillageFooter padding-2-y margin-2-top">
      <h5> by Nicolas Mozo </h5>{' '}
    </footer>
  );
};

export class Village extends React.PureComponent {
  state = {
    citizens: [],
    error: false,
    loading: true,
  };

  // To avoid the redundant setState when the component did mount
  retryGetCitizenFromServer = () => {
    this.setState({
      error: false,
      loading: true,
    });
    this.getCitizensFromServer();
  };

  getCitizensFromServer = () => {
    getCitizens()
      .then(citizens => {
        this.setState({
          citizens,
          error: false,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({
          error: true,
          loading: false,
        });
      });
  };

  componentDidMount() {
    this.getCitizensFromServer();
  }

  render() {
    const { match } = this.props;
    const { citizens, error, loading } = this.state;
    const villageName = match.params.name;
    const arrayCitizens = citizens && citizens.Brastlewark;

    return (
      <section className="Village">
        <VillageHeader
          citizens={arrayCitizens}
          title={villageName}
          loading={loading}
          error={error}
        />
        <h1> {villageName}'s Citizens </h1>
        {error && (
          <HandlerError
            error="We couldn't load the data from the server"
            action={() => this.retryGetCitizenFromServer()}
          />
        )}
        {citizens && (
          <React.Fragment>
            <VillageCenterColumn loading={loading} items={arrayCitizens} />
            <VillageRightColumn />
          </React.Fragment>
        )}
        <VillageFooter />
      </section>
    );
  }
}
