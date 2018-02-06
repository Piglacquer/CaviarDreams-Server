exports.seed = function(knex, Promise) {
	return knex('users')
		.del()
		.then(function() {
			return knex('users').insert([
				{ userId: 1, name: 'Stewart Little' },
				{ userId: 2, name: 'John Bon' },
				{ userId: 3, name: 'Larisha Toodles' }
			])
		})
	// .then(() => {
	// 	return knex.raw('ALTER SEQUENCE users_userId_seq RESTART WITH 4;')
	// })
}
