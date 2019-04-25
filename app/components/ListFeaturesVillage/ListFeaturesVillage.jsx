import React from 'react';
import { Loading } from 'components/Loading/Loading';

const ListFeaturesVillageItem = ({ title, value, color, loading, error }) => {
  if (error) {
    value = '?';
  }

  return (
    <section className="ListFeaturesVillageItem margin-2-x margin-3-top">
      <div
        className={`ListFeaturesVillageItem__circle ${color &&
          `ListFeaturesVillageItem--${color}`}`}
      >
        {loading ? (
          <Loading color={color} />
        ) : (
          <React.Fragment>
            <h2 className="font-super-cell margin-0-all">{value}</h2>
            <h4 className="font-bold margin-1-top margin-0-bottom">{title}</h4>
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

export const ListFeaturesVillage = ({ items, loading, error }) => {
  return (
    <section className="ListFeaturesVillage">
      {items &&
        items.map((item, key) => (
          <ListFeaturesVillageItem key={key} {...item} loading={loading} error={error} />
        ))}
    </section>
  );
};
