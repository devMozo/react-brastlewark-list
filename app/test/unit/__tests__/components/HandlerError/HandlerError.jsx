import React from 'react';
import { render, mount } from 'enzyme';
import { HandlerError } from 'components/HandlerError/HandlerError';

describe('<HandlerError />', () => {
  let props;
  let handlerError;
  const MOCK_ACTION = jest.fn();
  const MOCK_ERROR = 'Mocked error';

  beforeEach(() => {
    props = {
      error: undefined,
      action: undefined,
    };
    handlerError = () => {
      return render(<HandlerError {...props} />);
    };
  });

  it('Snapshotesting completed <HandlerError />', () => {
    props = {
      error: MOCK_ERROR,
      action: MOCK_ACTION,
    };
    expect(handlerError()).toMatchSnapshot();
  });

  it('Snapshotesting <HandlerError /> without props', () => {
    expect(handlerError()).toMatchSnapshot();
  });

  it('error is correctly loaded', () => {
    props.error = MOCK_ERROR;
    expect(handlerError().text()).toContain(MOCK_ERROR);
  });

  it('action is well triggered', () => {
    props = {
      error: MOCK_ERROR,
      action: MOCK_ACTION,
    };
    handlerError = () => {
      return mount(<HandlerError {...props} />);
    };

    handlerError()
      .find('button')
      .simulate('click');

    expect(MOCK_ACTION).toHaveBeenCalled();
  });
});
