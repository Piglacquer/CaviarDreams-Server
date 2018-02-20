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
	deleteStock(ticker, id) {
		return database('stocks')
			.where({
				tickerSymbol: ticker,
				userId: id
			})
			.del()
	},
	deleteUser(id) {
		return database('users')
			.where('userId', id)
			.del()
	},
	deleteUserFromStocks(userId) {
		return database('stocks')
			.where('userId', userId)
			.del()
	},
	updateUser(id, name) {
		return database('users')
			.where('userId', userId)
			.update(name)
			.returning('*')
			.then(record => record[0])
	}
	// updateStock(id, ticker){
	// 	return database('stocks')
	// 	.where({
	// 		userId: id,
	// 		tickerSymbol: ticker
	// 	})
	// 	.update()
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
