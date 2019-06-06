exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('students')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('students').insert([
				{ name: 'greg', cohort_id: 1 },
				{ name: 'gerald', cohort_id: 2 },
				{ name: 'tabetha', cohort_id: 3 }
			]);
		});
};
