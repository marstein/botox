var PropertyType = require('../../property-type');

/**
 * PortMappings is a property of the Amazon EC2 Container Service TaskDefinition ContainerDefinitions property that maps a container port to a host port.
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinitions-portmappings.html}
 * @constructor
 */
function EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings() {
	PropertyType.call(this);
}

EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings.prototype = Object.create(PropertyType.prototype);

/**
 * The port number on the container that is bound to the host port.
 *
 * Required: true
 *
 * @param {Number} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings.prototype.containerPort = function(value) {
	return this.set('ContainerPort', value);
};

/**
 * The host port number on the container instance that you want to reserve for your container. You can specify a non-reserved host port for your container port mapping, or you can omit the host port (or set it to 0). If you specify a container port but no host port, your container port is automatically assigned a host port in the 49153 to 65535 port range.
 *
 * Required: false
 *
 * @param {Number} value
 * @returns {EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings}
 */
EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings.prototype.hostPort = function(value) {
	return this.set('HostPort', value);
};

module.exports = EC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings;
