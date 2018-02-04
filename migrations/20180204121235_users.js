exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', users => {
		tablename.increments()
		tablename.string('name')
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users')
}
