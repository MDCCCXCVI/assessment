import React from 'react';
import 'babel-polyfill';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

import App from '../app/views/App.jsx';

describe('<App />', () => {
  it('should load', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).to.equal(1);
  });
});
