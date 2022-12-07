import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MonitorRecords from '../MonitorRecordScreen';


test('MonitorRecordScreen snapShot', ()=> {
    const snap = renderer.create(<MonitorRecords/>).toJSON();

    expect(snap).toMatchSnapshot();
});