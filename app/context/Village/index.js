import React from 'react';

export const VillageContext = React.createContext({
  citizens: [],
  loading: false,
  error: false,
  onClickCitizen: () => '',
});
