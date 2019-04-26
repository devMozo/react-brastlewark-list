import { VillageList } from 'components/VillageList/VillageList';
import { VillageContext } from 'context/Village';
import React from 'react';
import { citizens } from 'test/unit/__mocks__/citizens.json';
import { render } from 'enzyme';

describe('<VillageList />', () => {
  let context;
  let villageList;

  beforeEach(() => {
    context = {
      citizens: undefined,
      loading: undefined,
    };
    villageList = () => {
      return render(
        <VillageContext.Provider value={context}>
          <VillageList />
        </VillageContext.Provider>,
      );
    };
  });

  it('Snapshotesting completed <VillageList />', () => {
    context = {
      citizens: citizens,
      loading: false,
    };
    expect(villageList()).toMatchSnapshot();
  });

  it('Snapshotesting loading <VillageList />', () => {
    context = {
      citizens: citizens,
      loading: true,
    };
    expect(villageList()).toMatchSnapshot();
  });

  it('Snapshotesting <VillageList /> without props', () => {
    expect(villageList()).toMatchSnapshot();
  });
});
