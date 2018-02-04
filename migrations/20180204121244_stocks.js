exports.up = function(knex, Promise) {
	return knex.schema.createTable('stocks', stocks => {
		tablename.integer('userId')
		tablename.string('tickerSymbol')
		tablename.integer('numberOfShares')
		tablename.integer('avgCost')
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('stocks')
}
