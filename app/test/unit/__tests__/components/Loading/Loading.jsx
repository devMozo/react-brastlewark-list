import React from 'react';
import { Loading } from 'components/Loading/Loading';
import { render } from 'enzyme';

describe('<Loading />', () => {
  let props;
  let loading;

  beforeEach(() => {
    props = {
      color: undefined,
    };
    loading = () => {
      return render(<Loading {...props} />);
    };
  });

  it('Snapshotesting completed <Loading />', () => {
    props = {
      color: 'red',
    };
    expect(loading()).toMatchSnapshot();
  });

  it('Snapshotesting <Loading /> without props', () => {
    expect(loading()).toMatchSnapshot();
  });
});
