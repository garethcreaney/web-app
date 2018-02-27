# express-web-app

### Installation
To get started, you will have to run a few terminal commands. To begin with, make sure you have [brew](https://brew.sh/) installed. Run `brew -v` in yout terminal to check.

Then, brew install the following packages:
- git
- node
- nvm
- yarn
- postgresql

Node v8.0.0 or greater is required to run the app. You can install this directly from brew, or if you want to test using different versions of Node, try using the nvm (Node Version Manager) package.

### Setup dev directory
Change into your development directory then clone this repo. If you use git on the command line, run `git clone git@github.com:locate-a-locum/express-web-app.git`. If you have correctly set up your ssh key, this will create a directory called `express-web-app` and copy this repo to it.

If you use a GUI for git, such as SourceTree, your set up steps will be different.

### Getting started.
From the project directory run `yarn install` to install all of the project dependencies.

The application also requires some environment variables. Defaults have been provided. To use them run `cp .env_template .env`.
You will need to update the development api credentials and database connection strings.

Finally, you will need two terminal tabs open. In one, run `yarn run gulp`. This will compile and minify all assets. In the other run `yarn run start-dev`. This will fire the server up. If you have stuck with the default environment variable, it will be running at [http://localhost:8080](http://localhost:8080)
