const database = require('./database-connection')
const knex = require('knex')({
	client: 'pg',
	connection: 'postgres:///tower'
})

module.exports = {
	listUsers() {
		return database('users')
	},
	listStocks() {
		return database('stocks')
	},
	listStocksByUser(userId) {
		return database('stocks')
			.select('*')
			.where('userId', userId)
			.returning('*')
	},
	createUser(user) {
		return database('users')
			.insert(user)
			.returning('*')
			.then(record => record[0])
	},
	createStock(stock) {
		return database('stocks')
			.insert(stock)
			.returning('*')
			.then(record => record[0])
	},
	deleteStock() {
		return database('stocks')
			.where('tickerSymbol', 'MSFT')
			.del()
	}
	// },
	// deleteUser(userId) {
	// 	return database('users')
	// 		.where('userId', userId)
	// 		.del()
	// },
	// deleteUserFromStocks(userId) {
	// 	return database('stocks')
	// 		.where('userId', userId)
	// 		.del()
	// }
	// update(id, tower) {
	// 	return database('tower')
	// 		.where('id', id)
	// 		.update(tower)
	// 		.returning('*')
	// 		.then(record => record[0])
	// },
	// delete(id) {
	// 	return database('tower')
	// 		.where('id', id)
	// 		.del()
	// }
}
