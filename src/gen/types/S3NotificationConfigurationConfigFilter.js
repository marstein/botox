var PropertyType = require('../../property-type');

/**
 * Filter is a property of the LambdaConfigurations, QueueConfigurations, and TopicConfigurations properties that describes the filtering rules that determine the Amazon Simple Storage Service (Amazon S3) objects for which to send notifications.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfiguration-config-filter.html}
 * @constructor
 */
function S3NotificationConfigurationConfigFilter() {
	PropertyType.call(this);
}

S3NotificationConfigurationConfigFilter.prototype = Object.create(PropertyType.prototype);

/**
 * Amazon S3 filtering rules that describe for which object key names to send notifications.
 *
 * Required: true
 *
 * @param {S3NotificationConfigurationConfigFilterS3Key} value
 * @returns {S3NotificationConfigurationConfigFilter}
 */
S3NotificationConfigurationConfigFilter.prototype.s3Key = function(value) {
	return this.set('S3Key', value);
};

module.exports = S3NotificationConfigurationConfigFilter;
