var PropertyType = require('../../property-type');

/**
 * PlacementType is a property of the Amazon Elastic MapReduce Cluster JobFlowInstancesConfig property that specifies the Availability Zone (AZ) in which the job flow runs.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig-placementtype.html}
 * @constructor
 */
function ElasticMapReduceClusterJobFlowInstancesConfigPlacementType() {
	PropertyType.call(this);
}

ElasticMapReduceClusterJobFlowInstancesConfigPlacementType.prototype = Object.create(PropertyType.prototype);

/**
 * The Amazon Elastic Compute Cloud (Amazon EC2) AZ for the job flow. For more information, see http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html in the Amazon EC2 User Guide for Linux Instances.
 *
 * Required: true
 *
 * @param {String} value
 * @returns {ElasticMapReduceClusterJobFlowInstancesConfigPlacementType}
 */
ElasticMapReduceClusterJobFlowInstancesConfigPlacementType.prototype.availabilityZone = function(value) {
	return this.set('AvailabilityZone', value);
};

module.exports = ElasticMapReduceClusterJobFlowInstancesConfigPlacementType;
