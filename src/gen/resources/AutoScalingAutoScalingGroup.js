var Resource = require('../../resource');

/**
 * AWS::AutoScaling::AutoScalingGroup - The AWS::AutoScaling::AutoScalingGroup type creates an Auto Scaling group.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-group.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function AutoScalingAutoScalingGroup(name) {
	Resource.call(this, name, 'AWS::AutoScaling::AutoScalingGroup');
}

AutoScalingAutoScalingGroup.prototype = Object.create(Resource.prototype);


/**
 * Contains a list of availability zones for the group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {string[]|Attribute|Reference} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.availabilityZones = function(value) {
	return this.set('AvailabilityZones', value);
};

/**
 * The number of seconds after a scaling activity is completed before any further scaling activities can start.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.cooldown = function(value) {
	return this.set('Cooldown', value);
};

/**
 * Specifies the desired capacity for the Auto Scaling group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.desiredCapacity = function(value) {
	return this.set('DesiredCapacity', value);
};

/**
 * The length of time in seconds after a new EC2 instance comes into service that Auto Scaling starts checking its health.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Number|Attribute|Reference} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.healthCheckGracePeriod = function(value) {
	return this.set('HealthCheckGracePeriod', value);
};

/**
 * The service you want the health status from, Amazon EC2 or Elastic Load Balancer. Valid values are EC2 or ELB.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.healthCheckType = function(value) {
	return this.set('HealthCheckType', value);
};

/**
 * The ID of the Amazon EC2 instance you want to use to create the Auto Scaling group. Use this property if you want to create an Auto Scaling group that uses an existing Amazon EC2 instance instead of a launch configuration.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.instanceId = function(value) {
	return this.set('InstanceId', value);
};

/**
 * Specifies the name of the associated AWS::AutoScaling::LaunchConfiguration.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.launchConfigurationName = function(value) {
	return this.set('LaunchConfigurationName', value);
};

/**
 * A list of load balancers associated with this Auto Scaling group.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {string[]|Attribute|Reference} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.loadBalancerNames = function(value) {
	return this.set('LoadBalancerNames', value);
};

/**
 * The maximum size of the Auto Scaling group.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.maxSize = function(value) {
	return this.set('MaxSize', value);
};

/**
 * Enables the monitoring of group metrics of an Auto Scaling group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {AutoScalingMetricsCollection[]|Attribute|Reference} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.metricsCollection = function(value) {
	return this.set('MetricsCollection', value);
};

/**
 * The minimum size of the Auto Scaling group.
 *
 * Required: true
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.minSize = function(value) {
	return this.set('MinSize', value);
};

/**
 * An embedded property that configures an Auto Scaling group to send notifications when specified events take place.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {AutoScalingNotificationConfigurations[]|Attribute|Reference} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.notificationConfigurations = function(value) {
	return this.set('NotificationConfigurations', value);
};

/**
 * The name of an existing cluster placement group into which you want to launch your instances. A placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a placement group.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String|Attribute|Reference|Join} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.placementGroup = function(value) {
	return this.set('PlacementGroup', value);
};

/**
 * The tags you want to attach to this resource.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {AutoScalingTag[]|Attribute|Reference} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.tags = function(value) {
	return this.set('Tags', value);
};

/**
 * A policy or a list of policies that are used to select the instances to terminate. The policies are executed in the order that you list them.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {string[]|Attribute|Reference} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.terminationPolicies = function(value) {
	return this.set('TerminationPolicies', value);
};

/**
 * A list of subnet identifiers of Amazon Virtual Private Cloud (Amazon VPCs).
 *
 * Required: false
 * Update requires: Some interruptions
 *
 * @param {string[]|Attribute|Reference} value
 * @return {AutoScalingAutoScalingGroup}
 */
AutoScalingAutoScalingGroup.prototype.vpczoneIdentifier = function(value) {
	return this.set('VPCZoneIdentifier', value);
};

module.exports = AutoScalingAutoScalingGroup;
