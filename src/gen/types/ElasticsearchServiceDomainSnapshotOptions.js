/**
 * SnapshotOptions is a property of the the section called “AWS::Elasticsearch::Domain” resource that configures the automated snapshot of Amazon Elasticsearch Service (Amazon ES) domain indices.
 * @constructor
 */
function ElasticsearchServiceDomainSnapshotOptions(initialData) {
	this.data = initialData || {};
}

ElasticsearchServiceDomainSnapshotOptions.prototype = {
	
	/**
	 * The hour in UTC during which the service takes an automated daily snapshot of the indices in the Amazon ES domain. For example, if you specify 0, Amazon ES takes an automated snapshot everyday between midnight and 1 am. You can specify a value between 0 and 23.
	 *
	 * Required: false
	 *
	 * @param {Integer} value
	 * @return {ElasticsearchServiceDomainSnapshotOptions}
	 */
	automatedSnapshotStartHour: function(value) {
		return this.set('AutomatedSnapshotStartHour', value);
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

module.exports = ElasticsearchServiceDomainSnapshotOptions;