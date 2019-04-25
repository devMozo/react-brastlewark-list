import React from 'react';

export const VillageDrawer = citizen => {
  return (
    <section className="VillageDrawer">
      <section className="VillageDrawer__unit">
        {citizen && (
          <React.Fragment>
            <header>
              <section className="VillageDrawer__top-bar">
                <button> Close </button>
              </section>
              <img src={citizen.thumbnail} />
            </header>
          </React.Fragment>
        )}
      </section>
    </section>
  );
};
