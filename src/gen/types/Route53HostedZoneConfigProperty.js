/**
 * The HostedZoneConfig property is part of the AWS::Route53::HostedZone resource that can contain a comment about the hosted zone.
 * @constructor
 */
function Route53HostedZoneConfigProperty(initialData) {
	this.data = initialData || {};
}

Route53HostedZoneConfigProperty.prototype = {
	
	/**
	 * Any comments that you want to include about the hosted zone.
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {Route53HostedZoneConfigProperty}
	 */
	comment: function(value) {
		return this.set('Comment', value);
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

module.exports = Route53HostedZoneConfigProperty;