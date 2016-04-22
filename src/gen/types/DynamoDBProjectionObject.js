/**
 * Attributes that are copied (projected) from the source table into the index. These attributes are additions to the primary key attributes and index key attributes, which are automatically projected.
 * @constructor
 */
function DynamoDBProjectionObject() {
	this.data = {};
}

DynamoDBProjectionObject.prototype = {
	
	/**
	 * The non-key attribute names that are projected into the index.
	 *
	 * Required: false
	 *
	 * @param {string[]} value
	 * @return {DynamoDBProjectionObject}
	 */
	nonKeyAttributes: function(value) {
		return this.set('NonKeyAttributes', value);
	},

	/**
	 * The set of attributes that are projected into the index:
	 *
	 * Required: false
	 *
	 * @param {String} value
	 * @return {DynamoDBProjectionObject}
	 */
	projectionType: function(value) {
		return this.set('ProjectionType', value);
	},

	/**
	 * Only the index and primary keys are projected into the index.
	 *
	 * Required: false
	 *
	 * @param {undefined} value
	 * @return {DynamoDBProjectionObject}
	 */
	keys_ONLY: function(value) {
		return this.set('KEYS_ONLY', value);
	},

	/**
	 * Only the specified table attributes are projected into the index. The list of projected attributes are in NonKeyAttributes.
	 *
	 * Required: false
	 *
	 * @param {undefined} value
	 * @return {DynamoDBProjectionObject}
	 */
	include: function(value) {
		return this.set('INCLUDE', value);
	},

	/**
	 * All of the table attributes are projected into the index.
	 *
	 * Required: false
	 *
	 * @param {undefined} value
	 * @return {DynamoDBProjectionObject}
	 */
	all: function(value) {
		return this.set('ALL', value);
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

module.exports = DynamoDBProjectionObject;
