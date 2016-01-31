import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Weather from './weather';

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div className='container'>
            <div className='time-column'>
                <Clock />
            </div>
            <div className='info-column text-right'>
                <Weather />
            </div>
        </div>;
    }
}
ReactDOM.render(<App />, document.querySelector('#content'));
