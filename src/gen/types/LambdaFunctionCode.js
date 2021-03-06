var PropertyType = require('../../property-type');

/**
 * Code is a property of the AWS::Lambda::Function resource that enables you to specify the source code of an AWS Lambda (Lambda) function. Source code can be located in a file in an S3 bucket. For nodejs, nodejs4.3, and python2.7 runtime environments only, you can provide source code as inline text.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html}
 * @constructor
 */
function LambdaFunctionCode() {
	PropertyType.call(this);
}

LambdaFunctionCode.prototype = Object.create(PropertyType.prototype);

/**
 * The name of the S3 bucket that contains the source code of your Lambda function. The S3 bucket must be in the same region as the stack.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {LambdaFunctionCode}
 */
LambdaFunctionCode.prototype.s3Bucket = function(value) {
	return this.set('S3Bucket', value);
};

/**
 * The location and name of the .zip file that contains your source code. If you specify this property, you must also specify the S3Bucket property.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {LambdaFunctionCode}
 */
LambdaFunctionCode.prototype.s3Key = function(value) {
	return this.set('S3Key', value);
};

/**
 * If you have S3 versioning enabled, the version ID of the.zip file that contains your source code. You can specify this property only if you specify the S3Bucket and S3Key properties.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {LambdaFunctionCode}
 */
LambdaFunctionCode.prototype.s3ObjectVersion = function(value) {
	return this.set('S3ObjectVersion', value);
};

/**
 * For nodejs, nodejs4.3, and python2.7 runtime environments, the source code of your Lambda function. You can't use this property with other runtime environments.
 *
 * Required: false
 *
 * @param {String} value
 * @returns {LambdaFunctionCode}
 */
LambdaFunctionCode.prototype.zipFile = function(value) {
	return this.set('ZipFile', value);
};

module.exports = LambdaFunctionCode;
