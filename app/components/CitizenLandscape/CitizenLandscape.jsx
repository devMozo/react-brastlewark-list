import React from 'react';

export const CitizenLandscape = item => {
  return (
    <li className="CitizenLandscape margin-1-bottom padding-1-bottom">
      <section className="CitizenLandscape-avatar">
        <img src={item.thumbnail} />
      </section>
      <section className="CitizenLandscape-name padding-2-x">
        <h3> {item.name} </h3>
      </section>
      <section className="CitizenLandscape-features">
        <div className="CitizenLandscape-feature">
          <h4 className="font-color-whiteOrange"> Age </h4>
          <p> {item.age} </p>
        </div>
        <div className="CitizenLandscape-feature">
          <h4 className="font-color-whiteOrange"> Weight </h4>
          <p> {Math.round(item.weight)}kg. </p>
        </div>
        <div className="CitizenLandscape-feature">
          <h4 className="font-color-whiteOrange"> Height </h4>
          <p> {Math.round(item.height)}cm. </p>
        </div>
        <div className="CitizenLandscape-feature">
          <h4 className="font-color-whiteOrange"> Hair Color </h4>
          <p> {item.hair_color} </p>
        </div>
      </section>
      <section className="CitizenLandscape-details">
        <button className="font-medium font-color-blue"> Details </button>
      </section>
    </li>
  );
};
