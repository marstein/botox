var PropertyType = require('../../property-type');

/**
 * ParameterLabel is a property of the AWS::CloudFormation::Interface resource that specifies a friendly name or description for a parameter that the AWS CloudFormation console shows instead of the parameter's logical ID.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-interface-parameterlabel.html}
 * @constructor
 */
function CloudFormationInterfaceParameterLabel() {
	PropertyType.call(this);
}

CloudFormationInterfaceParameterLabel.prototype = Object.create(PropertyType.prototype);

/**
 * A label for a parameter. The label defines a friendly name or description that the AWS CloudFormation console shows on the Specify Parameters page when a stack is created or updated. The ParameterLogicalID key must be the case-sensitive logical ID of a valid parameter that has been declared in the Parameters section of the template.
 *
 * Required: false
 *
 * @param {CloudFormationInterfaceLabel} value
 * @returns {CloudFormationInterfaceParameterLabel}
 */
CloudFormationInterfaceParameterLabel.prototype.parameterLogicalID = function(value) {
	return this.set('ParameterLogicalID', value);
};

module.exports = CloudFormationInterfaceParameterLabel;
