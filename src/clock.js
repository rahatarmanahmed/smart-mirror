import React from 'react';
import moment from 'moment';
import later from 'later';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: moment()
        };

    }
    componentWillMount() {
        this.timer = later.setInterval(this.updateTime.bind(this),
            later.parse.text('every 1 second'));
    }

    componentWillUnmount() {
        this.timer.clear();
        this.timer = null;
    }

    updateTime() {
        this.setState({ time: moment() });
    }

    render() {
        // Blink every second
        var blinkClass = this.state.time.get('second') % 2 === 0 ? 'hide' : '';

        return <div className='clock'>
            <div className='date light'>
                {this.state.time.format('LL')}
            </div>
            <div className='time'>
                <span>{this.state.time.format('hh')}</span>
                <span className={blinkClass}>:</span>
                <span>{this.state.time.format('mm')}</span>
            </div>
        </div>;
    }
}

export default Clock;
