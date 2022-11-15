import React from 'react';
import { mount, shallow } from 'enzyme';
import {create} from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

//comprobamos si el componente Footer se ha montado
describe('<Header/>', () => {
  const header = shallow(<ProviderMock><Header /></ProviderMock>);
  test('Component Header render', () => {
    expect(header.length).toEqual(1);
  });

  test('Title render', () => {
    const header = mount(<ProviderMock><Header /></ProviderMock>);
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });

  test('Header snapshot', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
