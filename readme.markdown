# Smart Mirror

My smart mirror inspired by [evancohen](https://github.com/evancohen/smart-mirror), but running as a static web page to be run on an Android tablet.

TODO: screenshots

# Setting up your own

TODO: write a better guide.

In the meantime, if you know what you're doing, put the API keys requested in `.env` into `.env.local`, then run:

```sh
npm install
npm run build
npm run start
```

Then open your browser to [http://localhost:8000](http://localhost:8000).

# development

```
$ npm run watch &
$ npm start
```

# commands

* `npm run build` - build for production
* `npm run watch` - automatically recompile during development
* `npm start` - start a static development web server
