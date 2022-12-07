import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AddPatients from '../AddPatients';


test('AddPatients snapShot', ()=> {
    const snap = renderer.create(<AddPatients/>).toJSON();

    expect(snap).toMatchSnapshot();
});