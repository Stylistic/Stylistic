![Stylistic Logo](http://gostylistic.com/images/stylistic-logo-teal.png)

A new [Stylus](http://stylus-lang.com) based CSS framework for those who love beautiful things.

[![GitHub version](https://badge.fury.io/gh/MarginZero%2FStylistic.svg)](https://badge.fury.io/gh/MarginZero%2FStylistic) [![Bower version](https://badge.fury.io/bo/stylistic.svg)](https://badge.fury.io/bo/stylistic)

## Table of Contents
+ [Getting Started](#getting-started)
  - [Installing NPM](#installing-npm)
  - [Forking this Repo](#forking-this-repo)
  - [Using Gulp](#using-gulp)
  - [Building](#building)
+ [Contributing](#contributing)
+ [About](#about)
+ [License](#license)

## Getting Started

Getting up and going is pretty easy, just follow the instructions below

#### Installing Node and NPM

If you already have Node.js and NPM installed you can skip this section, otherwise you're going to need to head on over to [nodejs.com](http://nodejs.com) and download the latest version of Node.js (at the time of writing **5.3.0**). Installing on Windows is pretty easy, just run the installer and follow the instructions. Installing on Mac and Linux can be little more time consuming though. For those I'd consult Google or use one of the following resources:
+ [Installing node.js on OSX 10.11](http://coolestguidesontheplanet.com/installing-node-js-on-osx-10-10-yosemite/)
+ [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/)
+ [Building node from source](https://github.com/nodejs/node-v0.x-archive/wiki/Installation)

#### Forking this repo

You can either fork this repo, clone it, or download the .zip archive and unpack it on to your system. I recommend forking it so that you are set up if you want to make any changes and contribute to the development of Stylistic in the future. To fork this repo just click the fork button in the top righthand corner of this page and select the account you want to fork it to. If you make any changes to the code that you'd like to have integrated into the master branch, please follow the instructions in the [contributing](#) section of this document.

#### Using Gulp

I have settled on Gulp as the build tool for compiling Stylus>CSS, ES2015>ES3, etc. If anyone has a compelling reason for why I should be using something else I am always open for discussion in the Issues section.

To get started with Gulp first open your terminal in the directory that you cloned or unpacked this repo. There should be a `Gulpfile.js` file at the root as well as this README and several other documents.
Once you are in the correct directory run `npm install` to install all of Stylistic's development dependencies. Among those dependencies will be Gulp.

Once all of the dependencies are installed you can proceed to the next section.

#### Building

With Gulp now installed you can run the `gulp` command in the same directory that has your `Gulpfile` in it. You should see something similar to the following:

IMAGE

If you didn't receive any errors then congratulations! If you look at your `dist` directory you should now have an up-to-date version of stylistic.css and stylistic.js.

## Contributing

As Uncle Ben said, "With great power comes great responsibility". Now I'm not saying that contributing to this project is anything like having Spider Man's powers, although I wish it were so, but contributing does have to be done right, so please follow the steps below.

#### Fork the Repo

If you haven't already done so fork this repo and clone the forked version on your machine. This will give you a git remote that points to your forked version of the repo. You should also add a remote for this repo so that you can pull any changes. To do all that:

+ Click the `Fork` button in the top right hand corner of the page.
+ On the page for your forked version of the repo click on the `Copy to Clipboard` button to copy the address of your repo to your clipboard. I recommend copying the `ssh` version rather than the `https` version so you don't have to enter your password every time you want to push changes.
+ On your own system clone the repo with `git clone git@github.com:UserName/Stylistic`
+ Change directories into the repo with `cd Stylistic`
+ Add this repo as a remote with `git remote add base https://github.com/MarginZero/Stylistic`
+ Now just for fun run `git pull base master`

Now anytime you want to sync your local copy with this repo all you have to do is run `git pull base master` and you'll be all caught up. Of course you will have to fix any merge conflicts as well.

#### Make a change

Once you have the repo forked you're ready to start making changes. Take a look around at the code first to see how things are formatted and then dive on in and write some code.
If you want some suggestions on things to add just head over to the Issues section or take a look at the [Roadmap](#) (Coming soon).

Make sure that any changes are attached to a branch. The branch naming convention here is:

`username/{patch | feature | other}/name`

#### Commit your change and submit a pull request

Once you've made a change commit it, push it to your remote, and then submit a pull request. Make sure to be descriptive when submitting a pull request so I know what your code is doing.

## About

This project is a combination of my favorite elements from Bootstrap, Foundation, Semantic UI, and Materialize with a few things of my own thrown in for good measure. The goal is to create a costomizable and extendable CSS framework that requires little tweaking to get beautiful results.

## License

This project is licensed under the MIT license.

Copyright (c) 2015-2016 Margin Zero LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
