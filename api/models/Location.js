/**
 * Location.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: 'mongo',
	attributes: {
		desc: {
			type: 'string',
			required: true,
		},
		lat: {
			type: 'string',
			required: true,
		},
		log: {
			type:'string',
			required: true
		},
		alt: {
			type:'string',
			required: true
		}
	}
}
