import React from 'react';
import { VillageContext } from 'context/Village';
import { getFullCitizens } from 'utils/citizens';
import { FriendList } from 'components/FriendList/FriendList';
import { VillageDrawer } from 'components/VillageDrawer/VillageDrawer';
import * as citizen from 'test/unit/__mocks__/citizen.json';
import { render, mount } from 'enzyme';

describe('<VillageDrawer />', () => {
  let props;
  let villageDrawer;
  const MOCK_ON_CLOSE = jest.fn();

  beforeEach(() => {
    props = {
      citizen: undefined,
      onClose: undefined,
    };
    villageDrawer = () => {
      return render(<VillageDrawer {...props} />);
    };
  });

  it('Snapshotesting completed <VillageDrawer />', () => {
    props = {
      citizen: citizen,
      onClose: MOCK_ON_CLOSE,
    };
    expect(villageDrawer()).toMatchSnapshot();
  });

  it('Snapshotesting <VillageDrawer /> without props', () => {
    expect(villageDrawer()).toMatchSnapshot();
  });

  it('Check that every feature must be displayed on the <VillageDrawerFeature />', () => {
    props = {
      citizen: citizen,
    };
    const features = [
      citizen.name,
      citizen.age,
      citizen.weight,
      citizen.height,
      citizen.hair_color,
    ];

    villageDrawer = () => {
      return mount(<VillageDrawer {...props} />);
    };

    villageDrawer()
      .find('.VillageDrawerFeatureItem')
      .forEach(item => {
        features.includes(item.text());
      });
  });

  it('Check <VillageDrawerHeader /> has correct values', () => {
    props = {
      citizen: citizen,
      onClose: MOCK_ON_CLOSE,
    };
    villageDrawer = () => {
      return mount(<VillageDrawer {...props} />);
    };

    const header = villageDrawer().find('.VillageDrawerHeader');
    header.find('button').simulate('click');

    expect(MOCK_ON_CLOSE).toHaveBeenCalled();
    expect(header.find('h4').text()).toContain(citizen.name);
    expect(header.find('img').prop('src')).toEqual(citizen.thumbnail);
  });
});
