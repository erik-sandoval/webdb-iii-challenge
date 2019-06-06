exports.up = function(knex, Promise) {
	return knex.schema.createTable('students', function(table) {
		table.increments();
		table.text('name').notNullAble();
		table
			.integer('cohort_id')
			.unsigned()
			.references('id')
			.inTable('cohorts')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('students');
};
