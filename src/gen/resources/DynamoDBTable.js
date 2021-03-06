var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::DynamoDB::Table - Creates a DynamoDB table.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function DynamoDBTable(name) {
	Resource.call(this, name, 'AWS::DynamoDB::Table');
}

DynamoDBTable.prototype = Object.create(Resource.prototype);

/**
 * A list of AttributeName and AttributeType objects that describe the key schema for the table and indexes.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {DynamoDBAttributeDefinitions[]|Attribute|Reference} value List of DynamoDB Attribute Definitions
 * @returns {DynamoDBTable}
 */
DynamoDBTable.prototype.attributeDefinitions = function(value) {
	return this.set('AttributeDefinitions', value);
};

/**
 * Global secondary indexes to be created on the table. You can create up to 5 global secondary indexes.
 *
 * Required: false
 * Update requires: Updates are not supported. with the following exceptions:
 *
 * @param {DynamoDBGlobalSecondaryIndexes[]|Attribute|Reference} value List of DynamoDB Global Secondary Indexes
 * @returns {DynamoDBTable}
 */
DynamoDBTable.prototype.globalSecondaryIndexes = function(value) {
	return this.set('GlobalSecondaryIndexes', value);
};

/**
 * Specifies the attributes that make up the primary key for the table. The attributes in the KeySchema property must also be defined in the AttributeDefinitions property.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {DynamoDBKeySchema[]|Attribute|Reference} value List of DynamoDB Key Schema
 * @returns {DynamoDBTable}
 */
DynamoDBTable.prototype.keySchema = function(value) {
	return this.set('KeySchema', value);
};

/**
 * Local secondary indexes to be created on the table. You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {DynamoDBLocalSecondaryIndexes[]|Attribute|Reference} value List of DynamoDB Local Secondary Indexes
 * @returns {DynamoDBTable}
 */
DynamoDBTable.prototype.localSecondaryIndexes = function(value) {
	return this.set('LocalSecondaryIndexes', value);
};

/**
 * Throughput for the specified table, consisting of values for ReadCapacityUnits and WriteCapacityUnits. For more information about the contents of a provisioned throughput structure, see DynamoDB Provisioned Throughput.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {DynamoDBProvisionedThroughput|Attribute|Reference} value DynamoDB Provisioned Throughput
 * @returns {DynamoDBTable}
 */
DynamoDBTable.prototype.provisionedThroughput = function(value) {
	return this.set('ProvisionedThroughput', value);
};

/**
 * The settings for the DynamoDB table stream, which capture changes to items stored in the table.
 *
 * Required: false
 * Update requires: No interruption to the table; however, the stream is replaced.
 *
 * @param {DynamoDBTableStreamSpecification|Attribute|Reference} value DynamoDB Table StreamSpecification
 * @returns {DynamoDBTable}
 */
DynamoDBTable.prototype.streamSpecification = function(value) {
	return this.set('StreamSpecification', value);
};

/**
 * A name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {DynamoDBTable}
 */
DynamoDBTable.prototype.tableName = function(value) {
	return this.set('TableName', value);
};

/**
 * AWS::DynamoDB::Table attributes
 * @constructor
 * @param {Resource} resource
 */
function DynamoDBTableAttributes(resource) {
	this.resource = resource;
}
DynamoDBTableAttributes.prototype = {
	/**
	 * The Amazon Resource Name (ARN) of the DynamoDB stream, such as arn:aws:dynamodb:us-east-1:123456789012:table/testddbstack-myDynamoDBTable-012A1SL7SMP5Q/stream/2015-11-30T20:10:00.000.
	 * @type {Attribute}
	 */
	get streamArn() {
		return new Attribute(this.resource, 'StreamArn');
	}
};

/**
 * Gets attribute map for AWS::DynamoDB::Table
 * @returns {DynamoDBTableAttributes}
 */
DynamoDBTable.prototype.attr = function() {
	return new DynamoDBTableAttributes(this);
};

module.exports = DynamoDBTable;
