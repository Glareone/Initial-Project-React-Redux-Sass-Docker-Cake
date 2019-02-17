# Introduction 
This is an empty project with general structure to start new one without using create-app from react-team.
It contains all up to date technologies and their versions: 
Webpack4, 
Babel7 (with Babel8 time to time something doesn't work properly),
Redux,
Sass with style modules,
Eslint with code guideline configuration,
etc..
# Getting Started
1.	Installation process: this project contains Dockerfile, nginx configuration and some basical cake scripts to good start in Azure.
2.	Software dependencies: now all dependencies are concentrated in dependencies, 
because on Azure Cloud it doesn't build properly when some dependencies in devDependencies (registered Microsoft bug) 
3.	API references: This application contains a call to possible back-end source in localhost:5005/api/. It also is configurable.
4. Tests: for testing purposes in this project - jest is already injected and configured.
Also if you with - you could configure some load tests like "Gremlins", add snapshot tests, add nightmare testing.
# Build and Test
To build dev version: npm start;
to build prod version: npm run build
to run tests: npm run test.

# Contribute
Please feel free to use my initial projects when you start your own.
Hope you will find them very useful for you.