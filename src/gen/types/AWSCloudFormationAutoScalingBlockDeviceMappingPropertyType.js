/**
 * The AutoScaling Block Device Mapping type is an embedded property of the AWS::AutoScaling::LaunchConfiguration type.
 * @constructor
 */
function AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType(initialData) {
	this.data = initialData || {};
}

AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType.prototype = {
	
	/**
	 * The name of the device within Amazon EC2.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType}
	 */
	deviceName: function(value) {
		return this.set('DeviceName', value);
	},

	/**
	 * The Amazon Elastic Block Store volume information.
	 *
	 * Required: false
	 *
	 * @param {AutoScalingEBSBlockDevice} value
	 * @return {AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType}
	 */
	ebs: function(value) {
		return this.set('Ebs', value);
	},

	/**
	 * Suppresses the device mapping. If NoDevice is set to true for the root device, the instance might fail the Amazon EC2 health check. Auto Scaling launches a replacement instance if the instance fails the health check.
	 *
	 * Required: false
	 *
	 * @param {Boolean} value
	 * @return {AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType}
	 */
	noDevice: function(value) {
		return this.set('NoDevice', value);
	},

	/**
	 * The name of the virtual device. The name must be in the form ephemeralX where X is a number starting from zero (0), for example, ephemeral0.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType}
	 */
	virtualName: function(value) {
		return this.set('VirtualName', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType;