import { HandlerError } from 'components/HandlerError/HandlerError';
import { VillageDrawer } from 'components/VillageDrawer/VillageDrawer';
import { VillageFooter } from 'components/VillageFooter/VillageFooter';
import { VillageHeader } from 'components/VillageHeader/VillageHeader';
import { VillageList } from 'components/VillageList/VillageList';
import { VillageContext } from 'context/Village';
import { getCitizens } from 'network/citizens';
import React from 'react';
import { Village } from 'containers/Village/Village';
import { render } from 'enzyme';

describe('<Village />', () => {
  let village;

  beforeEach(() => {
    village = () => {
      return render(<Village />);
    };
  });

  // it('Snapshotesting completed <Village />', () => {
  //   expect(village()).toMatchSnapshot();
  // });

  // it('Snapshotesting <Village /> without props', () => {
  //   expect(village()).toMatchSnapshot();
  // });
});
