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

// Cordova specific stuff
document.addEventListener('deviceready', () => {
    // Enable insomnia cordova plugin
    if(window.plugins && window.plugins.insomnia) {
        window.plugins.insomnia.keepAwake(
            () => console.log('Insomnia plugin enabled'),
            err => console.log('Failed to enable insomnia plugin:', err)
        );
    }

    // Enable fullscreen cordova plugin
    if(window.AndroidFullScreen) {
        window.AndroidFullScreen.immersiveMode(
            () => console.log('Fullscreen plugin enabled'),
            err => console.log('Failed to enable fullscreen plugin:', err)
        );
    }
});
