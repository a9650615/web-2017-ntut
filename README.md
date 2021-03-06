# Webpack Frontend Starterkit

A lightweight foundation for your next webpack based frontend project.


### Installation

```
npm install
```

### Start Dev Server 

```
npm run dev
```

### Build Prod Version

```
npm run build
```

### Make JS Code Standard
```
npm run standard
```

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

### Features:

* ES6 Support via [babel-loader](https://github.com/babel/babel-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)
* Hot Module Replacement

When you run `npm run build` we use the [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) to move the css to a separate file and included in the head of your `index.html`, so that the styles are applied before any javascript gets loaded. We disabled this function for the dev version, because the loader doesn't support hot module replacement.
