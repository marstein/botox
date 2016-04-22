/**
 * Describes the automatic time-based scaling configuration for an AWS::OpsWorks::Instance resource type. For more information, see SetTimeBasedAutoScaling in the AWS OpsWorks API Reference.
 * @constructor
 */
function AWSOpsWorksTimeBasedAutoScalingType(initialData) {
	this.data = initialData || {};
}

AWSOpsWorksTimeBasedAutoScalingType.prototype = {
	
	/**
	 * The schedule for Friday.
	 *
	 * Required: false
	 *
	 * @param {Stringtostringmap} value
	 * @return {AWSOpsWorksTimeBasedAutoScalingType}
	 */
	friday: function(value) {
		return this.set('Friday', value);
	},

	/**
	 * The schedule for Monday.
	 *
	 * Required: false
	 *
	 * @param {Stringtostringmap} value
	 * @return {AWSOpsWorksTimeBasedAutoScalingType}
	 */
	monday: function(value) {
		return this.set('Monday', value);
	},

	/**
	 * The schedule for Saturday.
	 *
	 * Required: false
	 *
	 * @param {Stringtostringmap} value
	 * @return {AWSOpsWorksTimeBasedAutoScalingType}
	 */
	saturday: function(value) {
		return this.set('Saturday', value);
	},

	/**
	 * The schedule for Sunday.
	 *
	 * Required: false
	 *
	 * @param {Stringtostringmap} value
	 * @return {AWSOpsWorksTimeBasedAutoScalingType}
	 */
	sunday: function(value) {
		return this.set('Sunday', value);
	},

	/**
	 * The schedule for Thursday.
	 *
	 * Required: false
	 *
	 * @param {Stringtostringmap} value
	 * @return {AWSOpsWorksTimeBasedAutoScalingType}
	 */
	thursday: function(value) {
		return this.set('Thursday', value);
	},

	/**
	 * The schedule for Tuesday.
	 *
	 * Required: false
	 *
	 * @param {Stringtostringmap} value
	 * @return {AWSOpsWorksTimeBasedAutoScalingType}
	 */
	tuesday: function(value) {
		return this.set('Tuesday', value);
	},

	/**
	 * The schedule for Wednesday.
	 *
	 * Required: false
	 *
	 * @param {Stringtostringmap} value
	 * @return {AWSOpsWorksTimeBasedAutoScalingType}
	 */
	wednesday: function(value) {
		return this.set('Wednesday', value);
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

module.exports = AWSOpsWorksTimeBasedAutoScalingType;