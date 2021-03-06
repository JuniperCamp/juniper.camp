#!/usr/bin/env node
import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { JuniperCampStack } from "../index";

const app = new App();

new JuniperCampStack(app, "JuniperCampStack", {
  env: {
    account: "560632727631",
    // Stack must be in us-east-1, because the ACM certificate for a
    // global CloudFront distribution must be requested in us-east-1.
    region: "us-east-1"
  }
});
