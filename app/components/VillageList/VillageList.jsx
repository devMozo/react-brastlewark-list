import { CitizenLandscape } from 'components/CitizenLandscape/CitizenLandscape';
import { Loading } from 'components/Loading/Loading';
import { VillageContext } from 'context/Village';
import React from 'react';

export const VillageList = () => {
  return (
    <section className="VillageList padding-2-left padding-3-right">
      <VillageContext.Consumer>
        {({ loading, citizens }) => (
          <React.Fragment>
            {loading ? (
              <Loading />
            ) : (
              <ul>
                {citizens &&
                  citizens.map((citizen, key) => <CitizenLandscape key={key} citizen={citizen} />)}
              </ul>
            )}
          </React.Fragment>
        )}
      </VillageContext.Consumer>
    </section>
  );
};
