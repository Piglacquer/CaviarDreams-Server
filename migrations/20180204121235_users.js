exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', users => {
		users.increments('userId')
		users.string('name')
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users')
}
