import { Home } from 'containers/Home/Home';
import { render } from 'enzyme';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('<Home />', () => {
  let home;

  beforeEach(() => {
    home = () => {
      return render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>,
      );
    };
  });
  it('Snapshotesting <Home />', () => {
    expect(home()).toMatchSnapshot();
  });
});
