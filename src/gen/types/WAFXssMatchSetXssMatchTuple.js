var PropertyType = require('../../property-type');

/**
 * XssMatchTuple is a property of the AWS::WAF::XssMatchSet resource that specifies the part of a web request that you want AWS WAF to inspect for cross-site scripting attacks.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-xssmatchset-xssmatchtuple.html}
 * @constructor
 */
function WAFXssMatchSetXssMatchTuple() {
	PropertyType.call(this);
}

WAFXssMatchSetXssMatchTuple.prototype = Object.create(PropertyType.prototype);

/**
 * The part of a web request that you want AWS WAF to search, such as a specific header or a query string.
 *
 * Required: true
 *
 * @param {WAFXssMatchSetXssMatchTupleFieldToMatch} value
 * @returns {WAFXssMatchSetXssMatchTuple}
 */
WAFXssMatchSetXssMatchTuple.prototype.fieldToMatch = function(value) {
	return this.set('FieldToMatch', value);
};

/**
 * Specifies how AWS WAF processes the FieldToMatch property before inspecting a request for a match. Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF transforms theFieldToMatch parameter before inspecting a web request for a match.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {WAFXssMatchSetXssMatchTuple}
 */
WAFXssMatchSetXssMatchTuple.prototype.textTransformation = function(value) {
	return this.set('TextTransformation', value);
};

module.exports = WAFXssMatchSetXssMatchTuple;
