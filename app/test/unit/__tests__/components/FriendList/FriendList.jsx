import React from 'react';
import { FriendList } from 'components/FriendList/FriendList';
import { VillageContext } from 'context/Village';
import { render, mount } from 'enzyme';
import { citizens } from 'test/unit/__mocks__/citizens.json';

describe('<FriendList />', () => {
  let props;
  let friendList;
  const MOCKED_ON_CLICK_CITIZEN = jest.fn();

  beforeEach(() => {
    props = {
      list: [],
    };
    friendList = () => {
      return render(
        <VillageContext.Provider
          value={{
            onClickCitizen: MOCKED_ON_CLICK_CITIZEN,
          }}
        >
          <FriendList {...props} />
        </VillageContext.Provider>,
      );
    };
  });

  it('Snapshotesting completed <FriendList />', () => {
    props = {
      list: citizens,
    };
    expect(friendList()).toMatchSnapshot();
  });

  it('Snapshotesting <FriendList /> without props', () => {
    expect(friendList()).toMatchSnapshot();
  });

  it('check if the first friend is loaded', () => {
    props = {
      list: citizens,
    };

    expect(friendList().text()).toContain(citizens[0].name);
  });

  it('onClickCitizen gets called', () => {
    props = {
      list: citizens,
    };
    friendList = () => {
      return mount(
        <VillageContext.Provider
          value={{
            onClickCitizen: MOCKED_ON_CLICK_CITIZEN,
          }}
        >
          <FriendList {...props} />
        </VillageContext.Provider>,
      );
    };

    friendList()
      .find('.Friend h5')
      .map(friend => {
        friend.simulate('click');
      });

    expect(MOCKED_ON_CLICK_CITIZEN).toHaveBeenCalled();
  });
});
