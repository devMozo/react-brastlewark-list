import React from 'react';

export const HandlerError = ({ error, action }) => {
  return (
    <section className="HandlerError">
      <p> {error} </p>
      {action && <button onClick={action}> Reload </button>}
    </section>
  );
};
