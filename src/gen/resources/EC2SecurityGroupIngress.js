var Resource = require('../../resource');

/**
 * AWS::EC2::SecurityGroupIngress - The AWS::EC2::SecurityGroupIngress resource adds an ingress rule to an Amazon EC2 or Amazon VPC security group.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group-ingress.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function EC2SecurityGroupIngress(name) {
	Resource.call(this, name, 'AWS::EC2::SecurityGroupIngress');
}

EC2SecurityGroupIngress.prototype = Object.create(Resource.prototype);

/**
 * Specifies a CIDR range.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2SecurityGroupIngress}
 */
EC2SecurityGroupIngress.prototype.cidrIp = function(value) {
	return this.set('CidrIp', value);
};

/**
 * Start of port range for the TCP and UDP protocols, or an ICMP type number. If you specify icmp for the IpProtocol property, you can specify -1 as a wildcard (i.e., any ICMP type number).
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {Number|Attribute|Reference} value
 * @returns {EC2SecurityGroupIngress}
 */
EC2SecurityGroupIngress.prototype.fromPort = function(value) {
	return this.set('FromPort', value);
};

/**
 * ID of the Amazon EC2 or VPC security group to modify. The group must belong to your account.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2SecurityGroupIngress}
 */
EC2SecurityGroupIngress.prototype.groupId = function(value) {
	return this.set('GroupId', value);
};

/**
 * Name of the Amazon EC2 security group (non-VPC security group) to modify. This value can be a reference to an AWS::EC2::SecurityGroup resource or the name of an existing Amazon EC2 security group.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2SecurityGroupIngress}
 */
EC2SecurityGroupIngress.prototype.groupName = function(value) {
	return this.set('GroupName', value);
};

/**
 * IP protocol name or number. For valid values, see the IpProtocol parameter in AuthorizeSecurityGroupIngress
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2SecurityGroupIngress}
 */
EC2SecurityGroupIngress.prototype.ipProtocol = function(value) {
	return this.set('IpProtocol', value);
};

/**
 * Specifies the ID of the source security group or uses the Ref intrinsic function to refer to the logical ID of a security group defined in the same template.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2SecurityGroupIngress}
 */
EC2SecurityGroupIngress.prototype.sourceSecurityGroupId = function(value) {
	return this.set('SourceSecurityGroupId', value);
};

/**
 * Specifies the name of the Amazon EC2 security group (non-VPC security group) to allow access or uses the Ref intrinsic function to refer to the logical name of a security group defined in the same template. For instances in a VPC, specify the SourceSecurityGroupId property.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2SecurityGroupIngress}
 */
EC2SecurityGroupIngress.prototype.sourceSecurityGroupName = function(value) {
	return this.set('SourceSecurityGroupName', value);
};

/**
 * Specifies the AWS Account ID of the owner of the Amazon EC2 security group specified in the SourceSecurityGroupName property.
 *
 * Required: false
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {EC2SecurityGroupIngress}
 */
EC2SecurityGroupIngress.prototype.sourceSecurityGroupOwnerId = function(value) {
	return this.set('SourceSecurityGroupOwnerId', value);
};

/**
 * End of port range for the TCP and UDP protocols, or an ICMP code. If you specify icmp for the IpProtocol property, you can specify -1 as a wildcard (i.e., any ICMP code).
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {Number|Attribute|Reference} value
 * @returns {EC2SecurityGroupIngress}
 */
EC2SecurityGroupIngress.prototype.toPort = function(value) {
	return this.set('ToPort', value);
};

module.exports = EC2SecurityGroupIngress;
