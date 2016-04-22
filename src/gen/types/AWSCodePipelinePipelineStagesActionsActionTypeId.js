/**
 * ActionTypeId is a property of the AWS CodePipeline Pipeline Stages Actions property that specifies the action type and provider for an AWS CodePipeline action.
 * @constructor
 */
function AWSCodePipelinePipelineStagesActionsActionTypeId(initialData) {
	this.data = initialData || {};
}

AWSCodePipelinePipelineStagesActionsActionTypeId.prototype = {
	
	/**
	 * A category that defines which action type the owner (the entitiy that performs the action) performs. The category that you select determine the providers that you can specify for the Provider property. For valid values, see ActionTypeId in the AWS CodePipeline API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodePipelinePipelineStagesActionsActionTypeId}
	 */
	category: function(value) {
		return this.set('Category', value);
	},

	/**
	 * The entity that performs the action. For valid values, see ActionTypeId in the AWS CodePipeline API Reference.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodePipelinePipelineStagesActionsActionTypeId}
	 */
	owner: function(value) {
		return this.set('Owner', value);
	},

	/**
	 * The service provider that the action calls. The providers that you can specify are determined by the category that you select. For example, a valid provider for the Deploy category is AWS CodeDeploy, which you would specify as CodeDeploy.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodePipelinePipelineStagesActionsActionTypeId}
	 */
	provider: function(value) {
		return this.set('Provider', value);
	},

	/**
	 * A version identifier for this action.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {AWSCodePipelinePipelineStagesActionsActionTypeId}
	 */
	version: function(value) {
		return this.set('Version', value);
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

module.exports = AWSCodePipelinePipelineStagesActionsActionTypeId;