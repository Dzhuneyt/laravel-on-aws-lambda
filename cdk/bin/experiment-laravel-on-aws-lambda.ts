#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {ExperimentLaravelOnAwsLambdaStack} from '../lib/experiment-laravel-on-aws-lambda-stack';

const app = new cdk.App();
new ExperimentLaravelOnAwsLambdaStack(app, 'ExperimentLaravelOnAwsLambdaStack', {
    env: {account: process.env.CDK_DEFAULT_ACCOUNT, region: 'eu-west-1'},
});
