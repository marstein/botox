var Attribute = require('../../fun/attribute'),
	Reference = require('../../fun/reference');

/**
 * AWS::GameLift::Fleet - The AWS::GameLift::Fleet resource creates an Amazon GameLift (GameLift) fleet to host game servers. A fleet is a set of EC2 instances, each of which is a host in the fleet. For more information, see the CreateFleet action in the Amazon GameLift API Reference.
 * @constructor
 * @param {String} name Name of the resource
 */
function GameLiftFleet(name) {
	if (!name) {
		throw new Error('name is required');
	}

	this.name = name;
	this.data = {};
	this.reference = new Reference(this);
}

GameLiftFleet.prototype = {
	
	/**
	 * The unique identifier for the build that you want to use with this fleet.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {GameLiftFleet}
	 */
	buildId: function(value) {
		return this.set('BuildId', value);
	},

	/**
	 * Information that helps you identify the purpose of this fleet.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {GameLiftFleet}
	 */
	description: function(value) {
		return this.set('Description', value);
	},

	/**
	 * The number of EC2 instances that you want in this fleet.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {Number} value
	 * @return {GameLiftFleet}
	 */
	desiredEC2Instances: function(value) {
		return this.set('DesiredEC2Instances', value);
	},

	/**
	 * The incoming traffic, expressed as IP ranges and port numbers, that is permitted to access the game server. If you don't specify values, no traffic is permitted to your game servers.
	 *
	 * Required: false
	 * Update requires: No interruption
	 *
	 * @param {GameLiftFleetEC2InboundPermission[]} value
	 * @return {GameLiftFleet}
	 */
	ec2InboundPermissions: function(value) {
		return this.set('EC2InboundPermissions', value);
	},

	/**
	 * The type of EC2 instances that the fleet uses. EC2 instance types define the CPU, memory, storage, and networking capacity of the fleet's hosts. For more information about the instance types that are supported by GameLift, see the EC2InstanceType parameter in the Amazon GameLift API Reference.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {GameLiftFleet}
	 */
	ec2InstanceType: function(value) {
		return this.set('EC2InstanceType', value);
	},

	/**
	 * The path to game-session log files that are generated by your game server, with the slashes (\) escaped. After a game session has been terminated, GameLift captures and stores the logs in an S3 bucket.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {string[]} value
	 * @return {GameLiftFleet}
	 */
	logPaths: function(value) {
		return this.set('LogPaths', value);
	},

	/**
	 * An identifier to associate with this fleet. Fleet names don't need to be unique.
	 *
	 * Required: true
	 * Update requires: No interruption
	 *
	 * @param {String} value
	 * @return {GameLiftFleet}
	 */
	name: function(value) {
		return this.set('Name', value);
	},

	/**
	 * The parameters that are required to launch your game server. Specify these parameters as a string of command-line parameters, such as +sv_port 33435 +start_lobby.
	 *
	 * Required: false
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {GameLiftFleet}
	 */
	serverLaunchParameters: function(value) {
		return this.set('ServerLaunchParameters', value);
	},

	/**
	 * The location of your game server that GameLift launches. You must escape the slashes (\) and use the following pattern: C:\\game\\launchpath. For example, if your game server files are in the MyGame folder, the path should be C:\\game\\MyGame\\server.exe.
	 *
	 * Required: true
	 * Update requires: Replacement
	 *
	 * @param {String} value
	 * @return {GameLiftFleet}
	 */
	serverLaunchPath: function(value) {
		return this.set('ServerLaunchPath', value);
	},

	set: function(key, value) {
		this.data[key] = value;
		return this;
	},

	attr: function() {
		throw new Error('AWS::GameLift::Fleet has no attributes');
	},

	get ref() {
		return this.reference;
	},

	toJSON: function() {
		return this.data;
	},

	toString: function() {
		return JSON.stringify(this, null, '  ');
	}
};

module.exports = GameLiftFleet;
