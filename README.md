# node-addition-service

[![engagement-team-CI](https://circleci.com/gh/engagement-team-CI/node-addition-service.svg?style=shield)](https://app.circleci.com/pipelines/github/engagement-team-CI/node-addition-service)
[![build-test-and-deploy](https://github.com/engagement-team-CI/node-addition-service/actions/workflows/build-test-and-deploy.yml/badge.svg)](https://github.com/engagement-team-CI/node-addition-service/actions/workflows/build-test-and-deploy.yml)
[![Build Status](https://travis-ci.com/engagement-team-CI/node-addition-service.svg?branch=main)](https://travis-ci.com/engagement-team-CI/node-addition-service)
[![Build Status](https://gitlab.com/engagement.team/node-addition-service/badges/main/pipeline.svg)](https://gitlab.com/engagement.team/node-addition-service/-/tree/main)

## Background

This project is setup to be a "hello world" style Node.JS app for running a build on multiple CI providers.

The application has very minimal dependencies and doesn't do a whole lot. That means that the biggest factor in CI performance is likely going to be job spinup time. That means this might not be a good comparison for larger projects that have a large number of dependencies or contain very many CPU or memory intensive tests.

We tried to set each CI provider up in the way that is canonical for that provider. Please help us most fairly represent the performance by contributing PRs to add performance optimizations for any of the CI configurations that we may have missed.

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

Pipeline duration was collected across 10 pipeline runs for all providers.

|CI Provider   |1  |2 |3  |4  |5  |6  |7  |8  |9  |10 |Average|Median|
|--------------|--:|-:|--:|--:|--:|--:|--:|--:|--:|--:|------:|-----:|
|CircleCI      | 57|69| 68| 58| 53| 52| 52| 52| 55| 58|     57|    56|
|GitHub Actions| 77|85| 84| 95| 75| 79| 71| 74| 91| 81|     81|    80|
|GitLab        |107|98|100|102|107|104|107|100|111|109|    105|   106|
|TravisCI      | 81|67| 67| 79| 69| 70| 68| 69| 71| 74|     72|    70|

*\* All times are in seconds*
