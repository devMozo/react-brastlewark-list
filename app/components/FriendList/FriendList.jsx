import React from 'react';
import { VillageContext } from 'context/Village';

const Friend = friend => {
  return (
    <article className="Friend">
      <img src={friend.thumbnail} />
      <VillageContext.Consumer>
        {({ onClickCitizen }) => (
          <h5 onClick={() => onClickCitizen(friend)} className="padding-1-x">
            {' '}
            {friend.name}{' '}
          </h5>
        )}
      </VillageContext.Consumer>
    </article>
  );
};

export const FriendList = ({ list }) => {
  return (
    <section className="FriendList">
      {list && list.map((friend, key) => <Friend key={key} {...friend} />)}
    </section>
  );
};
