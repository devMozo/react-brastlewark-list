import React from 'react';
import { Card } from 'components/Card/Card';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'enzyme';

describe('<Card />', () => {
  let props;
  const MOCK_LINK = '/link-test';
  const card = () => {
    return render(
      <BrowserRouter>
        <Card {...props} />
      </BrowserRouter>,
    );
  };

  beforeEach(() => {
    props = {
      withWhiteBackground: undefined,
      withShadow: undefined,
      link: undefined,
    };
  });

  it('Snapshotesting completed <Card />', () => {
    props = {
      withWhiteBackground: true,
      withShadow: true,
      link: MOCK_LINK,
    };
    expect(card()).toMatchSnapshot();
  });

  it('Snapshotesting <Card /> without props', () => {
    expect(card()).toMatchSnapshot();
  });

  it('Check if the link is loaded correctly', () => {
    props.link = MOCK_LINK;
    const aside = card().find(`a[href="${MOCK_LINK}"]`);

    expect(aside.length).toBe(1);
  });

  it('Has always an image', () => {
    const img = card().find('img');

    expect(img.length).toBe(1);
  });
});
