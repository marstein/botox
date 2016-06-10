var Resource = require('../../resource');

/**
 * AWS::Kinesis::Stream - Creates an Amazon Kinesis stream that captures and transports data records that are emitted from data sources. For information about creating streams, see CreateStream in the Amazon Kinesis API Reference.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function KinesisStream(name) {
	Resource.call(this, name, 'AWS::Kinesis::Stream');
}

KinesisStream.prototype = Object.create(Resource.prototype);

/**
 * The name of the Amazon Kinesis stream. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the stream name. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {KinesisStream}
 */
KinesisStream.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The number of shards that the stream uses. For greater provisioned throughput, increase the number of shards.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {Number|Attribute|Reference} value
 * @returns {KinesisStream}
 */
KinesisStream.prototype.shardCount = function(value) {
	return this.set('ShardCount', value);
};

/**
 * An arbitrary set of tags (key–value pairs) to associate with the Amazon Kinesis stream.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @returns {KinesisStream}
 */
KinesisStream.prototype.tags = function(value) {
	return this.set('Tags', value);
};

module.exports = KinesisStream;
