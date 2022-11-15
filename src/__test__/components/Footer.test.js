import React from 'react';
import { mount } from 'enzyme';
import {create} from 'react-test-renderer';
import Footer from '../../components/Footer';

//comprobamos si el componente Footer se ha montado
describe('<Footer/>', () => {
  const footer = mount(<Footer />);
  test('Component Footer render', () => {
    expect(footer.length).toEqual(1);
  });

  test('render del título', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer snapshot', () => {
  test('comprobar ui de footer', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
