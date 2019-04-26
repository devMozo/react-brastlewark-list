import { Card } from 'components/Card/Card';
import React from 'react';

const Background = require('assets/background.jpg');

export class Home extends React.PureComponent {
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
          <Card withWhiteBackground withShadow link={'/village/brastlewark'} />
        </section>
      </section>
    );
  }
}
