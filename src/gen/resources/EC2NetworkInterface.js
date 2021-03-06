var Resource = require('../../resource');
var Attribute = require('../../fun/attribute');

/**
 * AWS::EC2::NetworkInterface - Describes a network interface in an Elastic Compute Cloud (EC2) instance for AWS CloudFormation. This is provided in a list in the NetworkInterfaces property of AWS::EC2::Instance.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-network-interface.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2NetworkInterface(name) {
	Resource.call(this, name, 'AWS::EC2::NetworkInterface');
}

EC2NetworkInterface.prototype = Object.create(Resource.prototype);

/**
 * The description of this network interface.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2NetworkInterface}
 */
EC2NetworkInterface.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * A list of security group IDs associated with this network interface.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {String[]|Attribute|Reference} value
 * @returns {EC2NetworkInterface}
 */
EC2NetworkInterface.prototype.groupSet = function(value) {
	return this.set('GroupSet', value);
};

/**
 * Assigns a single private IP address to the network interface, which is used as the primary private IP address. If you want to specify multiple private IP address, use the PrivateIpAddresses property.
 *
 * Required: false
 * Update requires: Replacement.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2NetworkInterface}
 */
EC2NetworkInterface.prototype.privateIpAddress = function(value) {
	return this.set('PrivateIpAddress', value);
};

/**
 * Assigns a list of private IP addresses to the network interface. You can specify a primary private IP address by setting the value of the Primary property to true in the PrivateIpAddressSpecification property. If you want Amazon EC2 to automatically assign private IP addresses, use the SecondaryPrivateIpAddressCount property and do not specify this property.
 *
 * Required: false
 * Update requires: Replacement if you change the primary private IP address. If not, update requires No interruption.
 *
 * @param {EC2NetworkInterfacePrivateIPSpecification[]|Attribute|Reference} value list of PrivateIpAddressSpecification.
 * @returns {EC2NetworkInterface}
 */
EC2NetworkInterface.prototype.privateIpAddresses = function(value) {
	return this.set('PrivateIpAddresses', value);
};

/**
 * The number of secondary private IP addresses that Amazon EC2 automatically assigns to the network interface. Amazon EC2 uses the value of the PrivateIpAddress property as the primary private IP address. If you don't specify that property, Amazon EC2 automatically assigns both the primary and secondary private IP addresses.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {Number|Attribute|Reference} value
 * @returns {EC2NetworkInterface}
 */
EC2NetworkInterface.prototype.secondaryPrivateIpAddressCount = function(value) {
	return this.set('SecondaryPrivateIpAddressCount', value);
};

/**
 * Flag indicating whether traffic to or from the instance is validated.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {EC2NetworkInterface}
 */
EC2NetworkInterface.prototype.sourceDestCheck = function(value) {
	return this.set('SourceDestCheck', value);
};

/**
 * The ID of the subnet to associate with the network interface.
 *
 * Required: true
 * Update requires: Replacement.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2NetworkInterface}
 */
EC2NetworkInterface.prototype.subnetId = function(value) {
	return this.set('SubnetId', value);
};

/**
 * An arbitrary set of tags (key–value pairs) for this network interface.
 *
 * Required: false
 * Update requires: No interruption.
 *
 * @param {CloudFormationResourceTagsType[]|Attribute|Reference} value AWS CloudFormation Resource Tags
 * @returns {EC2NetworkInterface}
 */
EC2NetworkInterface.prototype.tags = function(value) {
	return this.set('Tags', value);
};

/**
 * AWS::EC2::NetworkInterface attributes
 * @constructor
 * @param {Resource} resource
 */
function EC2NetworkInterfaceAttributes(resource) {
	this.resource = resource;
}
EC2NetworkInterfaceAttributes.prototype = {
	/**
	 * Returns the primary private IP address of the network interface. For example, 10.0.0.192.
	 * @type {Attribute}
	 */
	get primaryPrivateIpAddress() {
		return new Attribute(this.resource, 'PrimaryPrivateIpAddress');
	},

	/**
	 * Returns the secondary private IP addresses of the network interface. For example, ["10.0.0.161", "10.0.0.162", "10.0.0.163"].
	 * @type {Attribute}
	 */
	get secondaryPrivateIpAddresses() {
		return new Attribute(this.resource, 'SecondaryPrivateIpAddresses');
	}
};

/**
 * Gets attribute map for AWS::EC2::NetworkInterface
 * @returns {EC2NetworkInterfaceAttributes}
 */
EC2NetworkInterface.prototype.attr = function() {
	return new EC2NetworkInterfaceAttributes(this);
};

module.exports = EC2NetworkInterface;
