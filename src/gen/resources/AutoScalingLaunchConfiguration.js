var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::AutoScaling::LaunchConfiguration - The AWS::AutoScaling::LaunchConfiguration type creates an Auto Scaling launch configuration that can be used by an Auto Scaling group to configure Amazon EC2 instances in the Auto Scaling group.
 * @constructor
 */
function AutoScalingLaunchConfiguration(name, initialData) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = initialData || {};
	this.reference = new Reference(this);
}

AutoScalingLaunchConfiguration.prototype = {
	
	/**
	 * For Amazon EC2 instances in a VPC, indicates whether instances in the Auto Scaling group receive public IP addresses. If you specify true, each instance in the Auto Scaling receives a unique public IP address.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {Boolean} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	associatePublicIpAddress: function(value) {
		return this.set('AssociatePublicIpAddress', value);
	},

	/**
	 * Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {BlockDeviceMapping[]} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	blockDeviceMappings: function(value) {
		return this.set('BlockDeviceMappings', value);
	},

	/**
	 * The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. You can specify this property only for EC2-Classic instances. For more information, see ClassicLink in the Amazon Elastic Compute Cloud User Guide.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	classicLinkVPCId: function(value) {
		return this.set('ClassicLinkVPCId', value);
	},

	/**
	 * The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {string[]} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	classicLinkVPCSecurityGroups: function(value) {
		return this.set('ClassicLinkVPCSecurityGroups', value);
	},

	/**
	 * Specifies whether the launch configuration is optimized for EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {Boolean} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	ebsOptimized: function(value) {
		return this.set('EbsOptimized', value);
	},

	/**
	 * Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String11600chars} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	iamInstanceProfile: function(value) {
		return this.set('IamInstanceProfile', value);
	},

	/**
	 * Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	imageId: function(value) {
		return this.set('ImageId', value);
	},

	/**
	 * The ID of the Amazon EC2 instance you want to use to create the launch configuration. Use this property if you want the launch configuration to use settings from an existing Amazon EC2 instance.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	instanceId: function(value) {
		return this.set('InstanceId', value);
	},

	/**
	 * Indicates whether detailed instance monitoring is enabled for the Auto Scaling group. By default, this property is set to true (enabled).
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {Boolean} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	instanceMonitoring: function(value) {
		return this.set('InstanceMonitoring', value);
	},

	/**
	 * Specifies the instance type of the EC2 instance.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	instanceType: function(value) {
		return this.set('InstanceType', value);
	},

	/**
	 * Provides the ID of the kernel associated with the EC2 AMI.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	kernelId: function(value) {
		return this.set('KernelId', value);
	},

	/**
	 * Provides the name of the EC2 key pair.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	keyName: function(value) {
		return this.set('KeyName', value);
	},

	/**
	 * The tenancy of the instance. An instance with a tenancy of dedicated runs on single-tenant hardware and can only be launched in a VPC. You must set the value of this parameter to dedicated if want to launch dedicated instances in a shared tenancy VPC (a VPC with the instance placement tenancy attribute set to default). For more information, see CreateLaunchConfiguration in the Auto Scaling API Reference.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	placementTenancy: function(value) {
		return this.set('PlacementTenancy', value);
	},

	/**
	 * The ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, refer to the AWS Resource Center and search for the kernel ID.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	ramDiskId: function(value) {
		return this.set('RamDiskId', value);
	},

	/**
	 * A list that contains the EC2 security groups to assign to the Amazon EC2 instances in the Auto Scaling group. The list can contain the name of existing EC2 security groups or references to AWS::EC2::SecurityGroup resources created in the template. If your instances are launched within VPC, specify Amazon VPC security group IDs.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {EC2securitygroup[]} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	securityGroups: function(value) {
		return this.set('SecurityGroups', value);
	},

	/**
	 * The spot price for this autoscaling group. If a spot price is set, then the autoscaling group will launch when the current spot price is less than the amount specified in the template.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	spotPrice: function(value) {
		return this.set('SpotPrice', value);
	},

	/**
	 * The user data available to the launched EC2 instances.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {AutoScalingLaunchConfiguration}
	 */
	userData: function(value) {
		return this.set('UserData', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::AutoScaling::LaunchConfiguration has no attributes');
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = AutoScalingLaunchConfiguration;