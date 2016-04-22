/**
 * EbsBlockDeviceConfig is a property of the Amazon Elastic MapReduce EbsConfiguration property that defines the settings for the Amazon Elastic Block Store (Amazon EBS) volumes that Amazon Elastic MapReduce (Amazon EMR) associates with your instances.
 * @constructor
 */
function ElasticMapReduceEbsConfigurationEbsBlockDeviceConfig(initialData) {
	this.data = initialData || {};
}

ElasticMapReduceEbsConfigurationEbsBlockDeviceConfig.prototype = {
	
	/**
	 * The settings for the Amazon EBS volumes.
	 *
	 * Required: true
	 *
	 * @param {ElasticMapReduceEbsConfigurationEbsBlockDeviceConfigVolumeSpecification} value
	 * @return {ElasticMapReduceEbsConfigurationEbsBlockDeviceConfig}
	 */
	volumeSpecification: function(value) {
		return this.set('VolumeSpecification', value);
	},

	/**
	 * The number of Amazon EBS volumes that you want to create for each instance in the EMR cluster or instance group.
	 *
	 * Required: false
	 *
	 * @param {Integer} value
	 * @return {ElasticMapReduceEbsConfigurationEbsBlockDeviceConfig}
	 */
	volumesPerInstance: function(value) {
		return this.set('VolumesPerInstance', value);
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

module.exports = ElasticMapReduceEbsConfigurationEbsBlockDeviceConfig;