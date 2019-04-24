import React from 'react';

export const Loading = ({ color }) => {
  return <div className={`Loading Loading--${color ? color : ''} margin-2-y`} />;
};
