require('dotenv').config()

module.exports = {
	development: {
		client: 'pg',
		connection: 'postgres:///tower'
	},
	production: {
		client: 'pg',
		// connection:
		// 	'postgres://qtcbijksljenim:c82606ba29f7955e45761d6a53f85596ffdffa2cd6db7757d0fa1be9be164b6a@ec2-54-197-253-122.compute-1.amazonaws.com:5432/dakf5q2tervvjh'
		connection: process.env.DATABASE_URL
	}
}
