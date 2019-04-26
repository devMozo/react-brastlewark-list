import { Village } from 'containers/Village/Village';
import { shallow } from 'enzyme';
import React from 'react';
import { citizens } from 'test/unit/__mocks__/citizens.json';

describe('<Village />', () => {
  let props;
  let village;
  const MOCK_NAME = 'Mocked Name';
  global.fetch = jest.fn(() => new Promise(resolve => resolve(citizens)));

  beforeEach(() => {
    props = {
      match: undefined,
    };
    village = () => {
      return shallow(<Village {...props} />);
    };
  });

  it('Snapshotesting completed <Village />', () => {
    props = {
      match: {
        params: {
          name: MOCK_NAME,
        },
      },
    };
    const mountedComponent = village();
    mountedComponent.update();

    expect(mountedComponent).toMatchSnapshot();
  });
});
