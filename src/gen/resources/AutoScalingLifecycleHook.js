var Resource = require('../../resource');

/**
 * AWS::AutoScaling::LifecycleHook - Use AWS::AutoScaling::LifecycleHook to control the state of an instance in an Auto Scaling group after it is launched or terminated. When you use a lifecycle hook, the Auto Scaling group either pauses the instance after it is launched (before it is put into service) or pauses the instance as it is terminated (before it is fully terminated). For more information, see Examples of How to Use Lifecycle Hooks in the Auto Scaling User Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-lifecyclehook.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function AutoScalingLifecycleHook(name) {
	Resource.call(this, name, 'AWS::AutoScaling::LifecycleHook');
}

AutoScalingLifecycleHook.prototype = Object.create(Resource.prototype);

/**
 * The name of the Auto Scaling group for the lifecycle hook.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {AutoScalingLifecycleHook}
 */
AutoScalingLifecycleHook.prototype.autoScalingGroupName = function(value) {
	return this.set('AutoScalingGroupName', value);
};

/**
 * The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {AutoScalingLifecycleHook}
 */
AutoScalingLifecycleHook.prototype.defaultResult = function(value) {
	return this.set('DefaultResult', value);
};

/**
 * The amount of time that can elapse before the lifecycle hook times out. When the lifecycle hook times out, Auto Scaling performs the action that you specified in the DefaultResult property.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @returns {AutoScalingLifecycleHook}
 */
AutoScalingLifecycleHook.prototype.heartbeatTimeout = function(value) {
	return this.set('HeartbeatTimeout', value);
};

/**
 * The state of the Amazon EC2 instance to which you want to attach the lifecycle hook.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {AutoScalingLifecycleHook}
 */
AutoScalingLifecycleHook.prototype.lifecycleTransition = function(value) {
	return this.set('LifecycleTransition', value);
};

/**
 * Additional information that you want to include when Auto Scaling sends a message to the notification target.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {AutoScalingLifecycleHook}
 */
AutoScalingLifecycleHook.prototype.notificationMetadata = function(value) {
	return this.set('NotificationMetadata', value);
};

/**
 * The Amazon resource name (ARN) of the notification target that Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook. You can specify an Amazon SQS queue or an Amazon SNS topic. The notification message includes the following information: lifecycle action token, user account ID, Auto Scaling group name, lifecycle hook name, instance ID, lifecycle transition, and notification metadata.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {AutoScalingLifecycleHook}
 */
AutoScalingLifecycleHook.prototype.notificationTargetARN = function(value) {
	return this.set('NotificationTargetARN', value);
};

/**
 * The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target. The role requires permissions to Amazon SNS and Amazon SQS.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {AutoScalingLifecycleHook}
 */
AutoScalingLifecycleHook.prototype.roleARN = function(value) {
	return this.set('RoleARN', value);
};

module.exports = AutoScalingLifecycleHook;
