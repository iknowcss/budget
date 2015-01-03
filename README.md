Budget
======

A simple budget application. Web server is a REST service written with express.js. The UI is written in knockout.js.

Prerequisites
-------------

### node.js

Download and install the latest version of node.js [here](http://nodejs.org/)

### Grunt and Bower

Install both the Grunt CLI and Bower CLI using the following command

    npm install -g grunt-cli bower

Grunt commands
--------------

**Note**: Before you run `grunt` for the first time, you will need to install the required dependencies for this project. To install the dependencies, run this command

    npm install

Start the app (default HTTP port 3000)

    grunt

Run server and UI unit tests

    grunt test

Run server and UI unit tests and include Istanbul coverage information

    grunt coverage

Troubleshooting
---------------

### When I run `grunt` or `bower` I get a git error

    Fatal error: Failed to execute "git ls-remote --tags --heads git://github.com/SteveSanderson/knockout.git", exit code of #128

Your firewall is probably blocking connections to port 22 (SSH). Run the following command to use port 443 (SSL) for GitHub downloads (**Note**: this is a global change)

    git config --global url."https://".insteadOf git://

Read more about it [here](https://coderwall.com/p/sitezg).

### When I run `grunt` I get a js-bson error

    js-bson: Failed to load c++ bson extension, using pure JS version

You do not have the proper `make` tools.

If you have a Debian-like OS (like **Ubuntu**) run this command

    sudo apt-get install gcc make build-essential

If you have **OS X** run this command

    xcode-select --install

After you have done that, clear out your old node_modules directory and re-run `npm`

    rm -rf node_modules
    npm cache clean
    npm install

Read more about it [here](http://stackoverflow.com/questions/21656420/failed-to-load-c-bson-extension).