import { VillageHeader } from 'components/VillageHeader/VillageHeader';
import { VillageContext } from 'context/Village';
import React from 'react';
import { render } from 'enzyme';
import { citizens } from 'test/unit/__mocks__/citizens.json';

describe('<VillageHeader />', () => {
  let props;
  let villageHeader;
  const MOCK_TITLE = 'Mocked title';

  beforeEach(() => {
    props = {
      title: undefined,
    };
    villageHeader = () => {
      return render(
        <VillageContext.Provider
          value={{
            citizens: citizens,
          }}
        >
          <VillageHeader {...props} />
        </VillageContext.Provider>,
      );
    };
  });

  it('Snapshotesting completed <VillageHeader />', () => {
    props = {
      title: MOCK_TITLE,
    };
    expect(villageHeader()).toMatchSnapshot();
  });

  it('Snapshotesting <VillageHeader /> without props', () => {
    expect(villageHeader()).toMatchSnapshot();
  });

  it('Check correct title', () => {
    props = {
      title: MOCK_TITLE,
    };
    expect(
      villageHeader()
        .find('.VillageHeader__title')
        .text(),
    ).toContain(MOCK_TITLE);
  });
});
