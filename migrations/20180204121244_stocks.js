exports.up = function(knex, Promise) {
	return knex.schema.createTable('stocks', stocks => {
		stocks.integer('userId')
		stocks.string('tickerSymbol')
		stocks.integer('numberOfShares')
		stocks.decimal('avgCost')
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('stocks')
}
