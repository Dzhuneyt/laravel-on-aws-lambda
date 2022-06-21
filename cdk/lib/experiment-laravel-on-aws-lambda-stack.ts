import {Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import * as path from "path";
import {ServerlessLaravel} from "cdk-serverless-lamp";
import {LambdaIntegration, RestApi} from "aws-cdk-lib/aws-apigateway";
import {NodejsFunction} from "aws-cdk-lib/aws-lambda-nodejs";

export class ExperimentLaravelOnAwsLambdaStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const app = new ServerlessLaravel(this, 'ServerlessLaravel', {
            brefLayerVersion: 'arn:aws:lambda:eu-west-1:209497400698:layer:php-81-fpm:24',
            laravelPath: path.join(__dirname, '../../laravel'),
        });

        const api = new RestApi(this, 'RestApi');
        const fn = new NodejsFunction(this, 'NodejsFunction', {
            entry: path.resolve(__dirname, 'test.ts'),
        })
        api.root.addMethod('ANY', new LambdaIntegration(fn));

    }
}
