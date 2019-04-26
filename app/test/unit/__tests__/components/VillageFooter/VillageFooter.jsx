import React from 'react';
import { VillageFooter } from 'components/VillageFooter/VillageFooter';
import { render } from 'enzyme';

describe('<VillageFooter />', () => {
  let villageFooter;

  beforeEach(() => {
    villageFooter = () => {
      return render(<VillageFooter />);
    };
  });
  it('Snapshotesting <VillageFooter />', () => {
    expect(villageFooter()).toMatchSnapshot();
  });
});
