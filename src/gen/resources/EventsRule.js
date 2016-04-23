var Resource = require('../../resource');

/**
 * AWS::Events::Rule - The AWS::Events::Rule resource creates a rule that matches incoming Amazon CloudWatch Events (CloudWatch Events) events and routes them to one or more targets for processing. For more information, see Using CloudWatch Events in the Amazon CloudWatch Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EventsRule(name) {
	Resource.call(this, name, 'AWS::Events::Rule');
}

EventsRule.prototype = Object.create(Resource.prototype);

/**
 * AWS::Events::Rule attribute map
 * @typedef {Object} EventsRuleAttributeMap
 * @property {Attribute} Arn The event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-1:123456789012:rule/example.
 */
Object.defineProperty(EventsRule.prototype, 'attr', {
	/**
	 * @return {EventsRuleAttributeMap}
	 */
	get: function() {
		var createAttribute = this.createAttribute.bind(this);
		return {
			
			/**
			 * The event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-1:123456789012:rule/example.
			 * @return {Attribute}
			 */
			get arn() {
				return createAttribute('Arn');
			}
		};
	}
});

/**
 * A description of the rule's purpose.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EventsRule}
 */
EventsRule.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * Describes which events CloudWatch Events routes to the specified target. These routed events are matched events. For more information, see Events and Event Patterns in the Amazon CloudWatch Developer Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Object|Attribute|Reference} value
 * @return {EventsRule}
 */
EventsRule.prototype.eventPattern = function(value) {
	return this.set('EventPattern', value);
};

/**
 * A name for the rule. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the rule name. For more information, see Name Type.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EventsRule}
 */
EventsRule.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that grants CloudWatch Events permission to make calls to target services, such as AWS Lambda (Lambda) or Amazon Kinesis streams.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EventsRule}
 */
EventsRule.prototype.roleArn = function(value) {
	return this.set('RoleArn', value);
};

/**
 * The schedule or rate (frequency) that determines when CloudWatch Events runs the rule. For more information, see Schedule Expression Syntax for Rules in the Amazon CloudWatch Developer Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {|Attribute|Reference} value
 * @return {EventsRule}
 */
EventsRule.prototype.scheduleExpression = function(value) {
	return this.set('ScheduleExpression', value);
};

/**
 * Indicates whether the rule is enabled. For valid values, see the State parameter for the PutRule action in the Amazon CloudWatch Events API Reference.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {EventsRule}
 */
EventsRule.prototype.state = function(value) {
	return this.set('State', value);
};

/**
 * The resources, such as Lambda functions or Amazon Kinesis streams, that CloudWatch Events routes events to and invokes when the rule is triggered.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {CloudWatchEventsRuleTarget[]|Attribute|Reference} value
 * @return {EventsRule}
 */
EventsRule.prototype.targets = function(value) {
	return this.set('Targets', value);
};

module.exports = EventsRule;
