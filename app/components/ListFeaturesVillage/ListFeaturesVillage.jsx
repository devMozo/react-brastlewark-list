import React from 'react';

const ListFeaturesVillageItem = ({ title, value, color }) => {
  return (
    <section className="ListFeaturesVillageItem margin-2-x margin-3-top">
      <div
        className={`ListFeaturesVillageItem__circle ${color &&
          `ListFeaturesVillageItem--${color}`}`}
      >
        <h2 className="font-super-cell margin-0-all">{value}</h2>
        <h4 className="font-bold margin-1-top margin-0-bottom">{title}</h4>
      </div>
    </section>
  );
};

export const ListFeaturesVillage = ({ items }) => {
  return (
    <section className="ListFeaturesVillage">
      {items && items.map(item => <ListFeaturesVillageItem {...item} />)}
    </section>
  );
};
