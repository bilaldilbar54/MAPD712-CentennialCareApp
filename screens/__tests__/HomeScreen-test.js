import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../HomeScreen';


test('HomeScreen snapShot', ()=> {
    const snap = renderer.create(<Home/>).toJSON();

    expect(snap).toMatchSnapshot();
});