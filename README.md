# node-addition-service

[![engagement-team-CI](https://circleci.com/gh/engagement-team-CI/node-addition-service.svg?style=shield)](https://app.circleci.com/pipelines/github/engagement-team-CI/node-addition-service)
[![build-test-and-deploy](https://github.com/engagement-team-CI/node-addition-service/actions/workflows/build-test-and-deploy.yml/badge.svg)](https://github.com/engagement-team-CI/node-addition-service/actions/workflows/build-test-and-deploy.yml)
[![Build Status](https://travis-ci.com/engagement-team-CI/node-addition-service.svg?branch=main)](https://travis-ci.com/engagement-team-CI/node-addition-service)
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

## Data

Pipeline duration was collected across 10 pipeline runs for all providers

|CI Provider   |Run 1      |Run 2     |Run 3      |Run 4      |Run 5      |Run 6      |Run 7      |Run 8      |Run 9      |Run 10     |Average    |Median     |
|--------------|-----------|----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|-----------|
|CircleCI      |57 seconds |69 seconds|68 seconds |58 seconds |53 seconds |52 seconds |52 seconds |52 seconds |55 seconds |58 seconds |57 seconds |56 seconds |
|GitHub Actions|77 seconds |85 seconds|84 seconds |95 seconds |75 seconds |79 seconds |71 seconds |74 seconds |91 seconds |81 seconds |81 seconds |80 seconds |
|GitLab        |107 seconds|98 seconds|100 seconds|102 seconds|107 seconds|104 seconds|107 seconds|100 seconds|111 seconds|109 seconds|105 seconds|106 seconds|
|TravisCI      |81 seconds |67 seconds|67 seconds |79 seconds |69 seconds |70 seconds |68 seconds |69 seconds |71 seconds |74 seconds |72 seconds |70 seconds |

