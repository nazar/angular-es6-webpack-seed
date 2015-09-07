# About

A **seed** AngularJS project using:

+ AngularJS 1.4.5
+ Angular UI Router 0.2.15
+ Bootstrap 3.3.5 with Angular Strap 2.3.1
+ Gulp 3.9
+ Webpack 1.12.1
+ ES6 via Babel

This project demonstrates how AngularJS can be used with Webpack and ES6 via the provided webpack configuration files.

# Development Environment Provisioning

Please read the [provisioning](./provision/README.md) section for setting up the development environment.

# Linting

An [.eslintrc](./eslintrc) is provided for [ESLint](http://eslint.org/) but the eslint packages are not listed in [package.json](./package.json) as
  the eslint modules are required for the client machine (and not the development server).

To install ESLint:

```
npm install -g eslint
```