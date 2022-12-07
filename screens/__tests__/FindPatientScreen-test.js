import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import FindPatient from '../FindPatientScreen';


test('FindPatientScreen snapShot', ()=> {
    const snap = renderer.create(<FindPatient/>).toJSON();

    expect(snap).toMatchSnapshot();
});