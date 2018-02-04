exports.seed = function(knex, Promise) {
	return knex('stocks')
		.del()
		.then(function() {
			return knex('stocks').insert([
				{ id: 1, tickerSymbol: 'MSFT', numberOfShares: 3, avgCost: 3.5 },
				{ id: 1, tickerSymbol: 'NVDA', numberOfShares: 3, avgCost: 3.5 },
				{ id: 1, tickerSymbol: 'TSLA', numberOfShares: 3, avgCost: 3.5 },
				{ id: 2, tickerSymbol: 'MSFT', numberOfShares: 3, avgCost: 3.5 },
				{ id: 2, tickerSymbol: 'AMD', numberOfShares: 3, avgCost: 3.5 },
				{ id: 3, tickerSymbol: 'BAC', numberOfShares: 3, avgCost: 3.5 }
			])
		})
}
