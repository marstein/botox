var PropertyType = require('../../property-type');

/**
 * PipelineTags is a property of the AWS::DataPipeline::Pipeline resource that defines arbitrary key-value pairs for a pipeline.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelinetags.html}
 * @constructor
 */
function DataPipelinePipelinePipelineTags() {
	PropertyType.call(this);
}

Object.setPrototypeOf(DataPipelinePipelinePipelineTags, PropertyType);

DataPipelinePipelinePipelineTags.prototype = {
	
	/**
	 * The key name of a tag.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {DataPipelinePipelinePipelineTags}
	 */
	key: function(value) {
		return this.set('Key', value);
	},

	/**
	 * The value to associate with the key name.
	 *
	 * Required: true
	 *
	 * @param {String} value
	 * @return {DataPipelinePipelinePipelineTags}
	 */
	value: function(value) {
		return this.set('Value', value);
	}
};

module.exports = DataPipelinePipelinePipelineTags;