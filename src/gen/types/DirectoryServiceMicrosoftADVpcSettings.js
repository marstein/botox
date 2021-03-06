var PropertyType = require('../../property-type');

/**
 * VpcSettings is a property of the AWS::DirectoryService::MicrosoftAD resource that specifies the VPC settings for a Microsoft directory server.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-directoryservice-microsoftad-vpcsettings.html}
 * @constructor
 */
function DirectoryServiceMicrosoftADVpcSettings() {
	PropertyType.call(this);
}

DirectoryServiceMicrosoftADVpcSettings.prototype = Object.create(PropertyType.prototype);

/**
 * A list of two subnet IDs for the directory servers. Each subnet must be in different Availability Zones (AZs). AWS Directory Service creates a directory server and a DNS server in each subnet.
 *
 * Required: true
 *
 * @param {String[]} value
 * @returns {DirectoryServiceMicrosoftADVpcSettings}
 */
DirectoryServiceMicrosoftADVpcSettings.prototype.subnetIds = function(value) {
	return this.set('SubnetIds', value);
};

/**
 * The VPC ID in which to create the Microsoft Active Directory server.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {DirectoryServiceMicrosoftADVpcSettings}
 */
DirectoryServiceMicrosoftADVpcSettings.prototype.vpcId = function(value) {
	return this.set('VpcId', value);
};

module.exports = DirectoryServiceMicrosoftADVpcSettings;
