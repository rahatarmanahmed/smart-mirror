import React from 'react';
import later from 'later';
import moment from 'moment';

import forecast from './forecast';

// TODO: look these up by city name, also cache results
const latitude = 33.1972;
const longitude = -96.6397;

class Weather extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentWillMount() {
        this.timer = later.setInterval(this.updateWeather.bind(this),
            later.parse.text('every 15 minutes'), this);
        this.updateWeather();
    }

    componentWillUnmount() {
        this.timer.clear();
        this.timer = null;
    }

    updateWeather() {
        forecast(latitude, longitude)
        .then(weather => {
            this.setState({ weather });
        })
        .catch(err => console.error(err));
    }

    // Translate forecast.io's icon to weather-icon
    getIcon(icon) {
        switch(icon) {
            case 'clear-day': return 'wi wi-day-sunny';
            case 'clear-night': return 'wi wi-day-cloudy';
            case 'rain': return 'wi wi-rain';
            case 'snow': return 'wi wi-snow';
            case 'sleet': return 'wi wi-sleet';
            case 'wind': return 'wi wi-strong-wind';
            case 'fog': return 'wi wi-fog';
            case 'cloudy': return 'wi wi-cloudy';
            case 'partly-cloudy-day': return 'wi wi-day-cloudy';
            case 'partly-cloudy-night': return 'wi wi-night-cloudy';
            case 'hail': return 'wi wi-hail';
            case 'thunderstorm': return 'wi wi-thunderstorm';
            case 'tornado': return 'wi wi-tornado';
            case 'flood': return 'wi wi-flood';
            default: return 'wi wi-na';
        }
    }

    // Get the name of the day of the week, unless it's Today or Tomorrow
    getDayName(date) {
        const today = moment().startOf('day');
        date = moment(date).startOf('day');
        if(date.isSame(today)) return 'Today';
        if(date.isSame(today.add(1, 'day'))) return 'Tomorrow';
        return date.format('dddd');
    }

    render() {
        if(!this.state.weather) {
            return <p>Loading weather...</p>;
        }

        const { currently, daily } = this.state.weather;

        // TODO: show moon phase
        // TODO: show night icons at when sun is down
        // TODO: have changeable cities
        return <div className='weather'>
            <div className='city light'>McKinney</div>
            <div className='now'>
                <div className='temperature'>
                    <i className={this.getIcon(currently.icon)}></i> {Math.round(currently.temperature)}<sup className="unit">°F</sup>
                </div>
                <div className='summary'>
                    {currently.summary}
                </div>
            </div>
            <table className='later'><tbody>

                {daily.data.slice(0,5).map(
                    day => <tr className='day' key={day.time}>
                        <td className='day-name'>{this.getDayName(day.time * 1000)}</td>
                        <td><i className={this.getIcon(day.icon)}></i></td>
                        <td className='temperature'>
                            <span className='high'>{Math.round(day.temperatureMax)}</span>
                            <span className='temperature-separator light'>/</span>
                            <span className='low'>{Math.round(day.temperatureMin)}</span>
                        </td>
                    </tr>
                )}
            </tbody></table>
        </div>;
    }
}

export default Weather;
