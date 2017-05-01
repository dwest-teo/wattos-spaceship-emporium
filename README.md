# wattos-spaceship-emporium
> Node.js/React universal web app, offering only the finest preowned spacecraft.  watto.donnywest.com

## About

This is a universal JavaScript application written in ES6/7+.  Next.js is used to handle server-side rendering and routing, with a slim native Node.js http server in front of it to support parameterized routing.  Application state is managed by Redux, and CSS-in-JS styling is handled using CSX.  A live demo is available at [https://watto.donnywest.com](https://watto.donnywest.com).

## Installation/Development

To install and develop this application, you'll need a modern version of Node.js (tested on v7.7.3).  Several modern node features like async/await are used, so a fairly current Node.js version lets us keep the Babel transpilation pipeline to a minimum.  Yarn is recommended for dependency-handling, although a recent version of the NPM client should work fine as well.

First, clone this repository, go to the new directory, and install dependencies:
```bash
$ git clone https://github.com/dwest-teo/wattos-spaceship-emporium.git
$ cd wattos-spaceship-emporium
$ yarn
```

To run locally for development including hot module replacement, run the dev script:
```bash
$ yarn run dev
```

## Deployment
To build for deployment, run the build script:
```bash
$ yarn run build
```

The "build" directory will contain the built application, ready to deploy.

Alternatively, you can use Now.sh for rapid deployment.  Edit the "now" configuration in package.json as appropriate, and deploy with:
```bash
$ now
```

It doesn't get much easier than that!


[![forthebadge](http://forthebadge.com/images/badges/fo-real.svg)](http://forthebadge.com)
