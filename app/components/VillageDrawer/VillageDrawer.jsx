import React from 'react';

export const VillageDrawer = ({ citizen, onClose }) => {
  return (
    <section className={`VillageDrawer${citizen ? '--active' : ''}`}>
      <section className="VillageDrawer__unit">
        {citizen && (
          <React.Fragment>
            <header>
              <section className="VillageDrawer__top-bar">
                <button onClick={onClose} className="padding-1-x padding-1-y">
                  {' '}
                  &#215;
                </button>
                <h4 className="padding-2-x padding-1-y margin-0-y"> {citizen.name} </h4>
              </section>
              <img className="VillageDrawer__image" src={citizen.thumbnail} />
            </header>
            <section />
          </React.Fragment>
        )}
      </section>
    </section>
  );
};
