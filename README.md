# node-addition-service

[![engagement-team-CI](https://circleci.com/gh/engagement-team-CI/node-addition-service.svg?style=shield)](https://app.circleci.com/pipelines/github/engagement-team-CI/node-addition-service)
[![build-test-and-deploy](https://github.com/engagement-team-CI/node-addition-service/actions/workflows/build-test-and-deploy.yml/badge.svg)](https://github.com/engagement-team-CI/node-addition-service/actions/workflows/build-test-and-deploy.yml)
[![Build Status](https://travis-ci.com/engagement-team-CI/node-addition-service.svg?branch=main)](https://travis-ci.com/engagement-team-CI/node-addition-service.svg?branch=main)
[![Build Status](https://gitlab.com/engagement.team/node-addition-service/badges/main/pipeline.svg)](https://gitlab.com/engagement.team/node-addition-service/-/tree/main)

## Background

This project is setup to be a "hello world" style Node.JS app for running a build on multiple CI providers.

The application has very minimal dependencies and doesn't do a whole lot. That means that the biggest factor in CI performance is likely going to be job spinup time. That means this might not be a good comparison for larger projects that have a large number of dependencies or contain very many CPU or memory intensive tests.

## What the app does

The application is a minimal `express` based API that adds two numbers together.

## Spinning the app up locally

```
yarn install && yarn start
```

Then visit http://localhost:3000?a=2&b=3

## Running the tests locally

```
yarn install && yarn test
```
