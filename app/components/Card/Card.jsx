import React from 'react';
import { Link } from 'react-router-dom';
const Warrior = require('assets/warrior.png');

export const CardDescription = ({ link = '', title = '', children }) => {
  return (
    <section className="CardDescription">
      <h2> {title} </h2>
      <p className="padding-2-x padding-1_5-bottom"> {children} </p>
      <Link className="padding-1-all font-medium" to={link}>
        Go to the village!
      </Link>
    </section>
  );
};

export const Card = ({ withWhiteBackground, withShadow }) => {
  return (
    <article
      className={`Card ${withWhiteBackground && 'card--white-background'} ${withShadow &&
        'card--shadow'}`}
    >
      <header>
        <img src={String(Warrior)} />
      </header>
      <CardDescription link={'/village/brastlewark'} title="Brastlewark">
        Brastlewark is an almost exclusively gnomish city in eastern Cheliax, located on the western
        edge of the Aspodell Mountains, at the head of the Brastle River. It is believed to be the
        largest gnome settlement in the Inner Sea region, perhaps even in the entire world.
      </CardDescription>
    </article>
  );
};
