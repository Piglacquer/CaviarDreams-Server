exports.seed = function(knex, Promise) {
	return knex('users')
		.del()
		.then(function() {
			return knex('users').insert([
				{ id: 1, name: 'Stewart Little' },
				{ id: 2, name: 'John Bon' },
				{ id: 3, name: 'Larisha Toodles' }
			])
		})
}
