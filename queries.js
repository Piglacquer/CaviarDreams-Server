const database = require('./database-connection')

module.exports = {
	list() {
		return database('tower')
	},
	read(id) {
		return database('tower')
			.where('id', id)
			.returning()
			.first()
	},
	create(tower) {
		return database('tower')
			.insert(tower)
			.returning('*')
			.then(record => record[0])
	},
	update(id, tower) {
		return database('tower')
			.where('id', id)
			.update(tower)
			.returning('*')
			.then(record => record[0])
	},
	delete(id) {
		return database('tower')
			.where('id', id)
			.del()
	}
}
