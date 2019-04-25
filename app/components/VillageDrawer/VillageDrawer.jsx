import React from 'react';
import { VillageContext } from 'context/Village';
import { getFullCitizens } from 'utils/citizens';
import { FriendList } from 'components/FriendList/FriendList';

const VillageDrawerHeader = ({ title, img, onClose }) => {
  return (
    <header className="VillageDrawerHeader">
      <section className="VillageDrawerHeader__top-bar">
        <button onClick={onClose} className="padding-1-x padding-1-y">
          {' '}
          &#215;
        </button>
        <h4 className="padding-2-x padding-1-y margin-0-y"> {title} </h4>
      </section>
      <img className="VillageDrawerHeader__image" src={img} />
    </header>
  );
};

const VillageDrawerFeature = ({ citizen }) => {
  return (
    <section className="VillageDrawerFeature padding-2-x padding-3-bottom">
      <section>
        <h4 className="font-color-whiteOrange"> Name </h4>
        <p> {citizen.name} </p>
      </section>
      <div>
        <h4 className="font-color-whiteOrange"> Age </h4>
        <p> {citizen.age} </p>
      </div>
      <div>
        <h4 className="font-color-whiteOrange"> Weight </h4>
        <p> {Math.round(citizen.weight)}kg. </p>
      </div>
      <div>
        <h4 className="font-color-whiteOrange"> Height </h4>
        <p> {Math.round(citizen.height)}cm. </p>
      </div>
      <div>
        <h4 className="font-color-whiteOrange"> Hair Color </h4>
        <p> {citizen.hair_color} </p>
      </div>
      <div>
        <h4 className="font-color-whiteOrange"> Professions </h4>
        <p> {citizen.professions.length > 0 ? citizen.professions.join(', ') : 'No profession'} </p>
      </div>
      <div>
        <h4 className="font-color-whiteOrange"> Friends </h4>
        <VillageContext.Consumer>
          {({ citizens }) => {
            const fullFriends = getFullCitizens(citizens, citizen.friends);

            return fullFriends.length > 0 ? <FriendList list={fullFriends} /> : <p> No friends </p>;
          }}
        </VillageContext.Consumer>
      </div>
    </section>
  );
};

export const VillageDrawer = ({ citizen, onClose }) => {
  return (
    <section className={`VillageDrawer${citizen ? '--active' : ''}`}>
      <section className="VillageDrawer__unit">
        {citizen && (
          <React.Fragment>
            <VillageDrawerHeader onClose={onClose} title={citizen.name} img={citizen.thumbnail} />
            <VillageDrawerFeature citizen={citizen} />
          </React.Fragment>
        )}
      </section>
    </section>
  );
};
