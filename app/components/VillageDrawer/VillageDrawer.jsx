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

const VillageDrawerFeatureItem = ({ title, value }) => {
  return (
    <section className="VillageDrawerFeatureItem">
      <h4 className="font-color-whiteOrange"> {title} </h4>
      <p> {value} </p>
    </section>
  );
};

const VillageDrawerFeature = ({ citizen }) => {
  const features = [
    {
      title: 'Name',
      value: citizen.name,
    },
    {
      title: 'Age',
      value: citizen.age,
    },
    {
      title: 'Weight',
      value: `${Math.round(citizen.weight)}kg`,
    },
    {
      title: 'Height',
      value: `${Math.round(citizen.height)}cm`,
    },
    {
      title: 'Hair Color',
      value: citizen.hair_color,
    },
    {
      title: 'Professions',
      value:
        (citizen.professions && citizen.professions.length) > 0
          ? citizen.professions.join(', ')
          : 'No profession',
    },
  ];

  return (
    <section className="VillageDrawerFeature padding-2-x padding-3-bottom">
      {features &&
        features.map((feature, key) => <VillageDrawerFeatureItem key={key} {...feature} />)}
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
