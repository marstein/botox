var PropertyType = require('../../property-type');

/**
 * RetryOptions is a property of the Amazon Kinesis Firehose DeliveryStream ElasticsearchDestinationConfiguration property that configures the retry behavior when Amazon Kinesis Firehose (Firehose) can't deliver data to Amazon Elasticsearch Service (Amazon ES).
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-kinesisdeliverystream-elasticsearchdestinationconfiguration-retryoptions.html}
 * @constructor
 */
function KinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions() {
	PropertyType.call(this);
}

KinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions.prototype = Object.create(PropertyType.prototype);

/**
 * After an initial failure to deliver to Amazon ES, the total amount of time during which Firehose re-attempts delivery (including the first attempt). If Firehose can't deliver the data within the specified time, it writes the data to the backup S3 bucket. For valid values, see the DurationInSeconds content for the ElasticsearchRetryOptions data type in the Amazon Kinesis Firehose API Reference.
 *
 * Required: true
 *
 * @param {Number} value
 * @returns {KinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions}
 */
KinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions.prototype.durationInSeconds = function(value) {
	return this.set('DurationInSeconds', value);
};

module.exports = KinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationRetryOptions;
