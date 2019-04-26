import { VillageContext } from 'context/Village';
import { CitizenLandscape } from 'components/CitizenLandscape/CitizenLandscape';
import { render, mount } from 'enzyme';
import React from 'react';
import * as citizen from 'test/unit/__mocks__/citizen.json';

describe('<CitizenLandscape />', () => {
  let props;
  let citizenLandscape;
  let MOCKED_ON_CLICK_CITIZEN = jest.fn();

  beforeEach(() => {
    props = {
      citizen: undefined,
    };
    citizenLandscape = () => {
      return render(
        <VillageContext.Provider
          value={{
            onClickCitizen: MOCKED_ON_CLICK_CITIZEN,
          }}
        >
          <CitizenLandscape {...props} />
        </VillageContext.Provider>,
      );
    };
  });

  it('Snapshotesting completed <CitizenLandscape />', () => {
    props = {
      citizen: citizen,
    };
    expect(citizenLandscape()).toMatchSnapshot();
  });

  it('<CitizenLandscape /> without props', () => {
    expect(citizenLandscape().empty()).toBeTruthy();
  });

  it('Check that data was well inserted', () => {
    props = {
      citizen,
    };
    const wrapper = citizenLandscape();

    expect(wrapper.find(`.CitizenLandscape-avatar img[src='${citizen.thumbnail}']`)).toBeDefined();
    expect(
      wrapper
        .find(`.CitizenLandscape-name`)
        .text()
        .trim(),
    ).toBe(citizen.name);
    expect(wrapper.text()).toContain(citizen.age);
    expect(wrapper.text()).toContain(citizen.hair_color);
  });

  it('onClickCitizen gets called', () => {
    props = {
      citizen,
    };
    citizenLandscape = () => {
      return mount(
        <VillageContext.Provider
          value={{
            onClickCitizen: MOCKED_ON_CLICK_CITIZEN,
          }}
        >
          <CitizenLandscape {...props} />
        </VillageContext.Provider>,
      );
    };

    citizenLandscape()
      .find('.CitizenLandscape-details button')
      .simulate('click');

    expect(MOCKED_ON_CLICK_CITIZEN).toHaveBeenCalled();
  });
});
