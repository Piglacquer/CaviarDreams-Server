require('dotenv').config()

module.exports = {
	development: {
		client: 'pg',
		connection: 'postgres:///tower'
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL
	}
}
