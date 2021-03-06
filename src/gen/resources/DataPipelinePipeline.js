var Resource = require('../../resource');

/**
 * AWS::DataPipeline::Pipeline - Creates a data pipeline that you can use to automate the movement and transformation of data. In each pipeline, you define pipeline objects, such as activities, schedules, data nodes, and resources. For information about pipeline objects and components that you can use, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html}
 * @constructor
 * @param {String} name Name of the resource
 */
function DataPipelinePipeline(name) {
	Resource.call(this, name, 'AWS::DataPipeline::Pipeline');
}

DataPipelinePipeline.prototype = Object.create(Resource.prototype);

/**
 * Indicates whether to validate and start the pipeline or stop an active pipeline. By default, the value is set to true.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {Boolean|Attribute|Reference} value
 * @returns {DataPipelinePipeline}
 */
DataPipelinePipeline.prototype.activate = function(value) {
	return this.set('Activate', value);
};

/**
 * A description for the pipeline.
 *
 * Required: false
 * Update requires: Replacement.
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {DataPipelinePipeline}
 */
DataPipelinePipeline.prototype.description = function(value) {
	return this.set('Description', value);
};

/**
 * A name for the pipeline. Because AWS CloudFormation assigns each new pipeline a unique identifier, you can use the same name for multiple pipelines that are associated with your AWS account.
 *
 * Required: true
 * Update requires: Replacement
 *
 * @param {String|Attribute|Reference|Join} value
 * @returns {DataPipelinePipeline}
 */
DataPipelinePipeline.prototype.name = function(value) {
	return this.set('Name', value);
};

/**
 * Defines the variables that are in the pipeline definition. For more information, see Creating a Pipeline Using Parameterized Templates in the AWS Data Pipeline Developer Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {DataPipelinePipelineParameterObjects|Attribute|Reference} value AWS Data Pipeline Pipeline ParameterObjects
 * @returns {DataPipelinePipeline}
 */
DataPipelinePipeline.prototype.parameterObjects = function(value) {
	return this.set('ParameterObjects', value);
};

/**
 * Defines the values for the parameters that are defined in the ParameterObjects property. For more information, see Creating a Pipeline Using Parameterized Templates in the AWS Data Pipeline Developer Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {DataPipelinePipelineParameterValues|Attribute|Reference} value AWS Data Pipeline Pipeline ParameterValues
 * @returns {DataPipelinePipeline}
 */
DataPipelinePipeline.prototype.parameterValues = function(value) {
	return this.set('ParameterValues', value);
};

/**
 * A list of pipeline objects that make up the pipeline. For more information about pipeline objects and a description of each object, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
 *
 * Required: true
 * Update requires: Some interruptions. Not all objects, fields, and values can be updated. Restrictions on what can be updated are documented in Editing Your Pipelines in the AWS Data Pipeline Developer Guide.
 *
 * @param {DataPipelinePipelineObjects[]|Attribute|Reference} value A list of AWS Data Pipeline PipelineObjects
 * @returns {DataPipelinePipeline}
 */
DataPipelinePipeline.prototype.pipelineObjects = function(value) {
	return this.set('PipelineObjects', value);
};

/**
 * A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. For more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.
 *
 * Required: false
 * Update requires: No interruption
 *
 * @param {DataPipelinePipelinePipelineTags|Attribute|Reference} value AWS Data Pipeline Pipeline PipelineTags
 * @returns {DataPipelinePipeline}
 */
DataPipelinePipeline.prototype.pipelineTags = function(value) {
	return this.set('PipelineTags', value);
};

module.exports = DataPipelinePipeline;
