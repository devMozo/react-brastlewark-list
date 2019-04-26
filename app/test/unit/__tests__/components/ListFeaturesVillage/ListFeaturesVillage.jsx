import React from 'react';
import { ListFeaturesVillage } from 'components/ListFeaturesVillage/ListFeaturesVillage';
import { render, mount } from 'enzyme';
import { features } from 'test/unit/__mocks__/featuresVillage.json';

describe('<ListFeaturesVillage />', () => {
  let props;
  let listFeaturesVillage;

  beforeEach(() => {
    props = {
      items: undefined,
      loading: undefined,
      error: undefined,
    };
    listFeaturesVillage = () => {
      return render(<ListFeaturesVillage {...props} />);
    };
  });

  it('Snapshotesting completed <ListFeaturesVillage />', () => {
    props = {
      items: features,
      loading: false,
      error: false,
    };
    expect(listFeaturesVillage()).toMatchSnapshot();
  });
  it('Snapshotesting loading <ListFeaturesVillage />', () => {
    props = {
      items: features,
      loading: true,
      error: false,
    };
    expect(listFeaturesVillage()).toMatchSnapshot();
  });

  it('Snapshotesting <ListFeaturesVillage /> without props', () => {
    expect(listFeaturesVillage()).toMatchSnapshot();
  });

  it("if it has error, display an '?' in the value's section", () => {
    props = {
      items: features,
      loading: false,
      error: true,
    };

    listFeaturesVillage = () => {
      return mount(<ListFeaturesVillage {...props} />);
    };

    listFeaturesVillage()
      .find('.ListFeaturesVillageItem h2')
      .forEach(item => {
        expect(item.text()).toContain('?');
      });
  });
});
