import { HandlerError } from 'components/HandlerError/HandlerError';
import { VillageDrawer } from 'components/VillageDrawer/VillageDrawer';
import { VillageFooter } from 'components/VillageFooter/VillageFooter';
import { VillageHeader } from 'components/VillageHeader/VillageHeader';
import { VillageList } from 'components/VillageList/VillageList';
import { VillageContext } from 'context/Village';
import { getCitizens } from 'network/citizens';
import React from 'react';

export class Village extends React.PureComponent {
  state = {
    citizens: [],
    citizenToShow: undefined,
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
    const { citizens, error, loading, citizenToShow } = this.state;
    const villageName = match.params.name;
    const arrayCitizens = citizens && citizens.Brastlewark;

    return (
      <section className="Village">
        <VillageContext.Provider
          value={{
            citizens: arrayCitizens,
            loading,
            error,
            onClickCitizen: citizen => {
              this.setState({
                citizenToShow: citizen,
              });
            },
          }}
        >
          <VillageHeader title={villageName} />
          <h1> {villageName}'s Citizens </h1>
          {error && (
            <HandlerError
              error="We couldn't load the data from the server"
              action={() => this.retryGetCitizenFromServer()}
            />
          )}
          {citizens && (
            <React.Fragment>
              <VillageDrawer
                citizen={citizenToShow}
                onClose={() =>
                  this.setState({
                    citizenToShow: undefined,
                  })
                }
              />
              <VillageList />
            </React.Fragment>
          )}
          <VillageFooter />
        </VillageContext.Provider>
      </section>
    );
  }
}
