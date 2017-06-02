# Smart Mirror

[![Greenkeeper badge](https://badges.greenkeeper.io/rahatarmanahmed/smart-mirror.svg)](https://greenkeeper.io/)

My smart mirror inspired by [evancohen](https://github.com/evancohen/smart-mirror), but running as a static web page to be run on an Android tablet.

TODO: screenshots

# Setting up your own

## API keys

You'll need a forecast.io api key. You can get one free [here](https://developer.forecast.io/register). Copy the `.env` file to `.env.local`, then edit it to add your api key. It should look like this:

```env
# API Keys
FORECAST_API_KEY=[your API key here]
```

Next run the following to build the webpage

```sh
npm install
npm run build
```

This will build the app to the `www/` directory. If you just want a web app, you can stop here, you're done!

If you want an android app, you'll need to use Cordova:

```sh
# if you haven't installed cordova
npm install -g cordova

cordova prepare
cordova build
```

This will build an .apk for your android device. If you have one connected and accessible via adb, you can run `cordova run android --device` to install the app.

# Development

Running `npm start` will build the app, start a watch on the source files, and open a browser pointing to a live-reload server of the app. Handy for hacking fast!
