import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../LoginScreen';


test('LoginScreen snapShot', ()=> {
    const snap = renderer.create(<Login/>).toJSON();

    expect(snap).toMatchSnapshot();
});