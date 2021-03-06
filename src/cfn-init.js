var TemplateItemTrait = require('./template-item-trait');

/**
 * Use the AWS::CloudFormation::Init type to include metadata on an Amazon EC2 instance for the cfn-init helper script. If your template calls the cfn-init script, the script looks for resource metadata rooted in the AWS::CloudFormation::Init metadata key.
 *
 * The metadata is organized into config keys, which you can group into configsets. You can specify a configset when you call cfn-init in your template. If you don't specify a configset, cfn-init looks for a single config key named config.
 * @constructor
 * @implements TemplateItemTrait
 * @see {@link docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html}
 */
function CloudFormationInit() {
	this.configSets = {};
	this.configs = {};
}

CloudFormationInit.prototype = {
	/**
	 * If you want to create more than one config key and to have cfn-init process them in a specific order, create a configset that contains the config keys in the desired order.
	 * @param {String} name
	 * @param {String[]} configKeys
	 * @returns {CloudFormationInit}
	 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-init.html#aws-resource-init-configsets}
	 */
	configSet: function(name, configKeys) {
		this.configSets[name] = configKeys;
		return this;
	},

	/**
	 * The metadata is organized into config keys, which you can group into configsets. You can specify a configset when you call cfn-init in your template. If you don't specify a configset, cfn-init looks for a single config key named config.
	 * @param {Config} config
	 * @returns {CloudFormationInit}
	 */
	config: function(config) {
		this.configs[config.name] = config;
		return this;
	},

	toJSON: function() {
		var json = {};

		if (Object.keys(this.configSets).length) {
			json.configSets = this.configSets;
		}

		Object.assign(json, this.configs);

		return json;
	}
};

Object.assign(CloudFormationInit.prototype, TemplateItemTrait.prototype);

module.exports = CloudFormationInit;
