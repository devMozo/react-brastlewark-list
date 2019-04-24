import React from 'react';

import { Card } from '../../components/Card/Card';

const Background = require('assets/background.jpg');

export class Home extends React.Component {
  render() {
    return (
      <section className="Home">
        <div className="background background--fixed background--full-heigth">
          <img src={String(Background)} />
        </div>
        <header>
          <h2 className="home__header-title padding-2-left padding-1-top font-super-cell font-color-orange">
            {' '}
            Brastlewark's Village{' '}
          </h2>
        </header>
        <section>
          <Card withWhiteBackground withShadow />
        </section>
      </section>
    );
  }
}
